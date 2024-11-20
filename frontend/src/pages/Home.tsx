// import React from 'react';

// const Home = () => {
//     return( <div style={{  margin: '0', padding: ' 64px 16px 0 16px' }}>
//         Home
//     </div>
//     );
// };

// export default Home;

// import React from 'react';
// import Box from '@mui/material/Box';

// const Home = () => {
//     return (
//         <Box
//             sx={{
//                 height: "100vh",
//                 width: "100%",
//                 backgroundImage: "url('home.jpg')", // Adjust to the actual path
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "white",
//                 textAlign: "center",
//                 position: "relative",
//             }}
//         >
//             <h1>Welcome to the Mechanic Chatbot</h1>
//             <p>
//                 Here, you can get assistance with your vehicle issues anytime. Start a
//                 conversation with our chatbot for expert advice and troubleshooting tips!
//             </p>
//         </Box>
//     );
// };

// export default Home;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   // Track which button is active
//   const [activeButton, setActiveButton] = useState<string>('');

//   // Handle button click
//   const handleButtonClick = (buttonName: string) => {
//     setActiveButton(buttonName);
//   };

//   return (
//     <div style={{ padding: '20px', marginTop: '100px' }}>
//       <h1>Welcome to Our Mechanic Chatbot</h1>
//       <p>
//         Our chatbot can assist with various mechanic-related inquiries. Use the buttons below to learn more about the app or approach.
//       </p>

//       {/* Buttons Section */}
//       <div style={{ marginTop: '20px' }}>
//         {/* Our App Button */}
//         <Link
//           to="/app"
//           onClick={() => handleButtonClick('app')} // Set 'app' as active button when clicked
//           className={activeButton === 'app' ? 'blinking' : ''} // Apply blinking class if 'app' is active
//           style={{
//             display: 'inline-block',
//             padding: '10px 20px',
//             backgroundColor: activeButton === 'app' ? '#ff4d4d' : '#00fffc', // Change color when active
//             color: 'black',
//             textDecoration: 'none',
//             borderRadius: '4px',
//             margin: '10px',
//             animation: activeButton === 'app' ? 'blink 1s infinite' : 'none', // Apply blinking animation
//           }}
//         >
//           Our App
//         </Link>

//         {/* Approach Button */}
//         <Link
//           to="/approach"
//           onClick={() => handleButtonClick('approach')} // Set 'approach' as active button when clicked
//           className={activeButton === 'approach' ? 'blinking' : ''} // Apply blinking class if 'approach' is active
//           style={{
//             display: 'inline-block',
//             padding: '10px 20px',
//             backgroundColor: activeButton === 'approach' ? '#ff4d4d' : '#00fffc', // Change color when active
//             color: 'black',
//             textDecoration: 'none',
//             borderRadius: '4px',
//             margin: '10px',
//             animation: activeButton === 'approach' ? 'blink 1s infinite' : 'none', // Apply blinking animation
//           }}
//         >
//           Approach
//         </Link>
//       </div>
//     </div>
//   );
// };

//export default Home;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './home.css';

// const Home = () => {
//   const [activeButton, setActiveButton] = useState<string>('');

//   const handleButtonClick = (buttonName: string) => {
//     setActiveButton(buttonName);
//   };

//   return (
//     <div style={homePageStyle}>
//       {/* Blurred Background Layer */}
//       <div style={blurLayerStyle}></div>

//       {/* Main Content */}
//       <div style={contentStyle}>
//         <h1>Welcome to Our Mechanic Chatbot</h1>
//         <p>
//           Our chatbot can assist with various mechanic-related inquiries. Use the buttons below to learn more about the app or approach.
//         </p>

//         {/* Buttons Section */}
//         <div style={buttonsContainerStyle}>
//           <Link
//             to="/app"
//             onClick={() => handleButtonClick('app')}
//             className={activeButton === 'app' ? 'blinking' : ''}
//             style={{
//               ...buttonStyle,
//               backgroundColor: activeButton === 'app' ? '#ff4d4d' : '#00fffc',
//               animation: activeButton === 'app' ? 'blink 1s infinite' : 'none',
//             }}
//           >
//             Our App
//           </Link>
//           <Link
//             to="/approach"
//             onClick={() => handleButtonClick('approach')}
//             className={activeButton === 'approach' ? 'blinking' : ''}
//             style={{
//               ...buttonStyle,
//               backgroundColor: activeButton === 'approach' ? '#ff4d4d' : '#00fffc',
//               animation: activeButton === 'approach' ? 'blink 1s infinite' : 'none',
//             }}
//           >
//             Approach
//           </Link>
//         </div>

