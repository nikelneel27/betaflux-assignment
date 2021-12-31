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
  border: none;
  background-color: #f4f7fe;
  opacity: 0.5;
  height: 44px;
  border-radius: 8px;
  max-width: 266px;
  width: 100%;
  height: 44px;
  padding: 5px 16px 5px 16px;
  box-shadow: 1px 1px 1px #dadbe4;
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
