import React from "react";
import { useSelector } from "react-redux";
import Button from "./components/Button";
import CountMinus from "./components/CountMinus";
import CountPlus from "./components/CountPlus";

function App() {
  const count = useSelector((state) => state.count)

  return (
    <div className="App">
      <h1> COUNT : {count}</h1>
      <hr />
      <div className="count">
        <CountMinus />
        <CountPlus />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}

export default App;
