import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryAction } from "../../store/Country-Slice";
import { DarkModeHeader } from "../DarkModeCss";

const FilterRegion = () => {
  const isDarkMode = useSelector((state) => state.country.isDarkMode);
  const dispatch = useDispatch();

  const onClickFilterRegion = (e) => {
    dispatch(countryAction.filterInput({ region: e.target.value }));
  };
  return (
    <select
      className={`${
        isDarkMode ? DarkModeHeader : ""
      } shadow-md md:w-1/4 outline-none rounded-md  md:my-0 p-4`}
      onClick={onClickFilterRegion}
    >
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Oceania">Oceania</option>
      <option value="Americas">Americas</option>
      <option value="Europe">Europe</option>
    </select>
  );
};

export default FilterRegion;
