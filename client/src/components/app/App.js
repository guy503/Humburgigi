import styled from "styled-components";
import Header from "../header/Header";
import background from "../../resorces/background.svg";
import Home from "../pages/home/Home";
import { Switch, Route } from "react-router-dom";
import Map from "../pages/Map/Map";
import SendReview from "../pages/Send-Review/SendReview";
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

      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Map} exact path="/map" />
        <Route component={SendReview} exact path="/send" />
        {/* TODO: make functional component : Home page */}
      </Switch>
    </Container>
  );
};

export default App;
