import React from "react";
import { useDispatch } from "react-redux";
import { minusCountActionCreator} from "../store/countReducer";

function CountMinus() {
   const dispatch = useDispatch();
   const MinusOne = () => dispatch(minusCountActionCreator(1))
   const MinusTen = () => dispatch(minusCountActionCreator(10))
   const MinusHundred = () => dispatch(minusCountActionCreator(100))
   const MinusThousand = () => dispatch(minusCountActionCreator(1000))
   const MinusYourAmount = (num) => dispatch(minusCountActionCreator(num))

   return (
      <div className="minus">
         <h1>MINUS:</h1>    
         <div>
            <button onClick={() => {MinusOne()}}> -1</button>
            <button onClick={() => {MinusTen()}}> -10</button>
            <button onClick={() => {MinusHundred()}}> -100</button>
            <button onClick={() => {MinusThousand()}}> -1000</button>
            <button onClick={() => {MinusYourAmount(Number(prompt()))}}> - Your amount</button>
         </div>
      </div>
   )
};

export default CountMinus;