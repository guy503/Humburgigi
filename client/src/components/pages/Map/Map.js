import styled from "styled-components";
import burger from "../../../resorces/burger.svg";

const StyledContainer = styled.main`
  display: grid;

  img {
    display: block;
    width: 60%;
    max-height: 60vh;
    margin: auto;
  }
`;
const Map = () => {
  return (
    <StyledContainer>
      <img src={burger} alt="" />
    </StyledContainer>
  );
};

export default Map;
