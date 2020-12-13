import styled from "styled-components";
import { Section ,Map as StyledMap } from '../home/Home'

const StyledContainer = styled.main`
`;
const Map = () => {
  return (
    <StyledContainer>
      <Section section={0}>
        <StyledMap /> 


      </Section>
    </StyledContainer>
  );
};

export default Map;
