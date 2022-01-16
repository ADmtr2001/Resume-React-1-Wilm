import styled from "styled-components";

import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
  background-color: #131313;
  
  width: 90%;
  height: fit-content;
  
  margin-top: 4rem;
  margin-bottom: 5rem;

  ${setFlex({justify: 'center', direction: 'column'})};
  
  .container {
    ${setFlex({})};
    
    margin: 3rem 0;
  }

  p {
    line-height: 1.2;
  }
  
  .description-container {
    width: 60%;
    
    padding-left: 3rem;
    padding-right: 2.5rem;
    
    h1 {
      font-size: 5.5rem;
      font-family: 'Anton', sans-serif;
      
      margin-bottom: 2rem;
    }
    
    .short-info {
      font-size: 1.5rem;
      color: #747474;
      
      margin-bottom: 1.5rem;
    }

    .main-text {
      font-size: 2rem;

      margin-bottom: 2.5rem;
      
      button {
        background-color: transparent;
        
        border: none;

        color: #747474;
      }
    }

    .cast-text {
      font-size: 1.5rem;

      margin-bottom: 2.5rem;
    }

    .rating {
      font-size: 2rem;

      ${setFlex({justify: 'flex-start', align: 'center'})};
    }
  }
  
  .image-container {
    width: 40%;

    ${setFlex({justify: 'center', align: 'center'})};
    
    img {
      height: 40rem;
      width: 28rem;
    }
  }
  
  .buttons-container {
    ${setFlex({justify: 'center', align: 'center'})};
    
    margin-bottom: 3rem;
  }
`;