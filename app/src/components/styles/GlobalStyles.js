import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


:root {
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    }
  *{
    box-sizing: border-box;
  }
    
    body {
      margin: 0 auto;
      font-family: 'Overpass', sans-serif;
      overflow-x: hidden;
    }

    h1{
      color: ${({ theme }) => theme.colors.white};
      font-family: 'Ubuntu', sans-serif;
      font-weight: 500;
    }

    h2, h3{
      color: ${({ theme }) => theme.colors.veryDarkBlue};
    }
  
    p{
      color: ${({ theme }) => theme.colors.veryDarkBlackBlue};
      line-height: 1.5em;
      font-size: 1em;
      margin: 0;
    }

    a{
      text-decoration: none;
      color: ${({ theme }) => theme.colors.veryDarkBlackBlue};

    }

    .btn {
      border-radius: 50px;
      padding: .5em 1em;
      font-weight: 600;
    }

    .btn.primary{
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.lightRed};
      border: none;
    }

    .btn.secondary{
      background-color: ${({ theme }) => theme.colors.lightRed};
      color:${({ theme }) => theme.colors.white} ;
      border: 1px solid ${({ theme }) => theme.colors.white};

    }
    
  `;

export default GlobalStyles;
