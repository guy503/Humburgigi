import styled from "styled-components";

import { About, Calender, Map, News, Top5 } from "../../section/cards/Cards";
import { CardSection , Section } from "../../section/Section";

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

const Home = () => {
  return (
    <Container>
      <Section>
        <img src={nameIcon} alt="" style={{ gridRow: 4 }} />
        <RenderBurger id="burger" />
      </Section>

      <CardSection color='blue' >
        <About color='orange' />
        <Top5 color='orange' />
      </CardSection>

      <CardSection color='orange' >
        <Map color='blue' />
        <Calender color='blue' />
        <News color='blue' />
      </CardSection>

      {/* סקשן של איתי של מה שהוא אכל  */}
    </Container>
  );
};

export default Home;
