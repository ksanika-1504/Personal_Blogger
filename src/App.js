// // import './App.css';
// // import AuthForm from './components/login/AuthForm'
// // import {Navbar} from './components/Navbar/Navbar';

// // function App() {
// //   return (
// //     <div className>
// //       <Navbar/>
// //       <AuthForm />
// //       </div>

// //   );
// // }

// // export default App;

// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import AuthForm from './components/login/AuthForm'
// import { Navbar } from "./components/Navbar/Navbar";
// import { About, Contact, Home, Dashboard} from "./components/pages";
// // import { Dashboard } from "@mui/icons-material";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/dashboard" element={<Dashboard/>} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/LoginSignUp" element={<AuthForm/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from 'react-router-dom';
import AuthForm from './components/login/AuthForm';
import { Navbar } from './components/Navbar/Navbar';
import { About, Contact, Home, Dashboard } from './components/pages';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <div style={{ height: '10%' }}>
        <Navbar loggedIn={loggedIn} />
      </div>
      <div style={{ height: '90%' }}>
        <Routes>
          {loggedIn ? (
            <>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/dashboard"
                element={<Dashboard />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />{' '}
            </>
          ) : (
            <Route
              path="/auth"
              element={
                <AuthForm
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
