import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  WelcomeSection,
  LoginSection,
  Input,
  Label,
  Button,
  TextWrapper,
  DivWrapper,
  NewUserSection,
  MainContainer,
} from "./styles";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    isLoggedIn && navigate("/dashboard/main");
  }, []);

  const loginUser = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password).then(() => {
        localStorage.setItem("loggedIn", rememberMe);
        navigate("/dashboard/main");
      });
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const forgotPassword = () => {
    navigate("/forgot-password");
  };

  const rememberMeClick = (e) => {
    const checked = e.target.checked;
    setRememberMe(checked);
  };

  return (
    <MainContainer>
      <Container>
        <WelcomeSection>Welcome!</WelcomeSection>
        <LoginSection>
          <DivWrapper>
            <Label>Email</Label>
            <Input
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </DivWrapper>
          <DivWrapper>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </DivWrapper>
          <TextWrapper onClick={() => forgotPassword()}>
            Forgot our password?
          </TextWrapper>
          <TextWrapper>
            <Input type="checkbox" onClick={(e) => rememberMeClick(e)} />
            Remember me next time
          </TextWrapper>
          {errorMessage && (
            <TextWrapper color={"red"}>*{errorMessage}</TextWrapper>
          )}
          <Button onClick={() => loginUser(email, password)}>Log in</Button>
        </LoginSection>
        <NewUserSection>
          New user? <Link to="/signup">Sign Up</Link>
        </NewUserSection>
      </Container>
    </MainContainer>
  );
}

export default Login;
