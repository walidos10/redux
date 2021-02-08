import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterNot, filterDone, filterAll } from "../JS/actions/actions";

const FilterTask = () => {
  const dispatch = useDispatch();

  const fun = (e) => {
    dispatch(filterAll(e.target.value));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "20px",
        fontSize: "25px",
      }}
    >
      <form name="myForm">
        <input type="radio" name="drivers" onChange={(e) => fun(e)} />
        <span> TaskAll </span>
        <input
          type="radio"
          name="drivers"
          onChange={(e) => {
            dispatch(filterDone(e.target.value));
          }}
        />
        <span> DoneTask </span>
        <input
          type="radio"
          name="drivers"
          onChange={(e) => {
            dispatch(filterNot(e.target.value));
          }}
        />
        <span> NotTask </span>
      </form>
    </div>
  );
};

export default FilterTask;
