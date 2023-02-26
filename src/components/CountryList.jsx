import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryAction, fetchCountryData } from "../store/Country-Slice";
import { DarkModeContent } from "./DarkModeCss";
import CardCountry from "./UI/CardCountry";
import FilterRegion from "./UI/FilterRegion";
import InputSearchCountry from "./UI/InputSearchCountry";

const CountryList = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.country.error);
  const isDarkMode = useSelector((state) => state.country.isDarkMode);
  const country = useSelector((state) => state.country.country);
  const countryFilterd = useSelector((state) => state.country.filteredCountry);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);

  const searchCountriesInput = (searchValue) => {
    setSearchInput(searchValue);
    dispatch(countryAction.filterInput({ search: searchValue }));
  };

  return (
    <div className={`${isDarkMode ? DarkModeContent : ""} p-4`}>
      <div className={`max-w-7xl mx-auto`}>
        {error && <h1 className="text-3xl items-start">{error}</h1>}
        <div className="flex md:justify-between md:flex-row flex-col gap-3">
          <InputSearchCountry
            searchInput={searchInput}
            searchCountriesInput={searchCountriesInput}
          />
          <FilterRegion />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-4">
          {countryFilterd.length > 0 ? (
            <>
              {countryFilterd.map((dataCountry) => (
                <CardCountry key={dataCountry.numericCode} data={dataCountry} />
              ))}
            </>
          ) : (
            <>
              {country.map((dataCountry) => (
                <CardCountry key={dataCountry.numericCode} data={dataCountry} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryList;
