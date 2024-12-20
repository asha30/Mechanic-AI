import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import red from '@mui/material/colors/red';
import React, { useRef, useState } from 'react';
import { UseAuth } from '../Context/Authcontext';
import Chatitem from '../components/chat/Chatitem';
import {IoMdSend} from 'react-icons/io';
import { sendChatRequest } from '../helpers/api-communication';
type History ={
    role: "user" |"assistant";
    content: string;
};
const Chat =() => {
    const inputRef = useRef<HTMLInputElement |null>(null);
    const auth= UseAuth();
    const [chatHistory,setchatHistory] =useState<History[]>([]);
    const handleSubmit = async() =>{
    const content = inputRef.current?.value as string;
    if(inputRef && inputRef.current){
        inputRef.current.value="";
    }
    const newHistory: History={ role:"user",content};
    setchatHistory((prev) => [...prev,newHistory]);
    const chatData = await sendChatRequest(content);
    setchatHistory([...chatData.chats]);
};
    return (
    <Box
        sx={{
            display:"flex",
            flex:1,
            width:"100%",
            height:"100%",
            mt:3,
            gap:3,
        }}
    >
        <Box sx={{ display:{md:"flex",xs:"none",sm:"none"}, flex: 0.2,flexdirection:'column'}}>
            <Box
            sx={{
                display:"flex",
                width:"100%",
                height:"60vh",
                bgcolor:"rgb(17,29,39)",
                borderRadius:5,
                flexDirection:"column",
                mx: 3,
            }}
            >
                <Avatar
                    sx={{
                        mx:"auto",
                        my:2,
                        bgcolor:"white",
                        color:"black",
                        fontweight:700,
                    }}
                >{ auth?.user?.name [0]}
                </Avatar>
                <Typography sx={{mx:"auto",fontfamily: "work sans"}}>
                    You are talking to a chatBOT
                </Typography>
                <Typography sx={{mx: 'auto',fontfamily: "work sans", mu:4,p:3}}>
                "Welcome! How can I assist with your vehicle today? Describe any issues or services needed, and I'll guide you." 
                </Typography>
                <Button 
                sx={{width:"200px",
                my:'auto',
                color:"white",
                fontWeight:"700",
                borderRadius: 3,
                mx:"auto",
                bgcolor: red[300],
                ":hover":{
                    bgcolor:red.A400,
                },
                }}>clear conversation 
                </Button>
            </Box>
        </Box>
        <Box sx={{display: "flex",flex: {md:0.8,xs:1,sm:1}, flexDirection:'column',px:3}}>
            <Typography 
            sx={{fontSize:"40px",
            color:'white',
            mb:2,
            mx:"auto",
            fontWeight:"600"}}>
                model -GPT 3.5 Turbo</Typography>
                <Box 
                sx={{ width: "100%",
                    height:"60vh",
                    borderRadius:3,
                    mx:'auto',
                    display:'flex',
                    flexDirection:"column",
                    overflow:'scroll',
                    overflowX: 'hidden',
                    overflowY: "auto",
                    scrollBehavior:"smooth",
                    }}
                    >{chatHistory.map((chat,index) =>(
                        //@ts-ignore
                    <Chatitem content ={chat.content} role={chat.role} key ={index}/>
                ))}
                    </Box>
                    <div style={{ 
                        width:"100%",
                        padding:"20px",
                        borderRadius:8,
                        backgroundColor:"rgb(17,27,39)",
                        display: 'flex',
                        margin:"auto",
                    }}>
                        {" "}
                    <input 
                    ref={inputRef}
                    type="text" 
                    style={{width: "100%",
                    backgroundColor:"transparent",
                    padding:"10px",
                    border:"none",
                    outline:"none",
                    color:"white",
                    fontSize:"20px",
                }}/>
                <IconButton onClick={handleSubmit}  sx={{ml:"auto",color:"white"}}>
                    <IoMdSend/>
                </IconButton>
                </div>
        </Box>
    </Box>
    );
};
export default Chat;
