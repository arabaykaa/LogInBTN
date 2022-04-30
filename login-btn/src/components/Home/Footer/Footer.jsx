import React from "react";
import footerObj from "./Footer.module.css";

export function Footer() {
  return (
    <div>
      <footer>
        <div className={footerObj.footerContainer}>
          <p>
            <span>Captain Sem</span>
            <br />
            <br />
            Veteran Spooky Ghost
          </p>
          <div></div>
        </div>
      </footer>
    </div>
  );
}
