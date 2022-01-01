import React from "react";
import Analytics from "../Analytics";
import UserData from "../UserData";
import { auth } from "../../../../firebase";
import { useNavigate } from "react-router-dom";
import {
  Container,
  MainContainer,
  WelcomeText,
  WelcomeDiv,
  LogoutText,
} from "./styles";

function Main() {
  const navigate = useNavigate();
  const logout = () => {
    try {
      auth.signOut().then(() => {
        navigate("/");
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <MainContainer>
      <WelcomeDiv>
        <div>
          <WelcomeText>Hi There,</WelcomeText>
          <WelcomeText>Welcome to your Dashboard</WelcomeText>
        </div>
        <div>
          <LogoutText onClick={() => logout()}>
            Log Out <i class="fas fa-arrow-right"></i>
          </LogoutText>
        </div>
      </WelcomeDiv>

      <Container>
        <Analytics></Analytics>
        <UserData></UserData>
      </Container>
    </MainContainer>
  );
}

export default Main;
