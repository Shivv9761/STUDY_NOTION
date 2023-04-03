import "./App.css";
import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  return (
    <div className="w-screen min-h-screen flex bg-richblack-900 flex-col">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/dashboard" element={

        <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
        </PrivateRoute>
      
      }/>
    </Routes>
    </div>
  )
}

export default App;
