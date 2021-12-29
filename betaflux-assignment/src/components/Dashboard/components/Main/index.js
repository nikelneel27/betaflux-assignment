import React from "react";
import Analytics from "../Analytics";
import UserData from "../UserData";
import { Container, MainContainer } from "./styles";

function Main() {
  return (
    <MainContainer>
      <p>Hi There,</p>
      <h2>Welcome to your Dashboard</h2>
      <Container></Container>
    </MainContainer>
  );
}

export default Main;
