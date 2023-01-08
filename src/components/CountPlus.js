import React from "react";
import { useDispatch } from "react-redux";
import { plusCountActionCreator } from "../store/countReducer";

function CountPlus() {
   const dispatch = useDispatch();
   const PlusOne = () => dispatch(plusCountActionCreator(1))
   const PlusTen = () => dispatch(plusCountActionCreator(10))
   const PlusHundred = () => dispatch(plusCountActionCreator(100))
   const PlusThousand = () => dispatch(plusCountActionCreator(1000))
   const PlusYourAmount = (num) => dispatch(plusCountActionCreator(num))

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