import React from "react";
import { useDispatch } from "react-redux";

function Base2() {

  const dispatch = useDispatch();

  function addMoney() {
    dispatch({type: "ADD_MONEY", payload: 300})
  }

  function getMoney() {
    dispatch({type: "GET_MONEY", payload: 300})
  }

  return (
    <div>
        <h1>Hello from Base2</h1>    
      <div>
      <button onClick={() => {addMoney()}}> Пополнить</button>
        <button onClick={() => {getMoney()}}> Снять</button>
      </div>
    </div>
    
  );
}

export default Base2;