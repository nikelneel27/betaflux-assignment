import React from "react";
import { Container } from "./styles";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { Routes, Route, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <Outlet/>
    </Container>
  );
}

export default Dashboard;
