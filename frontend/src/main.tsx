// // import react from 'react';
// // import reactDOM from 'react-dom/client';
// // import App from './App.tsx';
// // import './index.css';
// // import{ createTheme, ThemeProvider} from "@mui/material";
// // import {BrowserRouter} from "react-router-dom"
// // const theme =createTheme({
// //   typography: {
// //     fontFamily: "Roboto slab,serif",
// //     allVariants: {color: "white"},
// //   },
// // });

// // reactDOM.createRoot(document.getElementById('root')!).render(
// //   <react.StrictMode>
// //     <BrowserRouter>
// //     <ThemeProvider  theme={theme}>

// //     <App />
// //     </ThemeProvider>
// //     </BrowserRouter>
// //   </react.StrictMode>,
// // );
// import React from 'react'; // Capitalized "React"
// import ReactDOM from 'react-dom/client'; // Capitalized "ReactDOM"
// import App from './App.tsx';
// import './index.css';
// import { createTheme, ThemeProvider } from '@mui/material';
// import { BrowserRouter } from 'react-router-dom';

// const theme = createTheme({
//   typography: {
//     fontFamily: 'Roboto slab, serif',
//     allVariants: { color: 'white' },
//   },
// });

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode> {/* Capitalized "React" */}
//     <BrowserRouter>
//       <ThemeProvider theme={theme}>
//         <App />
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from './Context/Authcontext.tsx';
import {Toaster} from 'react-hot-toast';
import aaxios from "axios";
import axios from 'axios';


axios.defaults.baseURL="http://localhost:5000/api/v1";
axios.defaults.withCredentials=true;
const theme = createTheme({
  typography: {
    fontFamily: "Roboto slab, serif",
    allVariants: { color: "white" },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position="top-right"/>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
