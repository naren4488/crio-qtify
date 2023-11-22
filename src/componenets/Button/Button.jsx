import React from "react";
import style from "./Button.module.css";

export default function Button({ children }) {
  return (
    <div >
      <button className={style.button}>{children}</button>
    </div>
  );
}
