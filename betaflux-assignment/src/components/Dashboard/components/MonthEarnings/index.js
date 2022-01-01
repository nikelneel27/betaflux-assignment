import React from "react";
import { Container, PText, Title, Icon, IconDiv, ChartDiv } from "./styles";
import Chart from "../Chart";

function MonthEarnings() {
  return (
    <Container>
      <IconDiv>
        <Icon className="fa fa-chart-bar"></Icon>
      </IconDiv>

      <PText>This month earnings</PText>
      <Title>$682.5</Title>
      <PText>+2.5%</PText>
      <ChartDiv>
        <Chart />
      </ChartDiv>
    </Container>
  );
}

export default MonthEarnings;
