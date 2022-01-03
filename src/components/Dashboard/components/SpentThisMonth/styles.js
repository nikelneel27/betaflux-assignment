import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  margin: 10px;
  background-color: #fff;
  padding: 8px;
  position: relative;
`;

export const PText = styled.p`
  margin: 10px 20px;
  color: #a3aed0;
  font-size: 14px;
  &:nth-child(4),
  &:nth-child(3) {
    font-weight: 700;
    color: #05cd99;
    margin-top: 10px;
  }
  &:nth-child(3) {
    position: absolute;
    top: 10px;
    right: 0;
  }
`;
export const Title = styled.h1`
  font-size: 34px;
  margin: 0px 20px;
  font-weight: 700;
  color: #1b2559;
`;
export const Icon = styled.i`
  margin-right: 2px;
`;

export const Text = styled.p``;

export const ChartDiv = styled.div`
  width: 100%;
  max-width: 350px;
  position: relative;
`;
