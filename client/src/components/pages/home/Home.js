import styled from "styled-components";
import burger from "../../../resorces/burger.svg";

const Container = styled.main`
  display: grid;

  img {
    display: block;
    width: 60%;
    max-height: 60vh;
    margin:auto;
  }
`;
const Home = () => {
  return (
    <Container>
      <img src={burger} alt="" />
    </Container>
  );
};

export default Home;
