import React from "react";
import { useSelector } from "react-redux";
import CountryList from "../components/CountryList";
import { DarkModeText } from "../components/DarkModeCss";
import HeaderCountry from "../components/HeaderCountry";

const Country = () => {
  const isDarkMode = useSelector((state) => state.country.isDarkMode);

  return (
    <div className={`${isDarkMode ? DarkModeText : ""} mx-auto`}>
      <header>
        <HeaderCountry />
      </header>
      <main>
        <CountryList />
      </main>
    </div>
  );
};

export default Country;
