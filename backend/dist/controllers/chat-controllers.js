// import { NextFunction,Request,Response } from "express";
// import user from "../models/user";
// import { configureOpenAI } from "../config/openai-config";
// import { model } from "mongoose";
// import { OpenAIApi,ChatCompletionRequesMessage} from "OPenai";
import user from "../models/user.js";
import OpenAI from "openai"; // Correct import for OpenAI
export const generateChatCompletion = async (req, res, next) => {
    try {
        const { message } = req.body;
        // Fetch user by ID from JWT
        const User = await user.findById(res.locals.jwtData.id);
        if (!User) {
            res.status(401).json({ message: "User not registered or token malfunctioned" });
            return;
        }
        // Map User chats and filter roles to ensure they are valid
        const chats = User.chats
            .map(({ role, content }) => {
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
    }
    catch (error) {
        next(error); // Proper error handling
    }
};
//# sourceMappingURL=chat-controllers.js.map