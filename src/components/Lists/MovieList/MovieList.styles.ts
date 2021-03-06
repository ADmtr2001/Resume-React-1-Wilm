import styled from "styled-components";

import {setFlex} from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled.div`
  ${setFlex({justify: 'center'})};
  gap: 2rem;
  flex-wrap: wrap;
  
  margin: 0 1rem;
  
  width: fit-content;
`;