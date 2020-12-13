import styled from "styled-components";
import { Map as StyledMap , Places} from '../../section/cards/Cards'
import { CardSection } from '../../section/Section'

const StyledContainer = styled.main`
`;
const Map = () => {
  return (
    <StyledContainer>
      <CardSection color='blue' >
        <StyledMap color='orange'/> 
      </CardSection>
      <CardSection color='blue'>
        <Places color='orange' />
      </CardSection>
    </StyledContainer>
  );
};

export default Map;
