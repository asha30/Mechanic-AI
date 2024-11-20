// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Signup: React.FC = () => {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [errorMessage, setErrorMessage] = useState<string>('');
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [otp, setOtp] = useState<string>('');
//   const [isOtpModalVisible, setIsOtpModalVisible] = useState<boolean>(false);

//   interface ServerResponse {
//     success: boolean;
//     error?: string;
//     message?: string;
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setErrorMessage('');
//     setIsLoading(true);

//     const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
//     if (!emailPattern.test(email)) {
//       setErrorMessage('Email must end with @gmail.com or @yahoo.com');
//       setIsLoading(false);
//       return;
//     }

//     if (password.length < 6) {
//       setErrorMessage('Password must be at least 6 characters long');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch('/Signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, email, password }),
//       });

//       const data: ServerResponse = await response.json();

//       if (!data.success) {
//         setErrorMessage(data.error || 'Something went wrong!');
//         setIsLoading(false);
//         return;
//       }

//       alert('Registration successful! Please verify your email.');
//       setIsOtpModalVisible(true);
//       setIsLoading(false);
//     } catch (error) {
//       setErrorMessage('Something went wrong! Please try again.');
//       setIsLoading(false);
//     }
//   };

//   const handleOtpSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/verifyemail', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, code: otp }),
//       });

//       const data: ServerResponse = await response.json();

//       if (data.success) {
//         alert('Email verified successfully! You can now log in.');
//         navigate('/login');
//       } else {
//         alert(data.message || 'An error occurred. Please try again.');
//       }
//     } catch (error) {
//       alert('Something went wrong! Please try again.');
//     }
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundImage: 'url("home.jpg")', // Add your background image URL here
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div
//         style={{
//           margin: "auto",
//           padding: "30px",
//           boxShadow: "10px 10px 20px #000",
//           borderRadius: "10px",
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           maxWidth: "400px",
//           width: "100%",
//         }}
//       >
//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
//           <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>Register</h1>
//           <div style={{ marginBottom: "20px" }}>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               required
//               autoComplete="off"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             />
//           </div>
//           <div style={{ marginBottom: "20px" }}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               autoComplete="off"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             />
//           </div>
//           <div style={{ marginBottom: "20px" }}>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               required
//               autoComplete="off"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             />
//           </div>
//           {errorMessage && (
//             <div style={{ color: "red", marginBottom: "20px", textAlign: "center" }}>
//               {errorMessage}
//             </div>
//           )}
//           <button
//             type="submit"
//             disabled={isLoading}
//             style={{
//               padding: "10px",
//               borderRadius: "5px",
//               backgroundColor: "#00fffc",
//               border: "none",
//               color: "black",
//               cursor: isLoading ? "not-allowed" : "pointer",
//               transition: "0.3s",
//             }}
//           >
//             {isLoading ? "Registering..." : "Register"}
//           </button>
//           <div style={{ textAlign: "center", marginTop: "20px" }}>
//             <p>
//               Already have an account?{" "}
//               <Link to="/login" style={{ color: "#00fffc", textDecoration: "none" }}>
//                 Login
//               </Link>
//             </p>
//           </div>
//         </form>

//         {isOtpModalVisible && (
//           <div
//             style={{
//               position: "fixed",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               backgroundColor: "white",
//               padding: "20px",
//               boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//               borderRadius: "10px",
//             }}
//           >
//             <h2 style={{ textAlign: "center" }}>Verify Email</h2>
//             <form onSubmit={handleOtpSubmit} style={{ display: "flex", flexDirection: "column" }}>
//               <input
//                 type="text"
//                 placeholder="Enter OTP"
//                 required
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "5px",
//                   border: "1px solid #ccc",
//                   marginBottom: "20px",
//                 }}
//               />
//               <button
//                 type="submit"
//                 style={{
//                   padding: "10px",
//                   borderRadius: "5px",
//                   backgroundColor: "#00fffc",
//                   border: "none",
//                   color: "black",
//                 }}
//               >
//                 Verify OTP
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');
  const [isOtpModalVisible, setIsOtpModalVisible] = useState<boolean>(false);

  interface ServerResponse {
    success: boolean;
    error?: string;
    message?: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Email must end with @gmail.com or @yahoo.com');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/Signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data: ServerResponse = await response.json();

      if (!data.success) {
        setErrorMessage(data.error || 'Something went wrong!');
        setIsLoading(false);
        return;
      }

      alert('Registration successful! Please verify your email.');
      setIsOtpModalVisible(true);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage('Something went wrong! Please try again.');
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch('/verifyemail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: otp }),
      });

      const data: ServerResponse = await response.json();

      if (data.success) {
        alert('Email verified successfully! You can now log in.');
        navigate('/login');
      } else {
        alert(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong! Please try again.');
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
          <h1 style={{ color: 'black', textAlign: 'center', marginBottom: '20px' }}>Register</h1>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            {isLoading ? 'Registering...' : 'Register'}
          </button>
          <div style={{ textAlign: 'center', marginTop: '15px', color: 'black' }}>
            <p>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#00fffc' }}>
                Login
              </Link>
            </p>
          </div>
        </form>
        {isOtpModalVisible && (
          <div>
            <div>
              <h2 style={{ color: 'black', textAlign: 'center' }}>Verify Email</h2>
              <form onSubmit={handleOtpSubmit}>
                <div style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
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
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#00fffc',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  Verify OTP
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
