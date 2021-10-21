import React from "react";
import { useLocation } from "react-router";

const CalculatorPrint = () => {
  const location = useLocation();

  const data = location.state.item;
  console.log(data);
  return (
    <div>
      <h1>Salom print</h1>
    </div>
  );
};

export default CalculatorPrint;
