import React from "react";
import "./App.css";
import "./mobile.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Feedback from "./components/feedback";
import Food from "./components/food";
import Home from "./components/home";
import Payment from "./components/payment";
import Ticket from "./components/ticket";
import NoPage from "./components/nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
