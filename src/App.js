import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import SignUp from "./Components/Forms/SignUp";
import Profile from "./Components/Profile/Profile";
import Pripto from "./Components/Pripto";
import OverView from "./Components/Profile/ProfileNavbar/RightSide/OverView/OverView";
import Main from "./Components/Profile/ProfileNavbar/RightSide/Main/Main";
import Trading from "./Components/Profile/ProfileNavbar/RightSide/Trading/Trading";
import Futures from "./Components/Profile/ProfileNavbar/RightSide/Futures/Futures";
import Margin from "./Components/Profile/ProfileNavbar/RightSide/Margin/Margin";
import TradingBot from "./Components/Profile/ProfileNavbar/RightSide/TradingBot/TradingBot";
import ExchangeApp from "./Components/Exchange App/ExchangeApp";
import ChatBox from "./ChatBox";
import MobLogin from "./Components/Forms/MobLogin";
function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Pripto />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/mlogin" element={<MobLogin />} />
        <Route path="/exchange" element={<ExchangeApp />} />
        <Route path="profile" element={<Profile />}>
          <Route path="" element={<OverView />} />
          <Route path="Main" element={<Main />} />
          <Route path="Trade" element={<Trading />} />
          <Route path="Futures" element={<Futures />} />
          <Route path="Margin" element={<Margin />} />
          <Route path="TradingBot" element={<TradingBot />} />
        </Route>
      </Routes>
      <ChatBox />
    </React.StrictMode>
  );
}

export default App;
