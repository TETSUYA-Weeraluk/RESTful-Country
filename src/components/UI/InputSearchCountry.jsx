import React from "react";
import { useSelector } from "react-redux";
import { DarkModeHeader } from "../DarkModeCss";
import { BiSearchAlt2 } from "react-icons/bi";

const InputSearchCountry = ({ searchCountriesInput, searchInput }) => {
  const isDarkMode = useSelector((state) => state.country.isDarkMode);

  return (
    <div
      className={`${
        isDarkMode ? DarkModeHeader : ""
      } shadow-md py-2 px-6 flex items-center gap-2 rounded-md w-2/4`}
    >
      <BiSearchAlt2 color={isDarkMode ? "" : "black"} />
      <input
        onChange={(e) => searchCountriesInput(e.target.value)}
        value={searchInput}
        className="outline-none bg-transparent w-full"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default InputSearchCountry;