//         {/* Start Button Section */}
//         <div style={startButtonContainerStyle}>
//           <Link
//             to="/start"
//             onClick={() => handleButtonClick('start')}
//             className={activeButton === 'start' ? 'blinking' : ''}
//             style={{
//               ...startButtonStyle,
//               backgroundColor: activeButton === 'start' ? '#4CAF50' : '#00fffc',
//               animation: activeButton === 'start' ? 'blink 1s infinite' : 'none',
//             }}
//           >
//             Start
//           </Link>
//         </div>
//       </div>

//       {/* Blinking Effect CSS */}
//       <style>
//         {`
//           @keyframes blink {
//             50% {
//               opacity: 0;
//             }
//           }

//           .blinking {
//             animation: blink 1s infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// // Inline styles for the main container
// const homePageStyle: React.CSSProperties = {
//   position: 'relative',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
//   overflow: 'hidden',
// };

// // Blurred Background Layer Style
// const blurLayerStyle: React.CSSProperties = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   backgroundImage: 'url(/home.jpg)', // Replace with your image URL
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   filter: 'blur(8px)', // Adjust the blur intensity as needed
//   zIndex: 1,
// };

// // Style for the main content
// const contentStyle: React.CSSProperties = {
//   position: 'relative',
//   maxWidth: '800px',
//   padding: '20px',
//   zIndex: 2, // Ensure content is above the blurred background
//   borderRadius: '8px',
//   color: 'black',
//   textAlign: 'center',
// };

// // Style for buttons container
// const buttonsContainerStyle: React.CSSProperties = {
//   marginTop: '20px',
// };

// // Individual button style
// const buttonStyle: React.CSSProperties = {
//   display: 'inline-block',
//   padding: '10px 20px',
//   color: 'black',
//   textDecoration: 'none',
//   borderRadius: '4px',
//   margin: '10px',
//   transition: 'background-color 0.3s',
// };

// // Style for Start Button Container
// const startButtonContainerStyle: React.CSSProperties = {
//   marginTop: '20px',
// };

// // Style for Start Button
// const startButtonStyle: React.CSSProperties = {
//   display: 'inline-block',
//   padding: '12px 24px',
//   color: 'black',
//   textDecoration: 'none',
//   borderRadius: '8px',
//   fontWeight: 'bold',
//   margin: '10px auto',
//   transition: 'background-color 0.3s',
// };

// export default Home;
// src/pages/Home.tsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './home.css';

// const Home = () => {
//   const [activeButton, setActiveButton] = useState<string>('');

//   const handleButtonClick = (buttonName: string) => {
//     setActiveButton(buttonName);
//   };

//   return (
//     <div style={homePageStyle}>
//       {/* Blurred Background Layer */}
//       <div style={blurLayerStyle}></div>

//       {/* Main Content */}
//       <div style={contentStyle}>
//         <h1>Welcome to Our Mechanic Chatbot</h1>
//         <p>
//           Our chatbot can assist with various mechanic-related inquiries. Use the buttons below to learn more about the app or approach.
//         </p>

//         {/* Buttons Section */}
//         <div style={buttonsContainerStyle}>
//           <Link
//             to="/app"
//             onClick={() => handleButtonClick('app')}
//             className={activeButton === 'app' ? 'blinking' : ''}
//             style={{
//               ...buttonStyle,
//               backgroundColor: activeButton === 'app' ? '#ff4d4d' : '#00fffc',
//               animation: activeButton === 'app' ? 'blink 1s infinite' : 'none',
//             }}
//           >
//             Our App
//           </Link>
//           <Link
//             to="/approach"
//             onClick={() => handleButtonClick('approach')}
//             className={activeButton === 'approach' ? 'blinking' : ''}
//             style={{
//               ...buttonStyle,
//               backgroundColor: activeButton === 'approach' ? '#ff4d4d' : '#00fffc',
//               animation: activeButton === 'approach' ? 'blink 1s infinite' : 'none',
//             }}
//           >
//             Approach
//           </Link>
//         </div>

//         {/* Start Button Section */}
//         <div style={startButtonContainerStyle}>
//           <Link
//             to="/chat"  // Changed to '/chat' to navigate to Chat page
//             onClick={() => handleButtonClick('start')}
//             className={activeButton === 'start' ? 'blinking' : ''}
//             style={{
//               ...startButtonStyle,
//               backgroundColor: activeButton === 'start' ? '#4CAF50' : '#00fffc',
//               animation: activeButton === 'start' ? 'blink 1s infinite' : 'none',
//             }}
//           >
//             Start
//           </Link>
//         </div>
//       </div>

//       {/* Blinking Effect CSS */}
//       <style>
//         {`
//           @keyframes blink {
//             50% {
//               opacity: 0;
//             }
//           }

