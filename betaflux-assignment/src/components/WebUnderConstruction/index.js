import React from "react";
import { Container, ComingSoonImage, ComingSoonText } from "./styles";
import SiteImage from "../../assets/SiteUnderCon.svg";

function WebsiteUnderConstruction() {
  return (
    <Container>
      <ComingSoonImage src={SiteImage} alt="" />
    </Container>
  );
}

export default WebsiteUnderConstruction;
