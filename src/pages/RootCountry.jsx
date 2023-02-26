import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "../store/index";
const RootCountry = () => {
  useEffect(() => {
   localStorage.getItem('theme') === null ? localStorage.setItem('theme', true) : localStorage.getItem('theme')
  },[])
  return (
    <Provider store={store}>
      <>
        <Outlet />
      </>
    </Provider>
  );
};

export default RootCountry;
