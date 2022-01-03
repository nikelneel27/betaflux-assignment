import React from "react";
import { Container } from "./styles";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <Outlet/>
    </Container>
  );
}

export default Dashboard;
