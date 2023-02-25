import React from "react";

const CardCountryDetail = (props) => {
  return (
    <>
      <img className="rounded-t-md" src={props.flag} alt="" />
      <div className="p-4 text-start">
        <h1 className="font-bold my-2">{props.name}</h1>
        <p>
          <span className="font-light">Population : </span>
          <span className="font-thin">{props.population}</span>
        </p>
        <p>
          <span className="font-light">Region : </span>
          <span className="font-thin">{props.region}</span>
        </p>
        <p>
          <span className="font-light">Capital : </span>
          <span className="font-thin">{props.capital}</span>
        </p>
      </div>
    </>
  );
};

export default CardCountryDetail;
