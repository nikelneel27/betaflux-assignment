import styled from "styled-components";
export const CheckBox = styled.input``;

export const TableSection = styled.table`
  width: 100%;
  display: block;
`;

export const TableBody = styled.tbody`
  height: 300px;
  overflow: scroll;
  margin-bottom: 50px;
  display: block;
`;
export const TableHead = styled.thead`
  background-color: #000;
  color: #fff;
`;
export const TableRow = styled.tr``;

export const Th = styled.th`
  text-align: left;
  max-width: ${(props) => props.width};
`;
export const TableData = styled.td`
  padding: 10px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  width: ${(props) => props.width};
`;

export const TableDiv = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-around;
`;
