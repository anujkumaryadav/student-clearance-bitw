// import './App.css';

// function App() {
//   return (
//     <h1>Hey Welcome to Student Clerance form BITw</h1>
//   );
// }

// export default App;

import React from "react";

import Student from "./components/login/Student";
// import Admin from "./components/login/Admin";
// import Faculty from "./components/login/Faculty";
// import Student_dashboard from "./components/dashboard/Student_dashboard";
// import Admin from "./components/login/Admin";
// import Faculty from "./components/login/Faculty";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
         <Student title1="Student Login"/>
         {/* <Admin title2="Admin Login"/> */}
         {/* <Faculty title3="Faculty Login"/> */}
         {/* <Student_dashboard/>  */}
    </>
  );
}

export default App;