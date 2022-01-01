import React from "react";
import { Container, ComingSoonImage, ComingSoonText } from "./styles";
import SiteImage from "../../assets/site.svg";

function WebsiteUnderConstruction() {
  return (
    <Container>
      <ComingSoonImage src={SiteImage} alt="" />
      <ComingSoonText>Site under construction</ComingSoonText>
    </Container>
  );
}

export default WebsiteUnderConstruction;
