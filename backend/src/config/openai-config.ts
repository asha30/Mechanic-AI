//  import OpenAI from 'openai';
// import Configuration from 'openai';

// export const configureOpenAI=()=> {
//     const config = new Configuration({
//         apiKey: process.env.OPEN_AI_SECRET,
//     });

//     // return openai;
// };
// import OpenAI from 'openai';

// export const configureOpenAI = () => {
//     const openai = new OpenAI({
//         apiKey: process.env.OPEN_AI_SECRET,  // Make sure this is set in your environment variables
//     });

//     return openai;
//};
// Example configuration function
import { config } from "dotenv";
import  Configuration  from "openai";

export const configureOpenAI = () => {
    return new Configuration({
        apiKey: process.env.OPENAI_API_KEY, // Your OpenAI API Key
    });
};
