import User from "../models/user.js"; // if you're using TypeScript
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";
export const getAllusers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: "ok", users });
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser)
            res.status(401).send("Usee already registered");
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        //create token and stored cookie
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/",
        });
        const token = createToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });
        res.status(200).json({ message: "ok", id: user._id.toString() });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ message: "ERROR", cause: error.message });
        return;
    }
};
export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).send("User not registered");
            return;
        }
        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            res.status(403).send("Incorrect password");
            return;
        }
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/",
        });
        const token = createToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });
        res.status(200).json({ message: "ok", id: user._id.toString() });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ message: "ERROR", cause: error.message });
        return;
    }
};
export const verifyUser = async (req, res, next) => {
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            res.status(401).send("User not registered or Token malfunctioned");
            return;
        }
        console.log(user._id.toString(), res.locals.jwtData.id);
        if (user._id.toString() !== res.locals.jwtData.id) {
            res.status(401).send("Permissions didn't match");
        }
        res.status(200).json({ message: "ok", id: user._id.toString() });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ message: "ERROR", cause: error.message });
        return;
    }
};
//# sourceMappingURL=user-controllers.js.map