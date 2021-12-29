import React from "react";
import { Container } from "./styles";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function Dashboard() {
  return (
    <Container>
      <Sidebar></Sidebar>
      <Main></Main>
    </Container>
  );
}

export default Dashboard;
