import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="home-container">
    <h1>Github Battle: Battle your friends... and stuff</h1>
    <h2>{"(ง •̀_•́)ง fight..."}</h2>
    <Link className="button" to="/battle">
      Battle
    </Link>
  </div>
);
