import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./Page404.module.css";

function Page404() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 8000);
  });

  return (
    <>
      <div className={style.ErrorContainer}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page <code style={{ color: "red" }}>{location.pathname}</code>{" "}
          does not exist.
        </p>
        <button
          style={{ background: "#FF206F" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
      </div>
    </>
  );
}

export default Page404;
