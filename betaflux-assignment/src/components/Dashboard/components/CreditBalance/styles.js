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

export const MainDiv = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 15px;
  border-radius: 20px;
  width: 100%;
  height: 25%;
  background-color: #4318ff;
  color: #fff;
  text-align: left;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 34px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
`;
export const TextVal = styled.p`
  margin: 0;
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: 14px;
  text-align: left;
`;
export const TextValSub = styled.p`
  margin: 0;
  font-size: 12px;
  color: #a3aed0;
  text-align: left;
`;

export const SecondaryDiv = styled.div`
  text-align: center;
`;
export const ImgTextDiv = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

export const SubDiv = styled.div`
  display: flex;
  margin: 0;
  justify-content: space-between;
  align-items: center;
`;
export const IconDiv = styled.div`
  max-width: 20px;
  height: 20px;
  width: 100%;
  position: absolute;
  top: 11%;
  right: 10%;
`;

export const RecentIconDiv = styled.div`
  background-color: #f4f7fe;
  padding: 3px;
  width: 100%;
  max-width: 42px;
  height: 42px;
  border-radius: 42px;
  align-items: center;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BillDiv = styled.div`
  max-width: 140px;
  width: 100%;
  padding: 10px;
`;
export const Icon = styled.i`
  max-width: 20px;
  width: 100%;
  height: 20px;
  color: #fff;
`;
export const RecentIcon = styled.i`
  font-size: 22px;
  align-items: center;
  color: ${(props) => props.color};
`;

export const ImageDiv = styled.div`
  position: absolute;
  top: 22%;
  right: 10%;
  align-items: center;
`;
export const Image = styled.img``;
