"use strict";
//  import OpenAI from 'openai';
// import Configuration from 'openai';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureOpenAI = void 0;
const openai_1 = __importDefault(require("openai"));
const configureOpenAI = () => {
    return new openai_1.default({
        apiKey: process.env.OPENAI_API_KEY, // Your OpenAI API Key
    });
};
exports.configureOpenAI = configureOpenAI;
