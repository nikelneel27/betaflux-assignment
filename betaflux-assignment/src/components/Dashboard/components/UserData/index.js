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
  Icon,
} from "./styles";

export const UserContext = createContext();

function UserData() {
  const [userName, setUserName] = useState("");
  const [DOB, setDOB] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <UserContext.Provider value={{ userName, DOB, selectedStatus }}>
      <Container>
        <FilterSection>
          <FilterSectionDiv>
            <Search
              type="text"
              placeholder="search"
              onChange={(e) => setUserName(e.target.value)}
            ></Search>
            {/* <Icon className="fas fa-search"></Icon> */}
          </FilterSectionDiv>
          <FilterSectionDiv>
            <DateFilter
              type="date"
              placeholder="All Dates"
              onChange={(e) => setDOB(e.target.value)}
            ></DateFilter>
            <StatusFilter
              onChange={(e) => setSelectedStatus(e.target.value)}
              placeholder="Status"
            >
              <option>Choose Status</option>
              <option value="Answered">Answered</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </StatusFilter>
          </FilterSectionDiv>
        </FilterSection>
        <Table />
      </Container>
    </UserContext.Provider>
  );
}

export default UserData;
