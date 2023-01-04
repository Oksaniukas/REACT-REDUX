import React from "react";
import { useDispatch } from "react-redux";

function Base1() {

  const dispatch = useDispatch();

  function addMoney() {
    dispatch({type: "ADD_MONEY", payload: 1000})
  }

  function getMoney() {
    dispatch({type: "GET_MONEY", payload: 1000})
  }

  return (
    <div>
        <h1>Hello from Base1</h1>    
      <div>
        <button onClick={() => {addMoney()}}> Пополнить</button>
        <button onClick={() => {getMoney()}}> Снять</button>
      </div>
      <hr />
    </div>
    
  );
}

export default Base1;