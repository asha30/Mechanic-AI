// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Logo from './shared/Logo';
// import NavigationLink from './shared/NavigationLink';
// import { UseAuth } from '../Context/Authcontext';
// const Header = () => {
//     const auth = UseAuth();
//     return (
//         <AppBar sx={{ bgcolor: "transparent", position: "fixed", boxShadow: "none" ,top: 0,left: 0,width:"100%"}}>
//             <Toolbar sx={{ display: "flex", justifyContent: "space-between",alignItems:"center"}}>
//                 <Logo />
//                 <div style={{marginLeft: "auto"}}>
//                 {auth?.isLoggedIn ?(
//                             <>
//                         <NavigationLink
//                         bg="#00fffc" 
//                         to="/chat"
//                         text="Go to chat"
//                         textcolor="black"
//                         />
//                             <NavigationLink 
//                             bg="#51538f"
//                             textcolor="white"
//                             to="/Logout"
//                              text="Logout"
//                          onClick={auth.logout}
//                         />
//                         </>   
                    
//                     ) : (
//                     <>
//                      <NavigationLink 
//                         bg="#00fffc" 
//                         to="/Login"
//                         text="Login"
//                         textcolor="black"
//                         />
//                         <NavigationLink 
//                         bg="#51538f"
//                         textcolor="white"
//                         to="/signup"
//                         text="signup"
//                         />
//                         </>
//                     )}
//                 </div>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Header;
// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Logo from './shared/Logo';
// import NavigationLink from './shared/NavigationLink';
// import { UseAuth } from '../Context/Authcontext';

// const Header = () => {
//     const auth = UseAuth();

//     return (
//         <AppBar
//             sx={{
//                 bgcolor: "transparent",
//                 position: "sticky",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 borderBottom: "1px solid #ccc", // Adds a thin line at the bottom for separation
//                 boxShadow: "none",
//                 zIndex: 1100,
//             }}
//         >
//             <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <Logo />

//                 {/* Main navigation links */}
//                 <div style={{ display: "flex", gap: "20px", marginLeft: "auto" }}>
//                     <NavigationLink bg="#00fffc" to="/home" text="Home" textcolor="black" />
//                     <NavigationLink bg="#00fffc" to="/features" text="Features" textcolor="black" />
//                     <NavigationLink bg="#00fffc" to="/about-us" text="About Us" textcolor="black" />
//                 </div>

//                 {/* Authentication links */}
//                 <div style={{ marginLeft: "20px" }}>
//                     {auth?.isLoggedIn ? (
//                         <>
//                             <NavigationLink
//                                 bg="#00fffc"
//                                 to="/chat"
//                                 text="Go to chat"
//                                 textcolor="black"
//                             />
//                             <NavigationLink
//                                 bg="#51538f"
//                                 textcolor="white"
//                                 to="/Logout"
//                                 text="Logout"
//                                 onClick={auth.logout}
//                             />
//                         </>
//                     ) : (
//                         <>
//                             <NavigationLink
//                                 bg="#00fffc"
//                                 to="/Login"
//                                 text="Login"
//                                 textcolor="black"
//                             />
//                             <NavigationLink
//                                 bg="#51538f"
//                                 textcolor="white"
//                                 to="/signup"
//                                 text="Signup"
//                             />
//                         </>
//                     )}
//                 </div>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Header;
// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Logo from './shared/Logo';
// import NavigationLink from './shared/NavigationLink';
// import { UseAuth } from '../Context/Authcontext';

// const Header = () => {
//     const auth = UseAuth();

//     return (
//         <AppBar
//             sx={{
//                 bgcolor: "transparent", // Make the background transparent
//                 position: "fixed",      // Fix it to the top of the page
//                 boxShadow: "none",      // Remove any shadow
//                 top: 0,                 // Keep it at the top
//                 left: 0,                // Align to the left
//                 width: "100%",          // Full width of the page
//                 zIndex: 1201,           // Ensure it's above other content, like the background image
//             }}
//         >
//             <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <Logo />

//                 {/* Main navigation links */}
//                 <div style={{ display: "flex", gap: "20px", marginLeft: "auto" }}>
//                     <NavigationLink bg="#00fffc" to="/home" text="Home" textcolor="black" />
//                     <NavigationLink bg="#00fffc" to="/features" text="Features" textcolor="black" />
//                     <NavigationLink bg="#00fffc" to="/about-us" text="About Us" textcolor="black" />
//                 </div>

//                 {/* Authentication links */}
//                 <div style={{ marginLeft: "20px" }}>
//                     {auth?.isLoggedIn ? (
//                         <>
//                             <NavigationLink
//                                 bg="#00fffc"
//                                 to="/chat"
//                                 text="Go to chat"
//                                 textcolor="black"
//                             />
//                             <NavigationLink
//                                 bg="#51538f"
//                                 textcolor="white"
//                                 to="/Logout"
//                                 text="Logout"
//                                 onClick={auth.logout}
//                             />
//                         </>
//                     ) : (
//                         <>
//                             <NavigationLink
//                                 bg="#00fffc"
//                                 to="/Login"
//                                 text="Login"
//                                 textcolor="black"
//                             />
//                             <NavigationLink
//                                 bg="#51538f"
//                                 textcolor="white"
//                                 to="/signup"
//                                 text="Signup"
//                             />
//                         </>
//                     )}
//                 </div>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Header;
// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import { useLocation, Link } from 'react-router-dom'; // Import Link from react-router-dom for homepage navigation
// import Logo from './shared/Logo';
// import NavigationLink from './shared/NavigationLink';
// import { UseAuth } from '../Context/Authcontext';

