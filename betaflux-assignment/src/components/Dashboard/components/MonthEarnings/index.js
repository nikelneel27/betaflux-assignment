import React from "react";
import { Container, PText, Title, Icon, IconDiv, ChartDiv } from "./styles";
import Chart from "../Chart";

function MonthEarnings({ randomNumb }) {
  return (
    <Container>
      <IconDiv>
        <Icon className="fa fa-chart-bar"></Icon>
      </IconDiv>

      <PText>This month earnings</PText>
      <Title>${randomNumb}</Title>
      <PText>+2.5%</PText>
      <ChartDiv>
        <Chart />
      </ChartDiv>
    </Container>
  );
}

export default MonthEarnings;
