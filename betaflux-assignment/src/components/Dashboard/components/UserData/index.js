import React, { useEffect, useState, Suspense } from "react";

import Table from "../Table";

import {
  Container,
  FilterSection,
  Search,
  DateFilter,
  StatusFilter,
  FilterSectionDiv,
} from "./styles";

function UserData() {
  return (
    <Container>
      <FilterSection>
        <FilterSectionDiv>
          <Search type="text" placeholder="search"></Search>
        </FilterSectionDiv>
        <FilterSectionDiv>
          <DateFilter type="date" placeholder="All Dates"></DateFilter>
          <StatusFilter placeholder="Status">
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
          </StatusFilter>
        </FilterSectionDiv>
      </FilterSection>
      <Table />
    </Container>
  );
}

export default UserData;
