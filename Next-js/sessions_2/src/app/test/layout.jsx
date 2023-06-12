import React from "react";
import style from "./style.module.css";

export default function TestLayout({ children }) {
  return (
    <div>
      <div className={style.testNav}>Test Navbar</div>
      <hr />
      <div>{children}</div>
      <hr />
      <div className={style.testFooter}>Test Footer</div>
    </div>
  );
}
