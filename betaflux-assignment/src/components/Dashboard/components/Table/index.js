import React, { useEffect, useState, Suspense } from "react";
import { userdata } from "../../../../apis/userdata";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  TableSection,
  TableRow,
  Th,
  TableData,
  CheckBox,
  TableDiv,
  TableHead,
  TableBody,
} from "./styles";

function Table() {
  const [randomUser, SetRandomUser] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    userdata().then((results) => {
      SetRandomUser(randomUser.concat(results));
    });
  };

  const renderDate = (date) => {
    const DATE_TIME = {
      DATE_FORMAT: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timeZone: "utc",
      },
    };
    const convertDate = new Date(date);
    const formattedDate = convertDate.toLocaleString(
      "en-gb",
      DATE_TIME.DATE_FORMAT
    );
    const dob = formattedDate.replaceAll("/", ".");
    return dob;
  };

  const renderTableBody = () => {
    return randomUser.map((e) => (
      <TableRow>
        <TableData width="5%">
          <CheckBox type="checkbox"></CheckBox>
        </TableData>
        <TableData width="20%">
          {e.name.first} {e.name.last}
        </TableData>
        <TableData width="30%">
          {e.location.street.number},{e.location.street.name}
          {e.location.city},{e.location.country}
        </TableData>
        <TableData width="20%">{e.phone}</TableData>
        <TableData width="10%"> {renderDate(e.dob.date)}</TableData>
        <TableData width="10%">Pending</TableData>
        <TableData width="5%">...</TableData>
      </TableRow>
    ));
  };

  return (
    <TableSection>
      <TableHead>
        <TableRow>
          <Th width="5%">
            <CheckBox type="checkbox"></CheckBox>
          </Th>
          <Th width="20%">Author</Th>
          <Th width="30%">Address</Th>
          <Th width="20%">Phone Number</Th>
          <Th width="10%">DOB</Th>
          <Th width="10%">Status</Th>
          <Th width="5%">Action</Th>
        </TableRow>
      </TableHead>
      <InfiniteScroll
        dataLength={randomUser.length}
        next={() => fetchData()}
        hasMore={true}
        loader={<h1>loading...</h1>}
      >
        <TableBody>{renderTableBody()}</TableBody>
      </InfiniteScroll>
    </TableSection>
  );
}

export default Table;
