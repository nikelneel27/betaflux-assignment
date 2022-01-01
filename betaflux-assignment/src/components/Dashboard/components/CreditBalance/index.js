import React from "react";
import {
  Container,
  MainDiv,
  TextVal,
  PText,
  Title,
  TextValSub,
  SecondaryDiv,
  SubDiv,
  Image,
  ImageDiv,
  Icon,
  IconDiv,
  ImgTextDiv,
  RecentIconDiv,
  RecentIcon,
  BillDiv,
} from "./styles";

import WaveImage from "../../../../assets/wave.svg";

function CreditBalance() {
  return (
    <Container>
      <MainDiv>
        <IconDiv>
          <Icon class="fas fa-ellipsis-h"></Icon>
        </IconDiv>

        <TextVal color="#fff">Credit Balance</TextVal>
        <Title>$25,215</Title>
        <ImageDiv>
          <Image src={WaveImage} />
        </ImageDiv>
      </MainDiv>
      <SecondaryDiv>
        <SubDiv>
          <ImgTextDiv>
            <RecentIconDiv>
              <RecentIcon
                color="#1c6cb7"
                className="far fa-building"
              ></RecentIcon>
            </RecentIconDiv>

            <BillDiv>
              <TextVal color="#1b2559">Bills & Taxes</TextVal>
              <TextValSub>Today 16:36</TextValSub>
            </BillDiv>
          </ImgTextDiv>
          <TextVal color="#1b2559">-$154.4</TextVal>
        </SubDiv>
        <SubDiv>
          <ImgTextDiv>
            <RecentIconDiv>
              <RecentIcon color="#05CD99" className="fas fa-car"></RecentIcon>
            </RecentIconDiv>
            <BillDiv>
              <TextVal color="#1b2559">Car Energy</TextVal>
              <TextValSub>Today 16:36</TextValSub>
            </BillDiv>
          </ImgTextDiv>

          <TextVal color="#1b2559">-$43.0</TextVal>
        </SubDiv>

        <SubDiv>
          <ImgTextDiv>
            <RecentIconDiv>
              <RecentIcon
                color="#FFCE20"
                className="fas fa-graduation-cap"
              ></RecentIcon>
            </RecentIconDiv>

            <BillDiv>
              <TextVal color="#1b2559">Design Course</TextVal>
              <TextValSub>Today 16:36</TextValSub>
            </BillDiv>
          </ImgTextDiv>

          <TextVal color="#1b2559">-$70.0</TextVal>
        </SubDiv>
      </SecondaryDiv>
    </Container>
  );
}

export default CreditBalance;
