// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer style={footerStyle}>
//       <div style={footerContentStyle}>
//         <Link to="/terms" style={footerLinkStyle}>
//           Terms and Conditions
//         </Link>
//         <Link to="/privacy" style={footerLinkStyle}>
//           Privacy Policy
//         </Link>
//         <span style={copyrightStyle}>
//           &copy; 2024 Your Company. All Rights Reserved.
//         </span>
//       </div>
//     </footer>
//   );
// };

// // Footer Styles
// const footerStyle: React.CSSProperties = {
//   backgroundColor: "#121212",
//   color: "#fff",
//   textAlign: "center",
//   padding: "10px 20px",
//   display: "flex",
//   justifyContent: "center",
//   position: "fixed",
//   bottom: "0",
//   width: "100%",
// };

// const footerContentStyle: React.CSSProperties = {
//   display: "flex",
//   gap: "20px",
//   alignItems: "center",
// };

// const footerLinkStyle: React.CSSProperties = {
//   color: "#d32f2f",
//   textDecoration: "none",
//   fontWeight: "bold",
//   fontSize: "14px",
//   transition: "color 0.3s ease",
// };

// const copyrightStyle: React.CSSProperties = {
//   fontSize: "12px",
//   color: "#bbb",
// };

// export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <a href="/terms" style={footerLinkStyle}>Terms and Conditions</a>
        <span style={dividerStyle}>|</span>
        <a href="/privacy" style={footerLinkStyle}>Privacy Policy</a>
      </div>
      <p style={copyrightStyle}>© 2024 Your Company. All Rights Reserved.</p>
    </footer>
  );
};

// Styles
const footerStyle: React.CSSProperties = {
  backgroundColor: 'black',
  color: 'red',
  textAlign: 'center',
  padding: '10px 20px', // Ensure padding is well-defined
  width: '100%',
  position: 'absolute',
  bottom: 0,
};

const footerContentStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center', // Ensures content is centered
  alignItems: 'center',
  gap: '10px', // Spacing between the links and divider
};

const footerLinkStyle: React.CSSProperties = {
  color: 'red',
  textDecoration: 'none',
};

const dividerStyle: React.CSSProperties = {
  color: 'red',
  margin: '0 10px', // Adds spacing around the divider
};

const copyrightStyle: React.CSSProperties = {
  marginTop: '5px', // Adds spacing below the links
  fontSize: '14px',
};

export default Footer;
