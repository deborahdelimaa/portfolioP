import React from "react";
import Profile from "./Profile/Profile.js";
import Footer from "./Footer/Footer";
import "./Home.css";
import Header from "./Header/Header.js";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