//           .blinking {
//             animation: blink 1s infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// // Inline styles for the main container
// const homePageStyle: React.CSSProperties = {
//   position: 'relative',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
//   overflow: 'hidden',
// };

// // Blurred Background Layer Style
// const blurLayerStyle: React.CSSProperties = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   backgroundImage: 'url(/home.jpg)', // Replace with your image URL
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   filter: 'blur(8px)', // Adjust the blur intensity as needed
//   zIndex: 1,
// };

// // Style for the main content
// const contentStyle: React.CSSProperties = {
//   position: 'relative',
//   maxWidth: '800px',
//   padding: '20px',
//   zIndex: 2, // Ensure content is above the blurred background
//   borderRadius: '8px',
//   color: 'black',
//   textAlign: 'center',
// };

// // Style for buttons container
// const buttonsContainerStyle: React.CSSProperties = {
//   marginTop: '20px',
// };

// // Individual button style
// const buttonStyle: React.CSSProperties = {
//   display: 'inline-block',
//   padding: '10px 20px',
//   color: 'black',
//   textDecoration: 'none',
//   borderRadius: '4px',
//   margin: '10px',
//   transition: 'background-color 0.3s',
// };

// // Style for Start Button Container
// const startButtonContainerStyle: React.CSSProperties = {
//   marginTop: '20px',
// };

// // Style for Start Button
// const startButtonStyle: React.CSSProperties = {
//   display: 'inline-block',
//   padding: '12px 24px',
//   color: 'black',
//   textDecoration: 'none',
//   borderRadius: '8px',
//   fontWeight: 'bold',
//   margin: '10px auto',
//   transition: 'background-color 0.3s',
// };

// export default Home;
// src/pages/Home.tsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Footer from '../components/Footer'; // Import the Footer component
// import './home.css';

// const Home = () => {
//   const [activeButton, setActiveButton] = useState<string>('');

//   const handleButtonClick = (buttonName: string) => {
//     setActiveButton(buttonName);
//   };

//   return (
//     <div style={homePageStyle}>
//       {/* Blurred Background Layer */}
//       <div style={blurLayerStyle}></div>

//       {/* Main Content */}
//       <div style={contentStyle}>
//         <h1>Welcome to Our Mechanic Chatbot</h1>
//         <p>
//           Our chatbot can assist with various mechanic-related inquiries. Use the buttons below to learn more about the app or approach.
//         </p>

//         {/* Buttons Section */}
//         <div style={buttonsContainerStyle}>
//           <Link
//             to="/app"
//             onClick={() => handleButtonClick('app')}
//             className={activeButton === 'app' ? 'blinking' : ''}
//             style={{
//               ...buttonStyle,
//               backgroundColor: activeButton === 'app' ? '#ff4d4d' : '#00fffc',
//               animation: activeButton === 'app' ? 'blink 1s infinite' : 'none',
//             }}
//           >
//             Our App
//           </Link>
//           <Link
//             to="/approach"
//             onClick={() => handleButtonClick('approach')}
//             className={activeButton === 'approach' ? 'blinking' : ''}
//             style={{
//               ...buttonStyle,
//               backgroundColor: activeButton === 'approach' ? '#ff4d4d' : '#00fffc',
//               animation: activeButton === 'approach' ? 'blink 1s infinite' : 'none',
//             }}
//           >
//             Approach
//           </Link>
//         </div>

//         {/* Start Button Section */}
//         <div style={startButtonContainerStyle}>
//           <Link
//             to="/chat"  // Changed to '/chat' to navigate to Chat page
//             onClick={() => handleButtonClick('start')}
//             className={activeButton === 'start' ? 'blinking' : ''}
//             style={{
//               ...startButtonStyle,
//               backgroundColor: activeButton === 'start' ? '#4CAF50' : '#00fffc',
//               animation: activeButton === 'start' ? 'blink 1s infinite' : 'none',
//             }}
//           >
//             Start
//           </Link>
//         </div>
//       </div>

//       {/* Blinking Effect CSS */}
//       <style>
//         {`
//           @keyframes blink {
//             50% {
//               opacity: 0;
//             }
//           }

//           .blinking {
//             animation: blink 1s infinite;
//           }
//         `}
//       </style>

//       {/* Footer */}
//       <Footer /> {/* Add the Footer component here */}
//     </div>
//   );
// };

// // Inline styles for the main container
// const homePageStyle: React.CSSProperties = {
//   position: 'relative',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
//   overflow: 'hidden',
// };

// // Blurred Background Layer Style
// const blurLayerStyle: React.CSSProperties = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   backgroundImage: 'url(/home.jpg)', // Replace with your image URL
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   filter: 'blur(8px)', // Adjust the blur intensity as needed
//   zIndex: 1,
// };

