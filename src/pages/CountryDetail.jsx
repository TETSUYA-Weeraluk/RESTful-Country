import React from "react";
import { useSelector } from "react-redux";
import CountryDetailContent from "../components/CountryDetailContent";
import { DarkModeText } from "../components/DarkModeCss";
import HeaderCountry from "../components/HeaderCountry";

const CountryDetail = () => {
  const isDarkMode = useSelector((state) => state.country.isDarkMode);
  return (
    <div className={isDarkMode ? DarkModeText : ""}>
      <header>
        <HeaderCountry />
      </header>
      <main>
        <CountryDetailContent />
      </main>
    </div>
  );
};

export default CountryDetail;
