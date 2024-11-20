import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <Link to="/terms" style={footerLinkStyle}>
          Terms and Conditions
        </Link>
        <Link to="/privacy" style={footerLinkStyle}>
          Privacy Policy
        </Link>
        <span style={copyrightStyle}>
          &copy; 2024 Your Company. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

// Footer Styles
const footerStyle: React.CSSProperties = {
  backgroundColor: "#121212",
  color: "#fff",
  textAlign: "center",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  bottom: "0",
  width: "100%",
};

const footerContentStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
  alignItems: "center",
};

const footerLinkStyle: React.CSSProperties = {
  color: "#d32f2f",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "14px",
  transition: "color 0.3s ease",
};

const copyrightStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#bbb",
};

export default Footer;
