import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../model/userSchema";
import { sendVerificationCode } from "../utils/Email";

const router = express.Router();

interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

router.post("/Signup", async (req: Request<{}, {}, SignupRequest>, res: Response) => {
  const { username, email, password } = req.body;

  // Validations for required fields
  if (!username || !email || !password) {
    return res
      .status(422)
      .json({ success: false, error: "Fill the fields properly" });
  }

  // Email pattern validation for specific domains
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!emailPattern.test(email)) {
    return res
      .status(422)
      .json({
        success: false,
        error: "Email must end with @gmail.com ",
      });
  }

  // Password pattern validation
  if (password.length < 6) {
    return res
      .status(422)
      .json({
        success: false,
        error: "Password must be at least 6 characters long",
      });
  }

  try {
    // Check if user already exists
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res
        .status(422)
        .json({ success: false, error: "Email already exists" });
    }

    // Create a new user
    const user = new User({
      username,
      email,
      password,
      verificationCode: Math.floor(100000 + Math.random() * 900000).toString(),
    });

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    // Save new user to the database
    await user.save();

    // Send verification code
    await sendVerificationCode(user.email, user.verificationCode);

    return res
      .status(201)
      .json({
        success: true,
        message: "Registration successful! Please verify your email.",
      });
  } catch (err) {
    console.error("Registration error:", err);
    return res
      .status(500)
      .json({ success: false, error: "Registration failed. Try again later." });
  }
});

export { router };
