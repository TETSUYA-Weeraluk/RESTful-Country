import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { API_COUNTRY_DETAIL } from "../api/countryHttpRequest";
import { DarkModeContent } from "./DarkModeCss";
import ButtonBack from "./UI/ButtonBack";

const CountryDetailContent = (props) => {
  const isDarkMode = useSelector((state) => state.country.isDarkMode);
  const id = useParams();
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      const response = await fetch(API_COUNTRY_DETAIL + id.capital);
      if (!response.ok) {
        throw new Error("Request Country Detail fail");
      }
      const data = await response.json();
      setCountry(data);
      setIsLoading(false);
    };
    sendRequest();
  }, [id]);

  return (
    <div
      className={`${
        isDarkMode ? DarkModeContent : ""
      } shadow-md p-4   h-screen`}
    >
      <div className=" max-w-7xl mx-auto">
        <ButtonBack />

        {isLoading ? (
          <h1 className="text-4xl text-center">Loading.... Please wait</h1>
        ) : (
          <>
            {country.map((data) => (
              <div key={data.callingCodes[0]}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-4">
                  <img src={data.flag} alt="" />
                  <div>
                    <h1 className="font-bold text-4xl">{data.name}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 my-4">
                      <p>
                        <span className="text-sm">Native Name : </span>
                        <span className="font-thin text-sm text-slate-400">
                          {data.nativeName}
                        </span>
                      </p>
                      <p>
                        <span className="text-sm">Top Level Domain : </span>
                        <span className="font-thin text-sm text-slate-400">
                          {data.topLevelDomain[0]}
                        </span>
                      </p>
                      <p>
                        <span className="text-sm">Population : </span>
                        <span className="font-thin text-sm text-slate-400">
                          {data.population}
                        </span>
                      </p>
                      <p>
                        <span className="text-sm">Currencies : </span>
                        <span className="font-thin text-sm text-slate-400">
                          {data.currencies[0].name}
                        </span>
                      </p>
                      <p>
                        <span className="text-sm">Region : </span>
                        <span className="font-thin text-sm text-slate-400">
                          {data.region}
                        </span>
                      </p>
                      <p>
                        <span className="text-sm">Languages : </span>
                        <span className="font-thin text-sm text-slate-400">
                          {data.languages[0].name}
                        </span>
                      </p>
                      <p>
                        <span className="text-sm">Sub Region : </span>
                        <span className="font-thin text-sm text-slate-400">
                          {data.subregion}
                        </span>
                      </p>
                      <p>
                        <span className="text-sm">Capital : </span>
                        <span className="font-thin text-sm text-slate-400">
                          {data.capital}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CountryDetailContent;
