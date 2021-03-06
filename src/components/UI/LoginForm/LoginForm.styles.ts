import styled from "styled-components";

import {setFlex} from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled.div`
  width: 60rem;
  height: 45rem;

  font-size: 2.5rem;

  background-color: ${(props) => props.theme.backgroundUIColor};

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
      color: ${(props) => props.theme.backgroundUIColor};
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
    
    .auth-error-container {
      font-size: 1.5rem;
      text-align: center;
      color: red;
    }

    button {
      margin: 1rem auto 0;
    }
  }

  .additional-container {
    margin-top: 1.5rem;

    font-size: 4rem;
  }
  
  @media (max-width: 610px) {
    width: 50rem;
    height: 45rem;
  }

  @media (max-width: 610px) {
    width:40rem;
    height: 50rem;

    .buttons-container { 
      flex-direction: column;
    }
  }

  @media (max-width: 410px) {
    width:30rem;
    height: 50rem;

    .buttons-container {
      flex-direction: column;
    }
    
    form {
      input {
        width: 28rem;
      }
    }
  }
`;