import React from "react";
import headStyleObj from "./Header.module.css";

export function Header() {
  return (
    <div>
      <header>
        <div className={headStyleObj.headContainer}>
          <div className={headStyleObj.headLogo}>&#128128;BRAINSTORM</div>
          <div className={headStyleObj.headLinkContainer}>
            <ul>
              <li>
                <a href="#">Graveyard</a>
              </li>
              <li>
                <a href="#">Track Record</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Learn More</a>
              </li>
            </ul>
            <div className={headStyleObj.supportBtn}>
              <a href="#">Support</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
