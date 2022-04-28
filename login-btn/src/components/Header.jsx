import React from "react";
import "./Header.css";

export function Header() {
  return (
    <div>
      <header>
        <div className="headContainer">
          <div className="headLogo">&#128128;BRAINSTORM</div>
          <div className="headLinkContainer">
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
            <div className="supportBtn">
              <a href="#">Support</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
