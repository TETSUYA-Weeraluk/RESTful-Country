import React from "react";
import { IoIosMoon } from "react-icons/io";
import { useDispatch } from "react-redux";
import { countryAction } from "../../store/Country-Slice";

const ButtonChangeDarkMode = () => {
  const dispatch = useDispatch();
  const changeMode = () => {
    dispatch(countryAction.changeMode());
  };

  return (
    <button className="flex items-center" onClick={changeMode}>
      <IoIosMoon />
      <span>Dark Mode</span>
    </button>
  );
};

export default ButtonChangeDarkMode;
