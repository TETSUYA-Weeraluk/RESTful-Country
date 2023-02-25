import React from "react";
import { useSelector } from "react-redux";
import { DarkModeHeader } from "./DarkModeCss";
import ButtonChangeDarkMode from "./UI/ButtonChangeDarkMode";

const HeaderCountry = () => {
  const isDarkMode = useSelector((state) => state.country.isDarkMode);

  return (
    <nav className={`${isDarkMode ? DarkModeHeader : ""} shadow-md p-4 `}>
      <div
        className={`${
          isDarkMode ? DarkModeHeader : ""
        } max-w-7xl flex justify-between mx-auto`}
      >
        <h1 className="font-bold">Where in the world?</h1>
        <ButtonChangeDarkMode />
      </div>
    </nav>
  );
};

export default HeaderCountry;
