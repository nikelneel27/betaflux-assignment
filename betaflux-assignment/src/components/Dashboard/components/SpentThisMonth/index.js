import React from "react";
import { Container, PText, Title, ChartDiv } from "./styles";
import StackedChart from "../StackedChart/index";

function SpentThisMonth() {
  return (
    <Container>
      <PText>Spent this month</PText>
      <Title>$682.5</Title>
      <PText>+2.5%</PText>
      <PText>On track</PText>
      <ChartDiv>
        <StackedChart />
      </ChartDiv>
    </Container>
  );
}

export default SpentThisMonth;
