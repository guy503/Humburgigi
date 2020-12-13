import styled from "styled-components";
import { Map as StyledMap , Places} from '../../section/cards/Cards'
import { Section } from '../../section/Section'

const StyledContainer = styled.main`
`;
const Map = () => {
  return (
    <StyledContainer>
      <Section section={0}>
        <StyledMap /> 
        <Places />
      </Section>
    </StyledContainer>
  );
};

export default Map;
