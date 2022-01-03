import React from "react";
import { Container, PText, Title, ChartDiv, Icon } from "./styles";
import StackedChart from "../StackedChart/index";

function SpentThisMonth({ randomNumb }) {
  return (
    <Container>
      <PText>Spent this month</PText>
      <Title>${randomNumb}</Title>
      <PText>
        <Icon className="fas fa-chevron-up"></Icon>+2.5%
      </PText>
      <PText>
        <Icon className="fas fa-check-circle"></Icon>On track
      </PText>
      <ChartDiv>
        <StackedChart />
      </ChartDiv>
    </Container>
  );
}

export default SpentThisMonth;
