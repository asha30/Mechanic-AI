import { Request,Response,NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { COOKIE_NAME } from './constants.js';

export const createToken =(id:String, email: String, expiresIn: string| number) =>{
    const payload ={id,email};
    const token = jwt.sign(payload,process.env.JWT_SECRET as string,{
        expiresIn,

    });
    return token;
};
export const verifyToken = async (
    req:Request,
    res:Response,
    next: NextFunction
) : Promise<void> => {
    const token = req.signedCookies[COOKIE_NAME];

    // Check if the token is present
    if (!token || token.trim() === "") {
        res.status(401).json({ message: "Token not received" });
        return; // Exit the function after sending a response
    }

    try {
        // Verify the token using async/await and ensure types are defined
        const decoded = await new Promise<JwtPayload | string>((resolve, reject) => {
            jwt.verify(token, process.env.JWT_SECRET as string, (err: jwt.VerifyErrors | null, decoded: JwtPayload | string | undefined) => {
                if (err) {
                    return reject(err); // Reject with the error
                }
                resolve(decoded!); // Resolve with the decoded token (non-null assertion)
            });
        });

        // Store the decoded token data for later use
        res.locals.jwtData = decoded;
        next(); // Call the next middleware
    } catch (error) {
        // Handle token expiration or verification error
        res.status(401).json({ message: "Token Expired or Invalid" });
    }
};