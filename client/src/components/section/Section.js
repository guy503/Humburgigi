import styled from "styled-components";
import background from "../../resorces/background.svg";

import blueStripes from "../../resorces/blue-stripes.svg";
import orangeStripes from "../../resorces/orange-stripes.svg";
import purpleStripes from "../../resorces/purple-stripes.svg";

const SectionContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: ${({ isCol }) => (isCol ? "collumn" : "row")};
  width: 100vw;
  padding: 2%;

  height: ${({ height }) => height || "100vh"};
  background-image: ${({ color }) => {
    switch (color) {
      case "blue":
        return `url(${blueStripes});`;

      case "orange":
        return `url(${orangeStripes}); `;

      case "purple":
        return `url(${purpleStripes}); `;
      default:
        break;
    }
  }};
`;

const CardSectionContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2em;

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

  .scroll {
    overflow-y: scroll;
  }

  @media (max-width: 765px) {
    display: block;
    height: auto;
    padding: 2em;
  }

  @media (max-width: 765px) {
    display: block;
    height: auto;
    padding: 2em;
  }
`;

export const CardSection = ({ children, color }) => {
  return <CardSectionContainer color={color}>{children}</CardSectionContainer>;
};

export const Section = ({ children, height, color }) => {
  return (
    <SectionContainer height={height} color={color}>
      {children}
    </SectionContainer>
  );
};
