import React, { useState } from "react";
import {
  SidebarDiv,
  Header,
  Subtitle,
  LogoImage,
  SideBarItems,
  SideBarItem,
  Icon,
} from "./styles";
import logo from "./Logo.png";

const sideBarLinks = [
  {
    name: "Dashboard",
    icon: "fas fa-border-all ",
  },
  {
    name: "Activity",
    icon: "fas fa-bolt ",
  },
  {
    name: "library",
    icon: "fas fa-book-reader",
  },
  {
    name: "Security",
    icon: "fas fa-shield-alt ",
  },
  {
    name: "Schedules",
    icon: "far fa-calendar ",
  },
  {
    name: "Payouts",
    icon: "fas fa-wallet ",
  },
  {
    name: "Settings",
    icon: "fas fa-cog ",
  },
];

function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sideBarItems = () => {
    return sideBarLinks.map((e, index) => (
      <SideBarItem
        index={index}
        selectedIndex={selectedIndex}
        onClick={() => setSelectedIndex(index)}
      >
        <Icon
          index={index}
          selectedIndex={selectedIndex}
          className={e.icon}
        ></Icon>
        {e.name}
      </SideBarItem>
    ));
  };

  return (
    <SidebarDiv>
      <Header>
        <LogoImage src={logo} alt="" />
        <div>
          FOOBAR<Subtitle>Dashboard</Subtitle>
        </div>
      </Header>
      <SideBarItems>{sideBarItems()}</SideBarItems>
    </SidebarDiv>
  );
}

export default Sidebar;
