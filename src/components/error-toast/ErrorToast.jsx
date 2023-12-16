import React from "react";
import style from "./ErrorToast.module.css";


function ErrorToast({ error }) {
 
  return (
    <div className={style.box}>
      {error}
      <h1>Oops!!.. Erroes Thrown</h1>
    </div>
  );
}

export default ErrorToast;
