// import React from 'react';
// import { IoIosLogIn } from 'react-icons/io';
// import { Button } from '@mui/material';
// import {Box,Typography} from "@mui/material";
// import CustomizedInput from '../components/shared/CustomizedInput';
// import {toast } from 'react-hot-toast';
// import { UseAuth } from '../Context/Authcontext';
// const login =() => {
//     const auth =UseAuth();
//     const handlesubmit =async(e:React.FormEvent<HTMLFormElement>)=> {
//         e.preventDefault();
//         const formData =new FormData(e.currentTarget);
//         const email= formData.get("email")as string;
//         const password =formData.get("password") as string;
//         try{
//             toast.loading("signing In",{id: "login"});
//             await auth?.login(email,password)
//             toast.success("signed In Successfully",{id: "login"});
//         }catch(error){
//             console.log(error);
//             toast.error("Signed In Failed", {id :"login"});
//         }
//     };
//     return (
//         <Box width={"80%"} height={"90%"} display="flex" flex={1}>
//             <Box padding={5} mt={8} display={{md: "flex", sm: "none",xs:"none"}}>
//                 <img src="mech.png.jpg" alt="mech" style={{width:"400px"}}/>
//             </Box>
//             <Box 
//             display ={"flex"}
//             flex={{xs:1,md:0.5}}
//             justifyContent={"center"}
//             alignItems={"center"}
//             padding={2}
//             ml={"auto"}
//             mt={16}
//             >
//                 <form
//                 onSubmit={(handlesubmit)}
//                 style={{
//                     margin: "auto",
//                     padding:"30px",
//                     boxShadow:"10px 10px 20px #000",
//                     borderRadius:"10px",
//                     border:"none",
//                 }}
//                 >
//                     <Box
//                     sx={{
//                         display: "flex",
//                         flexDirection:"column",
//                         justifyContent:"center",
//                     }}
//                     >
//                         <Typography
//                         variant='h4'
//                         textAlign="center"
//                         padding={2}
//                         fontWeight={600}
//                         >
//                             login
//                         </Typography>
//                         <CustomizedInput type="email" name="email" label="email"/>
//                         <CustomizedInput type="password" name="password" label='password'/>
//                         <Button type="submit" 
//                         sx={{
//                             px:2,
//                             py:1,mt:2,
//                             width:"400px",
//                             borderRadius:2,
//                             bgcolor:"#00fffc",
//                             ":hover":{
//                                 bgcolor:"white",
//                                 color:"black",
//                             },
//                                 }}
//                                 endIcon={<IoIosLogIn/>}
//                                 >login</Button>
//                     </Box>
//                 </form>
//             </Box>
//         </Box>
//     );
// };
// export default login;
// import React from 'react';
// import { IoIosLogIn } from 'react-icons/io';
// import { Button } from '@mui/material';
// import { Box, Typography } from "@mui/material";
// import CustomizedInput from '../components/shared/CustomizedInput';
// import { toast } from 'react-hot-toast';
// import { UseAuth } from '../Context/Authcontext';

// const login = () => {
//     const auth = UseAuth();
//     const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const email = formData.get("email") as string;
//         const password = formData.get("password") as string;
//         try {
//             toast.loading("Signing In", { id: "login" });
//             await auth?.login(email, password);
//             toast.success("Signed In Successfully", { id: "login" });
//         } catch (error) {
//             console.log(error);
//             toast.error("Sign In Failed", { id: "login" });
//         }
//     };

//     return (
//         <Box
//             width={"100%"}
//             height={"100vh"}
//             display="flex"
//             flexDirection="row"
//             justifyContent="center"
//             alignItems="center"
//             sx={{
//                 backgroundImage: 'url("home.jpg")', // Add your background image URL here
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//         >
//             <Box
//                 display={"flex"}
//                 flex={{ xs: 1, md: 0.5 }}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 padding={2}
//                 mt={16}
//             >
//                 <form
//                     onSubmit={(handlesubmit)}
//                     style={{
//                         margin: "auto",
//                         padding: "30px",
//                         boxShadow: "10px 10px 20px #000",
//                         borderRadius: "10px",
//                         border: "none",
//                         backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Adds a slight opacity to the form's background
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             display: "flex",
//                             flexDirection: "column",
//                             justifyContent: "center",
//                         }}
//                     >
//                         <Typography
//                             variant='h4'
//                             textAlign="center"
//                             padding={2}
//                             fontWeight={600}
//                         >
//                             Login
//                         </Typography>
//                         <CustomizedInput type="email" name="email" label="Email" />
//                         <CustomizedInput type="password" name="password" label="Password" />
//                         <Button
//                             type="submit"
//                             sx={{
//                                 px: 2,
//                                 py: 1, mt: 2,
//                                 width: "400px",
//                                 borderRadius: 2,
//                                 bgcolor: "#00fffc",
//                                 ":hover": {
//                                     bgcolor: "white",
//                                     color: "black",
//                                 },
//                             }}
//                             endIcon={<IoIosLogIn />}
//                         >
//                             Login
//                         </Button>
//                     </Box>
//                 </form>
//             </Box>
//         </Box>
//     );
// };

// export default login;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  interface ServerResponse {
    success: boolean;
    error?: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data: ServerResponse = await response.json();

      if (!data.success) {
        setErrorMessage(data.error || 'Invalid email or password!');
        setIsLoading(false);
        return;
      }

      alert('Login successful!');
      navigate('/dashboard'); // Replace with your dashboard route
    } catch (error) {
      setErrorMessage('Something went wrong! Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("home.jpg")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          padding: '30px',
          boxShadow: '10px 10px 20px #000',
          borderRadius: '10px',
          backgroundColor: 'white',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: 'black', textAlign: 'center', marginBottom: '20px' }}>Login</h1>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: 'white',
                color: 'black',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: 'white',
                color: 'black',
              }}
            />
          </div>
          {errorMessage && (
            <div
              style={{
                color: 'red',
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#00fffc',
              color: 'black',
              fontWeight: 'bold',
              cursor: isLoading ? 'not-allowed' : 'pointer',
            }}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          <div style={{ textAlign: 'center', marginTop: '15px', color: 'black' }}>
            <p>
              Don't have an account?{' '}
              <Link to="/signup" style={{ color: '#00fffc' }}>
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
