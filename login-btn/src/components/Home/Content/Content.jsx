import React from "react";
import c from "./Content.module.css";
import scull from "./images/scull.png";
import scull_livel_1 from "./images/scull_livel_1.png";
import scull_livel_2 from "./images/scull_livel_2.png";
import scull_eyes from "./images/scull_eyes.png";

function Content() {
  return (
    <div className={c.content}>
      <div className={c.wrapper}>
        <div className={c.inner}>
          <div className={c.image}>
            <img src={scull} alt="logo" className={c.scull} />
          </div>
          <div className={c.text}>
            <a href="#" className={c.content_a}>
              #1 Top Scariest Ghost 2020
            </a>
            <h1 className={c.content_h1}>RESPAWN THE SPOOKY SKULL</h1>
            <p className={c.content_p}>
              In search for cute little puppy, Captain Sem has come back from
              his tragic death. With his hogwarts certified power he promise to
              be a hero for all of ghostkind.
            </p>
            <a href="#" className={c.button}>
              Book now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
