import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { countryAction } from "../../store/Country-Slice";
import { DarkModeHeader } from "../DarkModeCss";
import CardCountryDetail from "./CardCountryDetail";

const CardCountry = (props) => {
  const isDarkMode = useSelector((state) => state.country.isDarkMode);
  const dispatch = useDispatch();
  const onClearSearchInput = () => {
    dispatch(countryAction.clearFilterInput());
  };
  return (
    <Link
      onClick={onClearSearchInput}
      key={props.data.numericCode}
      to={props.data.capital}
      className={`rounded-md hover:scale-105 duration-300 shadow-md ${
        isDarkMode ? DarkModeHeader : ""
      }`}
    >
      <CardCountryDetail
        flag={props.data.flag}
        name={props.data.name}
        population={props.data.population}
        region={props.data.region}
        capital={props.data.capital}
      />
    </Link>
  );
};

export default CardCountry;
