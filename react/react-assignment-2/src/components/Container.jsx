import React, { useContext } from "react";
import Header from "./Header";
import Forecasts from "./Forecasts";
import Button from "./Button";
import ThemeContext from "../context/ThemeContext";

function Container() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Button />
      <div
        className={`${
          theme === "light" ? "bg-primary bg-opacity-50" : "bg-light"
        }`}
      >
        <Header />
        <Forecasts />
      </div>
    </div>
  );
}

export default Container;
