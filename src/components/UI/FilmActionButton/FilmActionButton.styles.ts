import styled from "styled-components";

import {setFlex} from "../../../styles/mixins/mixins.styles";

interface WrapperProps {
  width?: string;
}

export const Wrapper = styled.button<WrapperProps>`
  width: ${(props) => props.width ? props.width : '4.5rem'};
  height: 4.5rem;
  
  ${setFlex({justify: 'center', align: 'center'})};
  
  font-size: 3.5rem;
  
  background-color: transparent;
  
  border: 0.2rem solid white;
  
  transition: all linear 0.25s;
  
  &.active {
    background-color: ${(props) => props.theme.primaryFontColor};
    color: ${(props) => props.theme.backgroundUIColor};
  }
  
  @media (min-width: 1000px) {
    :hover {
      background-color: ${(props) => props.theme.primaryFontColor};
      color: ${(props) => props.theme.backgroundUIColor};
    }
  }
`;