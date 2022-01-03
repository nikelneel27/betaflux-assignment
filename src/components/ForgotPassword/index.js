import React, { useState } from "react";
import {
  Container,
  WelcomeSection,
  LoginSection,
  Input,
  Label,
  Button,
  TextWrapper,
  DivWrapper,
} from "./styles";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const forgotPassword = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Please check your email...");
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <Container>
      <LoginSection>
        <WelcomeSection>Reset Password !</WelcomeSection>
        <DivWrapper>
          <Label>Email</Label>
          <Input
            required
            placeholder="Enter email to reset password"
            onChange={(e) => setEmail(e.target.value)}
          />
        </DivWrapper>
        {errorMessage && (
          <TextWrapper color={"red"}>*{errorMessage}</TextWrapper>
        )}
        <Button onClick={() => forgotPassword(email)}>Reset Password</Button>
      </LoginSection>
    </Container>
  );
}

export default ForgotPassword;
