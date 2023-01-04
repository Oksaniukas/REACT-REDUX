import React from "react";
import { useDispatch } from "react-redux";

function CountPlus() {
   const dispatch = useDispatch();

   function PlusOne() {
      dispatch({type: "PLUS", payload: 1})
   }
   
   function PlusTen() {
      dispatch({type: "PLUS", payload: 10})
   }

   function PlusHundred() {
      dispatch({type: "PLUS", payload: 100})
   }
  
  function PlusThousand() {
    dispatch({type: "PLUS", payload: 1000})
  }

  function PlusYourAmount(num) {
   dispatch({type: "PLUS", payload: num})
}


   return (
      <div className="plus">
         <h1>PLUS:</h1>    
         <div>
            <button onClick={() => {PlusOne()}}> +1</button>
            <button onClick={() => {PlusTen()}}> +10</button>
            <button onClick={() => {PlusHundred()}}> +100</button>
            <button onClick={() => {PlusThousand()}}> +1000</button>
            <button onClick={() => {PlusYourAmount(Number(prompt()))}}> + Your amount</button>

         </div>
      </div>
   )
};

export default CountPlus;