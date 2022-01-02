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
} from "./styles";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    isLoggedIn && navigate("/dashboard/main");
  }, []);
  const loginUser = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password).then(() => {
        localStorage.setItem("loggedIn", true);
        navigate("/dashboard/main");
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const forgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div>
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
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </DivWrapper>
          <TextWrapper onClick={() => forgotPassword(email)}>
            Forgot our password?
          </TextWrapper>
          <TextWrapper>
            <Input type="checkbox" />
            Remember me next time
          </TextWrapper>
          <Button onClick={() => loginUser(email, password)}>Log in</Button>
        </LoginSection>
        <NewUserSection>
          New user? <Link to="/signin">Sign Up</Link>
        </NewUserSection>
      </Container>
    </div>
  );
}

export default Login;
