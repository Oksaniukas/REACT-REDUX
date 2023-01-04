import React from "react";
import { useDispatch } from "react-redux";


function Button() {
   const dispatch = useDispatch();

   function NewAmount(num) {
      dispatch({type: 'YOUR_AMOUNT', payload: num})
   }
   
   return (
      <div className="btn">
         
         <div>
            <button onClick={() => {NewAmount(Number(prompt()))}}> Enter your amount</button>
         </div>
      </div>
   )
};

export default Button;