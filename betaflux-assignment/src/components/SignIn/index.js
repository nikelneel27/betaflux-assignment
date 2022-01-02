import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  WelcomeSection,
  LoginSection,
  Input,
  Label,
  Button,
  DivWrapper,
  NewUserSection,
} from "./styles";
import { auth } from "../../firebase";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createUser = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password).then(() => {
        localStorage.setItem("loggedIn", true);
        navigate("/dashboard/main");
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div>
      <Container>
        <WelcomeSection>Welcome!</WelcomeSection>
        <LoginSection>
          <DivWrapper>
            <Label>Email</Label>
            <Input
              type="text"
              required
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </DivWrapper>
          <DivWrapper>
            <Label>Password</Label>
            <Input
              type="text"
              required
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </DivWrapper>
          <Button onClick={() => createUser(email, password)}>Sign Up</Button>
        </LoginSection>
        <NewUserSection>
          New user? <Link to="/">Log In</Link>
        </NewUserSection>
      </Container>
    </div>
  );
}

export default SignIn;
