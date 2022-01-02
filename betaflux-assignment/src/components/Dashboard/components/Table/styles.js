import styled from "styled-components";
export const CheckBox = styled.input``;

export const TableSection = styled.table`
  width: 100%;
  display: block;
  border-collapse: collapse !important;
`;

export const TableBody = styled.tbody`
  height: 300px;
  margin-bottom: 50px;
  display: block;
`;
export const TableHead = styled.thead`
  background-color: #000;
  border: none !important;
  border-spacing: 0 !important;

  color: #fff;
`;
export const TableRow = styled.tr``;

export const Th = styled.th`
  padding: 5px 0;
  text-align: left;
  font-weight: 500;
  width: ${(props) => props.width};
  &:nth-child(1),
  &:nth-child(7) {
    padding: 0 3px 0 3px;
  }
`;
export const TableData = styled.td`
  padding: 5px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  max-width: 40px;
  border-bottom: 1px solid #eeeeee;
  max-width: ${(props) => props.width};
`;

export const TableDiv = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-around;
`;
export const UserImage = styled.img`
  border-radius: 50px;
  width: 100%;
  max-width: 30px;
  height: 30px;
  margin-right: 8px;
`;
