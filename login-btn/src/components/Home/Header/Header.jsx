import React from "react";
import h from "./Header.module.css";
import { HeadLinks } from "./HeadLinks/HeadLinks";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header>
        <div className={h.headContainer}>
          <div className={h.headLogo}>&#128128;BRAINSTORM</div>
          <div className={h.headLinkContainer}>
            <ul>
              <HeadLinks linkurl="/" linkName="Graveyard" />
              <HeadLinks linkurl="/Content" linkName="Content" />
              <HeadLinks linkurl="/" linkName="Services" />
              <HeadLinks linkurl="/" linkName="Learn more" />
            </ul>
          </div>
          <div className={h.supportBtn}>
            <NavLink to="/LogInForm">LogIn</NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}
