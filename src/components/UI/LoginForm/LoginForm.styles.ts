import styled from "styled-components";
import {setFlex} from "../../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
  width: 60rem;
  height: 45rem;

  font-size: 2.5rem;

  background-color: #131313;

  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  ${setFlex({align: 'center', direction: 'column'})};

  .buttons-container {
    ${setFlex({})};
    gap: 1rem;
    margin: 2rem 0;
    
    .active {
      background-color: white;
      color: black;
    }
  }

  h2 {
    font-size: 3.5rem;

    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  form {
    ${setFlex({direction: 'column'})}
    gap: 1rem;

    .error-container {
      font-size: 1.5rem;
      text-align: end;
      color: red;
    }

    button {
      margin: 2rem auto 0;
    }
  }

  .additional-container {
    margin-top: 1rem;

    font-size: 4rem;

    button {
      background-color: transparent;
      border: none;
      color: white;

      :hover {
        color: red;
      }
    }
  }
`;