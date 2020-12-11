import styled from "styled-components";
import Header from "../header/Header";
import background from '../../resorces/background.svg'
import Home from "../pages/home/Home";

const Container = styled.div`
  height: 400vh;
  background: var(--background-app);
  position: relative;
  background-image: url(${background});
  background-repeat: round;

`;

const App = () => {
  return (
    <Container className="App">
      <div style={{ height: "5rem" }} />
      <Header />
      <Home />
    </Container>
  );
};

export default App;
