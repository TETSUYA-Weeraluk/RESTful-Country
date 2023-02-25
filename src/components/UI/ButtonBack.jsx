import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DarkModeHeader } from "../DarkModeCss";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const ButtonBack = () => {
  const isDarkMode = useSelector((state) => state.country.isDarkMode);
  return (
    <button
      className={`${isDarkMode ? DarkModeHeader : ""} shadow-md rounded-md`}
    >
      <Link to="/" className="flex items-center gap-2 py-2 px-6">
        <HiOutlineArrowNarrowLeft />
        <span>Back</span>
      </Link>
    </button>
  );
};

export default ButtonBack;
