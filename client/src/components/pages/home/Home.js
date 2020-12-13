import styled from "styled-components";

import { About, Calender, Map, News, Top5 } from "../../section/cards/Cards";
import { Section } from "../../section/Section";

import RenderBurger from "../../burger3d/Burger";
import nameIcon from "../../../resorces/icons/name-large.svg";

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

/////// article section style ///////////

/////////// component /////////////

const Home = () => {
  return (
    <Container>
      <Section>
        <img src={nameIcon} alt="" style={{ gridRow: 4 }} />
        <RenderBurger id="burger" />
      </Section>

      <Section section={0}>
        <About />
        <Top5 />
      </Section>

      <Section section={1}>
        <Map></Map>
        <Calender></Calender>
        <News></News>
      </Section>

      {/* סקשן של איתי של מה שהוא אכל  */}
    </Container>
  );
};

///////// support ///////////

export default Home;