// const Header = () => {
//   const location = useLocation(); // Get current route
//   const auth = UseAuth();

//   // Helper function to check if the current route matches a specific path
//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <AppBar
//       sx={{
//         bgcolor: "transparent", // Make the background transparent
//         position: "fixed",      // Fix it to the top of the page
//         boxShadow: "none",      // Remove any shadow
//         top: 0,                 // Keep it at the top
//         left: 0,                // Align to the left
//         width: "100%",          // Full width of the page
//         zIndex: 1201,           // Ensure it's above other content
//       }}
//     >
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         {/* Logo wrapped in a Link to the homepage */}
//         <Link to="/">
//           <Logo />
//         </Link>

//         <div style={{ marginLeft: "auto", display: "flex", gap: "20px" }}>
//           {/* Home Button */}
//           <NavigationLink
//             to="/"
//             text="Home"
//             textcolor={isActive("/") ? "red" : "black"} // Change color to red if the current route is Home
//             bg={isActive("/") ? "#f1f1f1" : "#00fffc"} // Optional background change
//           />
          
//           {/* About Us Button */}
//           <NavigationLink
//             to="/aboutus"
//             text="About Us"
//             textcolor={isActive("/aboutus") ? "red" : "black"}
//             bg={isActive("/aboutus") ? "#f1f1f1" : "#00fffc"}
//           />
          
//           {/* Features Button */}
//           <NavigationLink
//             to="/features"
//             text="Features"
//             textcolor={isActive("/features") ? "red" : "black"}
//             bg={isActive("/features") ? "#f1f1f1" : "#00fffc"}
//           />

//           {/* Login Button */}
//           {auth?.isLoggedIn ? (
//             <>
//               <NavigationLink
//                 to="/chat"
//                 text="Go to chat"
//                 textcolor={isActive("/chat") ? "red" : "black"}
//                 bg={isActive("/chat") ? "#f1f1f1" : "#00fffc"}
//               />
//               <NavigationLink
//                 to="/logout"
//                 text="Logout"
//                 textcolor={isActive("/logout") ? "red" : "black"}
//                 bg={isActive("/logout") ? "#f1f1f1" : "#51538f"}
//                 onClick={auth.logout}
//               />
//             </>
//           ) : (
//             <>
//               <NavigationLink
//                 to="/login"
//                 text="Login"
//                 textcolor={isActive("/login") ? "red" : "black"}
//                 bg={isActive("/login") ? "#f1f1f1" : "#00fffc"}
//               />
//               <NavigationLink
//                 to="/signup"
//                 text="Signup"
//                 textcolor={isActive("/signup") ? "red" : "black"}
//                 bg={isActive("/signup") ? "#f1f1f1" : "#51538f"}
//               />
//             </>
//           )}
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useLocation, Link } from 'react-router-dom'; // Import Link from react-router-dom for homepage navigation
import Logo from './shared/Logo';
import NavigationLink from './shared/NavigationLink';
import { UseAuth } from '../Context/Authcontext';

const Header = () => {
  const location = useLocation(); // Get current route
  const auth = UseAuth();

  // Helper function to check if the current route matches a specific path
  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar
      sx={{
        bgcolor: "black", // Set the background to black, which will stay even on scroll
        position: "fixed",      // Fix it to the top of the page
        boxShadow: "none",      // Remove any shadow
        top: 0,                 // Keep it at the top
        left: 0,                // Align to the left
        width: "100%",          // Full width of the page
        zIndex: 1201,           // Ensure it's above other content
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo wrapped in a Link to the homepage */}
        <Link to="/">
          <Logo />
        </Link>

        <div style={{ marginLeft: "auto", display: "flex", gap: "20px" }}>
          {/* Home Button */}
          <NavigationLink
            to="/"
            text="Home"
            textcolor={isActive("/") ? "red" : "white"} // Change color to red if the current route is Home
            bg={isActive("/") ? "#f1f1f1" : "transparent"} // Optional background change
          />
          
          {/* About Us Button */}
          <NavigationLink
            to="/aboutus"
            text="About Us"
            textcolor={isActive("/aboutus") ? "red" : "white"}
            bg={isActive("/aboutus") ? "#f1f1f1" : "transparent"}
          />
          
          {/* Features Button */}
          <NavigationLink
            to="/features"
            text="Features"
            textcolor={isActive("/features") ? "red" : "white"}
            bg={isActive("/features") ? "#f1f1f1" : "transparent"}
          />

          {/* Login Button */}
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                to="/chat"
                text="Go to chat"
                textcolor={isActive("/chat") ? "red" : "white"}
                bg={isActive("/chat") ? "#f1f1f1" : "transparent"}
              />
              <NavigationLink
                to="/logout"
                text="Logout"
                textcolor={isActive("/logout") ? "red" : "white"}
                bg={isActive("/logout") ? "#f1f1f1" : "#51538f"}
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                to="/login"
                text="Login"
                textcolor={isActive("/login") ? "red" : "white"}
                bg={isActive("/login") ? "#f1f1f1" : "transparent"}
              />
              <NavigationLink
                to="/signup"
                text="Signup"
                textcolor={isActive("/signup") ? "red" : "white"}
                bg={isActive("/signup") ? "#f1f1f1" : "#51538f"}
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
