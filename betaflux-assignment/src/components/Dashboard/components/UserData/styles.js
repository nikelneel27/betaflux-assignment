import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 1px 0px #dadbe4;
`;

export const FilterSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Search = styled.input`
  outline: none;
  border: 1px solid #ccc;
  background-color: #e9e3ff;
  opacity: 0.5;
  height: 44px;
`;

export const StatusFilter = styled.select`
  outline: none;
  border: 1px solid #ccc;
  height: 44px;
  margin-left: 20px;
`;

export const DateFilter = styled.input`
  outline: none;
  border: 1px solid #ccc;
  height: 44px;
`;

export const FilterSectionDiv = styled.div`
  padding: 20px;
`;
