import React from "react";
import {
  Container,
  PText,
  Title,
  Icon,
  IconDiv,
  ChartDiv,
  PTextDiv,
  PTextMainDiv,
} from "./styles";
import Chart from "../Chart";

function MonthEarnings({ randomNumb }) {
  return (
    <Container>
      <IconDiv>
        <Icon className="fa fa-chart-bar"></Icon>
      </IconDiv>

      <PText color={"#A3AED0"}>This month earnings</PText>
      <Title>${randomNumb}</Title>
      <PTextMainDiv>
        <PTextDiv>
          <PText color={"#05CD99"} margin={"0px"}>
            +2.5%
          </PText>
        </PTextDiv>
      </PTextMainDiv>

      <ChartDiv>
        <Chart />
      </ChartDiv>
    </Container>
  );
}

export default MonthEarnings;
