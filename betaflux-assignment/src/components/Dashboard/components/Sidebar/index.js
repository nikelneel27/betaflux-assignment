import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SidebarDiv,
  Header,
  Subtitle,
  LogoImage,
  SideBarItems,
  SideBarItem,
  Icon,
  LogoName,
} from "./styles";
import logo from "../../../../assets/Logo.png";

const sideBarLinks = [
  {
    name: "Dashboard",
    icon: "fas fa-border-all ",
    path: "main",
  },
  {
    name: "Activity",
    icon: "fas fa-bolt ",
    path: "under-construction",
  },
  {
    name: "library",
    icon: "fas fa-book-reader",
    path: "under-construction",
  },
  {
    name: "Security",
    icon: "fas fa-shield-alt ",
    path: "under-construction",
  },
  {
    name: "Schedules",
    icon: "far fa-calendar ",
    path: "under-construction",
  },
  {
    name: "Payouts",
    icon: "fas fa-wallet ",
    path: "under-construction",
  },
  {
    name: "Settings",
    icon: "fas fa-cog ",
    path: "under-construction",
  },
];

function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const sideBarItemClick = (e, index) => {
    setSelectedIndex(index);
    navigate(`/dashboard/${e.path}`);
  };

  const sideBarItems = () => {
    return sideBarLinks.map((e, index) => (
      <div key={index}>
        <SideBarItem
          index={index}
          selectedIndex={selectedIndex}
          onClick={() => sideBarItemClick(e, index)}
        >
          <Icon
            index={index}
            selectedIndex={selectedIndex}
            className={e.icon}
          ></Icon>
          {e.name}
        </SideBarItem>
      </div>
    ));
  };

  return (
    <SidebarDiv>
      <Header
        onClick={() => {
          navigate("/dashboard/main");
        }}
      >
        <LogoImage src={logo} alt="" />
        <LogoName>
          FOOBAR<Subtitle>Dashboard</Subtitle>
        </LogoName>
      </Header>
      <SideBarItems>{sideBarItems()}</SideBarItems>
    </SidebarDiv>
  );
}

export default Sidebar;
