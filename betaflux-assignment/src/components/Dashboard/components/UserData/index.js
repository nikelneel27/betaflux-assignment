import React, {
  useEffect,
  useState,
  Suspense,
  createContext,
  useContext,
} from "react";

import Table from "../Table";

import {
  Container,
  FilterSection,
  Search,
  DateFilter,
  StatusFilter,
  FilterSectionDiv,
} from "./styles";

export const UserContext = createContext();

function UserData() {
  const [userName, setUserName] = useState("");
  const [DOB, setDOB] = useState("");

  return (
    <UserContext.Provider value={{ userName, DOB }}>
      <Container>
        <FilterSection>
          <FilterSectionDiv>
            <Search
              type="text"
              placeholder="search"
              onChange={(e) => setUserName(e.target.value)}
            ></Search>
          </FilterSectionDiv>
          <FilterSectionDiv>
            <DateFilter
              type="date"
              placeholder="All Dates"
              onChange={(e) => setDOB(e.target.value)}
            ></DateFilter>
            <StatusFilter placeholder="Status">
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
            </StatusFilter>
          </FilterSectionDiv>
        </FilterSection>
        <Table />
      </Container>
    </UserContext.Provider>
  );
}

export default UserData;
