import styled from "styled-components";
import { Slide } from "react-reveal";

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
import nameIcon from "../../../resorces/icons/Hamburgigi-hr.svg";

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
      <Section color='space' >
        <img src={nameIcon} alt="" style={{ zIndex: 2, width:'80%', display:'block' ,margin:'auto'}} />
        <RenderBurger />
      </Section>

      <CardSection color="blue">
        <Slide bottom>
          <About color="orange" />
          <Top5 color="orange" />
        </Slide>
      </CardSection>

      <Section color="purple">
        <Card color="orange">
          <h3>המבורגרים של השבוע או משהו</h3>
        </Card>
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
      </Section>

      <CardSection color="orange">
        <Slide bottom>
          <Map color="blue" />
          <section>
            <Calender color="blue" />
            <News color="blue" />
          </section>
        </Slide>
      </CardSection>

      {/* סקשן של איתי של מה שהוא אכל  */}
    </Container>
  );
};

export default Home;
