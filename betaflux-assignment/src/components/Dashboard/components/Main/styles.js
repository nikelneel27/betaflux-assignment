import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const WelcomeText = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 4px;
  color: #707eae;
  &:nth-child(2) {
    font-size: 34px;
    color: #2b3674;
  }
`;
export const WelcomeDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LogoutText = styled.p`
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  padding: 36px;
  max-height: 100vh;
`;
