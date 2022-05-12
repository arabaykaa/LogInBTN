import React from "react";
import c from "./LogRegBtns.module.css";

export function LogRegBtns() {
  return (
    <div className={c.supportBtn}>
      <a href="/LogInForm">LogIn</a>
      <div className={c.vline}></div>
      <a href="/Registration">Registration</a>
    </div>
  );
}
