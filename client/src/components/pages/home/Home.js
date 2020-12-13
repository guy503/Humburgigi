import styled from "styled-components";

import {
  About,
  Calender,
  Map,
  News,
  Top5,
  Honorable,
  Card,
} from "../../section/cards/Cards";
import { CardSection, Section } from "../../section/Section";

import RenderBurger from "../../burger3d/Burger";
import nameIcon from "../../../resorces/icons/name-large.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import burger001 from "../../../resorces/images/burger001.jpg";
import burger002 from "../../../resorces/images/burger002.jpg";
import burger003 from "../../../resorces/images/burger003.jpg";

const Container = styled.main`
  overflow: hidden;
  display: grid;

  .scene {
    height: 100vh;
    img {
      display: block;
      width: 60%;
      margin: auto;
    }
  }
`;

/*
  TODO: creat a custom react carousel :D
*/

const Home = () => {
  return (
    <Container>
      <Section>
        <img src={nameIcon} alt="" style={{ gridRow: 4 }} />
        <RenderBurger id="burger" />
      </Section>

      <CardSection color="blue">
        <About color="orange" />
        <Top5 color="orange" />
      </CardSection>

      <Section color="purple"  >
        <Card color="orange">
          <h3>המבורגרים של השבוע או משהו</h3>
        </Card>
        <Carousel dynamicHeight={true} >
          <Honorable
            name="susu"
            location="Rishon Le ztion"
            color="orange"
            scoop="Burger 1"
            image={burger001}
            alt=""
          />
          <Honorable
            name="susu"
            location="Rishon Le ztion"
            color="blue"
            scoop="Burger 2"
            image={burger002}
            alt=""
          />
          <Honorable
            name="susu"
            location="Rishon Le ztion"
            color="orange"
            scoop="Burger 3"
            image={burger003}
            alt=""
          />
        </Carousel>
      </Section>

      <CardSection color="orange">
        <Map color="blue" />
        <Calender color="blue" />
        <News color="blue" />
      </CardSection>

      {/* סקשן של איתי של מה שהוא אכל  */}
    </Container>
  );
};

export default Home;
