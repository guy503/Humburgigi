import styled from "styled-components";
import background from "../../resorces/background.svg";
import blueStripes from "../../resorces/blue-stripes.svg";
import orangeStripes from "../../resorces/orange-stripes.svg";

const SectionContainer = styled.article`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const CardSectionContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 2%;
  grid-gap: 2em;

  ${({ color }) => {
    switch (color) {
      case "blue":
        return `background-image: url(${blueStripes});`;

      case "orange":
        return `background-image: url(${orangeStripes}); `;
      default:
        break;
    }
  }}

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

export const Section = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>;
};
