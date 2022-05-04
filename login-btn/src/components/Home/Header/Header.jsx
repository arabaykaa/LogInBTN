import React from "react";
import h from "./Header.module.css";

export function Header() {
  return (
    <div>
      <header>
        <div className={h.headContainer}>
          <div className={h.headLogo}>&#128128;BRAINSTORM</div>
          <div className={h.headLinkContainer}>
            <ul>
              <li>
                <a href="">Graveyard</a>
              </li>
              <li>
                <a href="">Track Record</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Learn More</a>
              </li>
            </ul>
            <div className={h.supportBtn}>
              <a href="">LogIn</a>
              <div className={h.vline}></div>
              <a href="">LogOut</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
