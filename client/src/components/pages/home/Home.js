import react from "react";
import uuid from "uuid";
import styled from "styled-components";
import burger from "../../../resorces/burger.svg";
import israel from "../../../resorces/white-israel-map.svg";
import background from "../../../resorces/background.svg";

import { Controller, Scene } from "react-scrollmagic";

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

const Section = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100vw;
  height: 120vh;
  padding: 5em;
  direction: rtl;
  grid-gap: 2em;
  background-image: url(${background});

  ${({ section }) =>
    section !== 0
      ? "background-color: var(--secondary-color);"
      : "background-color: var(--complementary-second-color);"}

  :nth-child( even ) .card {
    background-color: var(--secondary-color);
    box-shadow: 20px 40px var(--thirdly-color);
    border: 4px var(--thirdly-color) solid;
  }

  :nth-child(odd) .card {
    background-color: var(--complementary-second-color);
    box-shadow: 20px 40px var(--complementary-color);
    border: 2px var(--complementary-color) solid;
  }

  h2 {
    color: var(--thirdly-color);
    text-align: center;
    padding: 0.5em;
  }

  span {
    height: 2px;
    margin: 0 auto;
    display: block;
    width: 50%;
    background: black;
  }

  .card {
    width: 80%;
    max-height: calc(100vh - 200px);
    background: white;
    margin: 0 auto;
    border-radius: 30px;
  }

  .About {
    p {
      padding: 2em;
      overflow-y: scroll;
      max-height: 80%;
    }
  }

  .Top {
    ol {
      padding: 2em;
      text-align: center;

      li {
        font-size: 2em;
      }
    }
  }

  .Map {
    grid-row: 1/3;
    height: 100%;
    width: 100%;

    img {
      display: block;
      height: 80%;
      width: auto;
      object-fit: contain;
    }
  }
  .News {
    grid-column: 2;
  }
`;

const Home = () => {
  return (
    <Container>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <Scene pin>
          <div className="scene">
            <img src={burger} alt="" />
          </div>
        </Scene>
        <Scene pin>
          <Section section={0}>
            <About />
            <Top5 />
          </Section>
        </Scene>
        <Scene pin>
          <Section section={1}>
            <Map></Map>
            <Calender></Calender>
            <News></News>
          </Section>
        </Scene>
      </Controller>
    </Container>
  );
};

///////// support ///////////

const About = () => {
  return (
    <div className="About card hr">
      <h2>עליי</h2>
      <span />
      <p>
        וואלה כן אח שלי Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer lacinia, justo ac interdum ultricies, nunc ipsum volutpat nulla,
        vehicula blandit diam metus at purus. Etiam id metus elit. Sed id justo
        est. Etiam pulvinar erat sit amet urna viverra semper et ut nibh. Fusce
        pulvinar nibh nunc, ac efficitur eros ullamcorper eu. Quisque aliquet,
        libero a porta dictum, massa eros fermentum odio, ac hendrerit lorem
        felis in arcu. Morbi sit amet felis erat. Quisque a feugiat turpis.
        Quisque ornare vehicula bibendum. Morbi nec sollicitudin ipsum.
      </p>
    </div>
  );
};

const Top5 = () => {
  return (
    <div className="Top card eng">
      <h2>Top 5</h2>
      <span />
      <ol>
        <li>susu</li>
        <li>garage</li>
        <li>hamburgigi</li>
        <li>what</li>
        <li>yup</li>
      </ol>
    </div>
  );
};

const Calender = () => {
  return (
    <div className="Calender card hr">
      <h2>לוח שנה</h2>
    </div>
  );
};

const News = () => {
  return (
    <div className="News card hr">
      <h2>חדשות</h2>
    </div>
  );
};

const Map = () => {
  return (
    <div className="Map card">
      <h2>Map</h2>
      <span />
      <img src={israel} alt="map" />
    </div>
  );
};

export default Home;
