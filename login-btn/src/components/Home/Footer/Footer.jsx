import React from "react";
import footerObj from "./Footer.module.css";

export function Footer() {
  return (
    <footer>
      <div className={footerObj.footerContainer}>
        <p>
          <span>Captain Sem</span>
          <br />
          Veteran Spooky Ghost
        </p>
        <div></div>
      </div>
    </footer>
  );
}
