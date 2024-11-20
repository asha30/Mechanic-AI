
// import React, { useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Chat from './pages/Chat';
// import Ourap from './pages/Ourap';
// import Approach from './pages/Approach';
// import Notfound from './pages/Notfound';
// import AboutUs from './components/AboutUs';
// import Footer from './components/Footer';
// const App = () => {
//   // Reset body styles
//   useEffect(() => {
//     document.body.style.margin = '0';
//     document.body.style.padding = '0';
//   }, []);

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header />
//       {/* Add margin-top equal to header height */}
//       <div style={{ flex: 1, marginTop: '64px', padding: '16px' }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/chat" element={<Chat />} />
//           <Route path="/Ourap" element={<Ourap />} />
//           <Route path="/approach" element={<Approach />} />
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="*" element={<Notfound />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OurApp from './pages/OurApp'; 
import Chat from './pages/Chat';
import Features from './pages/Features'; 
import Approach from './pages/Approach';
import Notfound from './pages/Notfound';
import AboutUs from './components/AboutUs';

const App = () => {
  // Reset body styles
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#121212'; // Black background theme
    document.body.style.color = '#fff'; // White text color
  }, []);

  return (
    <div>
      <Header />
      {/* Add padding to avoid overlap with fixed header */}
      <div style={{ paddingTop: '64px', paddingBottom: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/app" Component={OurApp} />
          <Route path="/features" Component={Features} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
