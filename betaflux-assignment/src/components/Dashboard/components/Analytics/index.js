import React from "react";
import { Container } from "./styles";
import Chart from "../Chart";
import MonthEarnings from "../MonthEarnings/index";
import CreditBalance from "../CreditBalance/index.js";
import SpentThisMonth from "../SpentThisMonth/index.js";

function Analytics() {
  return (
    <Container>
      <MonthEarnings />
      <CreditBalance />
      <SpentThisMonth />
    </Container>
  );
}

export default Analytics;
