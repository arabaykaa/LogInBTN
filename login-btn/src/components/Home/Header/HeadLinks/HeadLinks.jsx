import React from "react";
import c from "./HeadLinks.module.css";
import { NavLink } from "react-router-dom";

export function HeadLinks(props) {
  return (
    <div>
      <li className={c.links}>
        <NavLink to={props.linkurl}>{props.linkName}</NavLink>
      </li>
    </div>
  );
}
