import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, WelcomeSection, LoginSection, Input, Label, Button, TextWrapper, DivWrapper, NewUserSection } from './styles'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const loginUser = async (email, password) => {
        try {
            console.log(email, password)
            await auth.signInWithEmailAndPassword(email, password).then(() => { navigate("/dashboard") })
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
                        <Input placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                    </DivWrapper>
                    <DivWrapper>
                        <Label>Password</Label>
                        <Input placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                    </DivWrapper>
                    <TextWrapper>Forgot our password?</TextWrapper>
                    <TextWrapper><Input type="checkbox" />Remember me next time</TextWrapper>
                    <Button onClick={() => loginUser(email, password)}>Log in</Button>
                </LoginSection>
                <NewUserSection>New user? <Link to="/signin">Sign Up</Link></NewUserSection>
            </Container>
        </div>
    )
}

export default Login
