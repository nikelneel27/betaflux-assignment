import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Chart from "../Chart";
import MonthEarnings from "../MonthEarnings/index";
import CreditBalance from "../CreditBalance/index.js";
import SpentThisMonth from "../SpentThisMonth/index.js";

function Analytics() {
  useEffect(() => {
    randomNumber();
    creditBalance();
  }, []);
  
  const [randomNumb, setRandomNumb] = useState("");
  const [creditBalanceVal, setCreditBalanceVal] = useState("");

  const randomNumber = () => {
    setRandomNumb((Math.random() * (1000.0 - 1.0 + 1.0) + 1.0).toFixed(2));
  };
  const creditBalance = () => {
    setCreditBalanceVal(Math.floor(Math.random() * 10000));
  };

  return (
    <Container>
      <MonthEarnings randomNumb={randomNumb} />
      <CreditBalance creditBalanceVal={creditBalanceVal} />
      <SpentThisMonth randomNumb={randomNumb} />
    </Container>
  );
}

export default Analytics;
