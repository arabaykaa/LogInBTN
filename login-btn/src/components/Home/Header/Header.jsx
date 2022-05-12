import React from "react";
import h from "./Header.module.css";
import { HeadLinks } from "./HeadLinks/HeadLinks";
import { LogRegBtns } from "./LogRegBtns/LogRegBtns";

export function Header() {
  return (
    <div>
      <header>
        <div className={h.headContainer}>
          <div className={h.headLogo}>&#128128;BRAINSTORM</div>
          <div className={h.headLinkContainer}>
            <ul>
              <HeadLinks linkurl="/Content" linkName="Graveyard" />
              <HeadLinks linkName="Content" />
              <HeadLinks linkName="Services" />
              <HeadLinks linkName="Learn more" />
            </ul>
          </div>
          <LogRegBtns />
        </div>
      </header>
    </div>
  );
}
