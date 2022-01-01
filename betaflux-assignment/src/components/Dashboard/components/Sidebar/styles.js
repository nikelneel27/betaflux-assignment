import styled from "styled-components";
import { useContext } from "react";

export const SidebarDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  font-size: 26px;
  font-weight: 700;
  color: #4318ff;
  padding: 47px 51px 0px 50px;
  border-bottom: 1px solid #f4f7fe;
  height: 100px;
`;
export const Subtitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0;
`;
export const LogoImage = styled.img`
  width: 100%;
  height: 44px;
  max-width: 44px;
  margin-right: 5px;
`;
export const SideBarItems = styled.ul`
  margin-top: 50px;
`;
export const SideBarItem = styled.li`
  cursor: pointer;
  list-style: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  color: ${(props) =>
    props.selectedIndex === props.index ? "#1B2559" : "#A3AED0"};
  border-right: ${(props) =>
    props.selectedIndex === props.index && "2px solid #4318ff"};
  margin-bottom: 20px;
`;
export const Icon = styled.i`
  color: ${(props) =>
    props.selectedIndex === props.index ? "#4318ff" : "#A3AED0"};
  margin-right: 12px;
`;
