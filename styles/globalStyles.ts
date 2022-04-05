import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    overflow-x: hidden;
  }

  body {
    background-color: ${(p) => p.theme.pageBackground};
    color: ${(p) => p.theme.pageForeground};
    font-family: 'montserrat', normal;

    h1 {
      font-family: 'Barlow', normal;
    }

    h2 {
      font-family: 'Barlow', normal;
    }
  }

  strong {
    color: ${props => props.theme.attentionForeground};
  }

  .error {
    border-bottom: 2px solid red;
  }

  .imagemLocal {
    width: 628px;
    height: 834px;

    @media only screen and (max-width: 500px) {
      width: 338px;
      height: 271px;
    }
  }

  .logo {
    width: 144px;
    height: 70px;
  }
`;
