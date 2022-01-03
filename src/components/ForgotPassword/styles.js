import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
`;
export const WelcomeSection = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;
export const LoginSection = styled.section`
  background-color: #fff;
  width: 418px;
  border-radius: 10px;
  padding: 40px;
`;
export const Label = styled.label`
  color: #171717;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 44px;
  background-color: #eff0f6;
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 0 16px;
`;
export const Button = styled.button`
  width: 100%;
  background-color: #6858ff;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 4px;
  height: 44px;
  margin-top: 20px;
`;

export const TextWrapper = styled.p`
  color: ${(props) => props.color};
`;

export const DivWrapper = styled.div`
  display: grid;
  padding: 8px 0;
`;