// // Style for the main content
// const contentStyle: React.CSSProperties = {
//   position: 'relative',
//   maxWidth: '800px',
//   padding: '20px',
//   zIndex: 2, // Ensure content is above the blurred background
//   borderRadius: '8px',
//   color: 'black',
//   textAlign: 'center',
// };

// // Style for buttons container
// const buttonsContainerStyle: React.CSSProperties = {
//   marginTop: '20px',
// };

// // Individual button style
// const buttonStyle: React.CSSProperties = {
//   display: 'inline-block',
//   padding: '10px 20px',
//   color: 'black',
//   textDecoration: 'none',
//   borderRadius: '4px',
//   margin: '10px',
//   transition: 'background-color 0.3s',
// };

// // Style for Start Button Container
// const startButtonContainerStyle: React.CSSProperties = {
//   marginTop: '20px',
// };

// // Style for Start Button
// const startButtonStyle: React.CSSProperties = {
//   display: 'inline-block',
//   padding: '12px 24px',
//   color: 'black',
//   textDecoration: 'none',
//   borderRadius: '8px',
//   fontWeight: 'bold',
//   margin: '10px auto',
//   transition: 'background-color 0.3s',
// };

// export default Home;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Import the Footer component
import './home.css';

const Home = () => {
  const [activeButton, setActiveButton] = useState<string>('');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div style={homePageStyle}>
      {/* Blurred Background Layer */}
      <div style={blurLayerStyle}></div>

      {/* Main Content */}
      <div style={contentStyle}>
        <h1>Welcome to Our Mechanic Chatbot</h1>
        <p>
          Our chatbot can assist with various mechanic-related inquiries. Use the buttons below to learn more about the app or approach.
        </p>

        {/* Buttons Section */}
        <div style={buttonsContainerStyle}>
          <Link
            to="/app"
            onClick={() => handleButtonClick('app')}
            className={activeButton === 'app' ? 'blinking' : ''}
            style={{
              ...buttonStyle,
              backgroundColor: activeButton === 'app' ? '#ff4d4d' : '#00fffc',
              animation: activeButton === 'app' ? 'blink 1s infinite' : 'none',
            }}
          >
            Our App
          </Link>
          <Link
            to="/approach"
            onClick={() => handleButtonClick('approach')}
            className={activeButton === 'approach' ? 'blinking' : ''}
            style={{
              ...buttonStyle,
              backgroundColor: activeButton === 'approach' ? '#ff4d4d' : '#00fffc',
              animation: activeButton === 'approach' ? 'blink 1s infinite' : 'none',
            }}
          >
            Approach
          </Link>
        </div>

        {/* Start Button Section */}
        <div style={startButtonContainerStyle}>
          <Link
            to="/chat"  // Changed to '/chat' to navigate to Chat page
            onClick={() => handleButtonClick('start')}
            className={activeButton === 'start' ? 'blinking' : ''}
            style={{
              ...startButtonStyle,
              backgroundColor: activeButton === 'start' ? '#4CAF50' : '#00fffc',
              animation: activeButton === 'start' ? 'blink 1s infinite' : 'none',
            }}
          >
            Start
          </Link>
        </div>
      </div>

      {/* Blinking Effect CSS */}
      <style>
        {`
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }

          .blinking {
            animation: blink 1s infinite;
          }
        `}
      </style>

      {/* Footer */}
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

// Inline styles for the main container
const homePageStyle: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column', // Allow the page to expand vertically
  justifyContent: 'flex-start', // Align items at the top
  alignItems: 'center',
  minHeight: '100vh', // Ensure the page takes at least the full height of the screen
  paddingBottom: '60px', // Adjust for the footer height
  overflow: 'auto', // Allow scrolling
};

// Blurred Background Layer Style
const blurLayerStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/home.jpg)', // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'blur(8px)', // Adjust the blur intensity as needed
  zIndex: 1,
};

// Style for the main content
const contentStyle: React.CSSProperties = {
  position: 'relative',
  maxWidth: '1000px',
  padding: '200px',
  zIndex: 2, // Ensure content is above the blurred background
  borderRadius: '8px',
  color: 'black',
  textAlign: 'center',
};

// Style for buttons container
const buttonsContainerStyle: React.CSSProperties = {
  marginTop: '20px',
};

// Individual button style
const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '10px 20px',
  color: 'black',
  textDecoration: 'none',
  borderRadius: '4px',
  margin: '10px',
  transition: 'background-color 0.3s',
};

// Style for Start Button Container
const startButtonContainerStyle: React.CSSProperties = {
  marginTop: '20px',
};

// Style for Start Button
const startButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 24px',
  color: 'black',
  textDecoration: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  margin: '10px auto',
  transition: 'background-color 0.3s',
};

export default Home;
