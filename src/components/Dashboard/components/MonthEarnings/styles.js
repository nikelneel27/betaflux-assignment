import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  margin: 10px;
  padding: 8px;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const PText = styled.p`
  margin: ${(props) => (props.margin ? props.margin : "20px 0px 0px 0px")};
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.color};
`;
export const Title = styled.p`
  font-size: 34px;
  margin: 0;
  font-weight: 700;
  color: #1b2559;
`;
export const PTextMainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PTextDiv = styled.div`
  background-color: #05cd991a;
  border-radius: 15px;
  max-width: 58px;
  padding: 4px;
  width: 100%;
`;
export const Text = styled.p``;
export const Icon = styled.i`
  width: 100%;
  height: 14px;
  max-width: 14px;

  color: #1563ff;
`;
export const IconDiv = styled.div`
  top: 10px;
  right: 10px;
  position: absolute;
  background-color: #f4f7fe;
  width: 20px;
  height: 20px;
  border-radius: 5px;
`;
export const ChartDiv = styled.div`
  position: relative;
  width: 100%;
`;
