import React, { Suspense } from "react";
import Analytics from "../Analytics";
import UserData from "../UserData";
import { auth } from "../../../../firebase";
import { useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
      auth.signOut().then(async () => {
        await localStorage.setItem("loggedIn", false);
        await navigate("/");
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

        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "90px",
              }}
            >
              <Loader
                type="Rings"
                color="#00BFFF"
                height={200}
                width={200}
                timeout={8000} //3 secs
              />
            </div>
          }
        >
          <UserData></UserData>
        </Suspense>
      </Container>
    </MainContainer>
  );
}

export default Main;
