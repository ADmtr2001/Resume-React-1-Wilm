import styled from "styled-components";

import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.button`
  font-size: 2.5rem;

  width: 40px;
  height: 40px;

  background-color: transparent;

  border: 2px solid white;
  border-radius: 50%;
  outline: none;

  ${setFlex({justify: 'center', align: 'center'})};

  cursor: pointer;

  transition: all linear .2s;

  :hover {
    background-color: white;
    color: ${(props) => props.theme.backgroundUIColor};
  }
`;