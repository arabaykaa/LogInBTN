import React from "react";
import c from "./LogIn.module.css";

export function LogInForm() {
  return (
    <div className={c.mainContainer}>
      <div className={c.borderBG}>
        <form className={c.container}>
          <h4 className={c.loginTxt}>Log in</h4>
          <label className={c.labeltxt}>Email</label>
          <input type="email" name="email" id="email" className={c.inputs} />
          <label className={c.labeltxt}>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className={c.inputs}
          />
          <div className={c.btnContainer}>
            <input type="submit" value="Submit" className={c.submitBtn} />
          </div>
        </form>
      </div>
    </div>
  );
}
