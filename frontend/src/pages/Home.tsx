
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
//   flexDirection: 'column', // Allow the page to expand vertically
//   justifyContent: 'flex-start', // Align items at the top
//   alignItems: 'center',
//   minHeight: '100vh', // Ensure the page takes at least the full height of the screen
//   paddingBottom: '60px', // Adjust for the footer height
//   overflow: 'auto', // Allow scrolling
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
//   maxWidth: '1000px',
//   padding: '200px',
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
import Footer from '../components/Footer';
import './home.css';

const Home = () => {
  const [activeButton, setActiveButton] = useState<string>('');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div style={homePageStyle}>
      {/* Section 1: Main Content */}
      <div style={firstPageStyle}>
        <div style={contentStyle}>
          <h1>Welcome to Our Mechanic Chatbot</h1>
          <p>
            Our chatbot can assist with various mechanic-related inquiries. Use the buttons below to learn more about the app or approach.
          </p>
          <div style={buttonsContainerStyle}>
            <Link
              to="/app"
              onClick={() => handleButtonClick('app')}
              style={{
                ...buttonStyle,
                backgroundColor: activeButton === 'app' ? '#ff4d4d' : '#00fffc',
              }}
            >
              Our App
            </Link>
            <Link
              to="/approach"
              onClick={() => handleButtonClick('approach')}
              style={{
                ...buttonStyle,
                backgroundColor: activeButton === 'approach' ? '#ff4d4d' : '#00fffc',
              }}
            >
              Approach
            </Link>
          </div>
        </div>
      </div>

      {/* Section 2: Testimonials */}
      <div style={secondPageStyle}>
        <h2>What Our Users Say</h2>
        <div style={testimonialsContainerStyle}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={testimonialStyle}>
              <p>"{testimonial.message}"</p>
              <p>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Testimonials Data
const testimonials = [
  { message: 'This mechanic chatbot saved me so much time! Very helpful and easy to use.', name: 'John Doe' },
  { message: 'Great tool for all my car maintenance needs. Highly recommend it!', name: 'Sarah Lee' },
  { message: 'Fantastic experience! Solved my issues in seconds. Thank you!', name: 'Michael Smith' },
];

// Styles
const homePageStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: 'auto', // Single vertical scroll
  scrollBehavior: 'smooth',
  width: '100%',
};

const firstPageStyle: React.CSSProperties = {
  backgroundImage: "url('background-image.jpg')", // Use your background image here
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh', // Full height for the first section
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const secondPageStyle: React.CSSProperties = {
  backgroundColor: 'black',
  color: 'white',
  height: '100vh', // Full height for the second section
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const contentStyle: React.CSSProperties = {
  width: '80%',
  maxWidth: '1200px',
};

const buttonsContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  color: 'black',
  textDecoration: 'none',
  borderRadius: '5px',
  border: '1px solid black',
  transition: '0.3s',
};

const testimonialsContainerStyle: React.CSSProperties = {
  maxWidth: '80%',
  margin: '0 auto',
  padding: '20px',
};

const testimonialStyle: React.CSSProperties = {
  marginBottom: '20px',
  borderBottom: '1px solid #555',
  paddingBottom: '10px',
};

export default Home;
