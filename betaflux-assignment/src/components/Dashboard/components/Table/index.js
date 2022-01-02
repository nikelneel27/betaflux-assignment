import React, { useEffect, useState, useContext, Suspense } from "react";
import { userdata } from "../../../../apis/userdata";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserContext } from "../UserData/index";
import {
  TableSection,
  TableRow,
  Th,
  TableData,
  CheckBox,
  TableDiv,
  TableHead,
  TableBody,
  UserImage,
} from "./styles";

function Table() {
  const { userName, DOB, selectedStatus } = useContext(UserContext);

  const [randomUser, SetRandomUser] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const randomStatus = ["Answered", "Pending", "Approved", "Rejected"];

  const fetchData = () => {
    userdata().then((results) => {
      results.forEach((object) => {
        object.status =
          randomStatus[Math.floor(Math.random() * randomStatus.length)];
      });
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
    const dob = DOB.split("-");
    const formattedDob = `${dob[2]}.${dob[1]}.${dob[0]}`;

    let userList = randomUser;
    if (userName !== "" || DOB !== "" || selectedStatus !== "") {
      userList = randomUser.filter((e) => {
        if (
          (renderDate(e.dob.date).match(formattedDob) && !userName) ||
          (e.name.first.toLowerCase().includes(userName.toLowerCase()) &&
            !DOB) ||
          (e.status.toLowerCase().includes(selectedStatus.toLowerCase()) &&
            !userName &&
            !DOB)
        ) {
          return e;
        }

        // if (userName && DOB) {
        //   e.name.first.toLowerCase().includes(userName.toLowerCase());
        //   renderDate(e.dob.date).match(formattedDob);
        //   return e;
        // }
      });
    }
    //suspense
    const resource = userdata();

    return userList.map((e) => (
      <TableRow key={e.login.uuid}>
        <TableData width="5%">
          <CheckBox type="checkbox"></CheckBox>
        </TableData>

        <TableData width="20%" align={true}>
          <UserImage src={e.picture.thumbnail} alt="" />
          {e.name.first} {e.name.last}
        </TableData>

        <TableData width="30%">
          {e.location.street.number},{e.location.street.name}
          {e.location.city},{e.location.country}
        </TableData>
        <TableData width="20%">{e.phone}</TableData>
        <TableData width="10%"> {renderDate(e.dob.date)}</TableData>
        <TableData width="10%">{e.status}</TableData>
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
        height={180}
      >
        <TableBody>{renderTableBody()}</TableBody>
      </InfiniteScroll>
    </TableSection>
  );
}

export default Table;
