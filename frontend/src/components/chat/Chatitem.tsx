import { Avatar, Box ,Typography} from "@mui/material";
import React from "react";
import {UseAuth } from "../../Context/Authcontext";
 const Chatitem =({
    content,
    role,
 }: {
    content:string;
    role: "user" | "assistant";

 }) => {
    const auth = UseAuth();
    return role === "assistant" ?(
        <Box sx={{ display: "flex", p:2, bgcolor: "#004d5612",my:2, gap:2}}>
            <Avatar sx ={{ ml: "0"}}>
                <img src ="openai.png.jpg" alt="openai" width={"30px"} />
            </Avatar>
            <Box><Typography fontSize={"20px"}>{content}</Typography></Box>
        </Box>
    ) :(
        <Box sx={{ display: "flex", p:2, bgcolor: "#004d56",my:2, gap:2}}>
            <Avatar sx ={{ ml: "0", bgcolor:"black",color:"white"}}>
            { auth?.user?.name [0]}
            </Avatar>
            <Box><Typography fontSize={"20px"}>{content}</Typography></Box>
        </Box>
       
    );
 };
 export default Chatitem;
