// import { NextFunction,Request,Response } from "express";
// import user from "../models/user";
// import { configureOpenAI } from "../config/openai-config";
// import { model } from "mongoose";
// import { OpenAIApi,ChatCompletionRequesMessage} from "OPenai";


// export const generateChatCompletion= async (
//     req:Request,
//     res: Response,
//     next:NextFunction
// ) :Promise<void>=> {
//     const { message } =req.body;
//     const User = await user.findById(res.locals.jwtData.id);
//     if(!User)  res.status(401).json({message:"user not registered ot Token malfunctioned"});
//     return;
//     const chats = user.chats.map(({role,Content})=> ({role,content}));
//     chats.push({content:message,role:"user"});
//     user.chats.push({content: message ,role:"user"});
//     const config =configureOpenAI();
//     const openai = new OpenAIApi(config);
//     const chatResponse = await openai.createChatCompletion({
//         model:"gpt-3.5-turbo",
//         messages: chats,

//     });
//     user.chats.push(chatResponse.data.choices[0].message);
//     await user.Save();
//     return res.status(200).json({chats: user.chats})
// };



// import { NextFunction, Request, Response } from "express";
// import user from "../models/user";
// import { configureOpenAI } from "../config/openai-config";
// import { OpenAI } from "openai";

// export const generateChatCompletion = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ): Promise<void> => {
//     const { message } = req.body;
//     const User = await user.findById(res.locals.jwtData.id);
//     if (!User) {
//         res.status(401).json({ message: "User not registered or token malfunctioned" });
//         return;
//     }

//     const chats = User.chats.map(({ role, content }) => ({ role, content }));
//     chats.push({ content: message, role: "user" }); // Ensure this is added correctly
//     User.chats.push({ content: message, role: "user" });

//     const config = configureOpenAI();
//     const openai = new OpenAI(config);

//     const chatResponse = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: chats as { role: string; content: string }[], // Explicitly assert the type
//     });

//     User.chats.push(chatResponse.choices[0].message);
//     await User.save(); // Ensure the instance is saved correctly
//     res.status(200).json({ chats: User.chats });
//     return;
// };
// import { NextFunction, Request, Response } from "express";
// import user from "../models/user";  // Assuming your user model is imported correctly
// import { configureOpenAI } from "../config/openai-config";
// import { OpenAI } from "openai";

// interface ChatMessage {
//     role: string;
//     content: string;
// }

// export const generateChatCompletion = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ): Promise<void> => {
//     try {
//         const { message } = req.body;

//         // Find the user from the JWT data in `res.locals.jwtData`
//         const User = await user.findById(res.locals.jwtData.id);
//         if (!User) {
//             res.status(401).json({ message: "User not registered or token malfunctioned" });
//             return;
//         }

//         // Map user's chat history to the format required by OpenAI
//         const chats: ChatMessage[] = User.chats.map(({ role, content }: ChatMessage) => ({ role, content }));
//         chats.push({ content: message, role: "user" }); // Ensure user message is added correctly

//         // Add user message to their chat history
//         User.chats.push({ content: message, role: "user" });

//         // Configure OpenAI
//         const config = configureOpenAI();
//         const openai = new OpenAI(config);

//         // Call OpenAI to generate chat completion
//         const chatResponse = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: chats
//         });

//         // Ensure OpenAI response is added to user's chat history
//         const assistantMessage = chatResponse.choices[0]?.message;
//         if (assistantMessage) {
//             User.chats.push(assistantMessage);
//         }

//         // Save updated user chat history
//         await User.save();

//         // Respond with the updated chat history
//         res.status(200).json({ chats: User.chats });
//     } catch (error) {
//         // Handle any potential errors in the API call or DB operation
//         console.error("Error generating chat completion:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

import { NextFunction, Request, Response } from "express";
import user from "../models/user.js";
import OpenAI from "openai"; // Correct import for OpenAI

// Define the structure manually for chat messages
interface ChatMessage {
    role: "system" | "user" | "assistant";
    content: string;
}

export const generateChatCompletion = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { message } = req.body;

        // Fetch user by ID from JWT
        const User = await user.findById(res.locals.jwtData.id);
        if (!User) {
            res.status(401).json({ message: "User not registered or token malfunctioned" });
            return;
        }

        // Map User chats and filter roles to ensure they are valid
        const chats: ChatMessage[] = User.chats
            .map(({ role, content }: { role: string, content: string }) => {
                // Ensure role is one of the allowed values
                if (role === "system" || role === "user" || role === "assistant") {
                    return { role, content };
                }
                throw new Error(`Invalid role: ${role}`);
            });

        // Add user's new message
        chats.push({ role: "user", content: message });

        // Initialize OpenAI client with correct configuration
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY, // Use API key from environment variables
        });

        // Send chat completion request
        const chatResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: chats,
        });

        // Append the chat response and user's message to the database
        User.chats.push({ content: message, role: "user" });
        User.chats.push(chatResponse.choices[0].message); // Save AI's response
        await User.save();

        res.status(200).json({ chats: User.chats });
    } catch (error) {
        next(error); // Proper error handling
    }
};

