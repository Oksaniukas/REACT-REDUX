import React from "react";
import { useDispatch } from "react-redux";


function CountMinus() {
   const dispatch = useDispatch();

   function MinusOne() {
      dispatch({type: "MINUS", payload: 1})
   }
   
   function MinusTen() {
      dispatch({type: "MINUS", payload: 10})
   }

   function MinusHundred() {
      dispatch({type: "MINUS", payload: 100})
   }
  
  function MinusThousand() {
    dispatch({type: "MINUS", payload: 1000})
  }

   return (
      <div className="minus">
         <h1>MINUS:</h1>    
         <div>
            <button onClick={() => {MinusOne()}}> -1</button>
            <button onClick={() => {MinusTen()}}> -10</button>
            <button onClick={() => {MinusHundred()}}> -100</button>
            <button onClick={() => {MinusThousand()}}> -1000</button>
         </div>
      </div>
   )
};

export default CountMinus;