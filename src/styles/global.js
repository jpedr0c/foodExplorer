import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  :root {
    font-size: clamp(40%, 1% + 2vw, 62.5%);
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_500};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.3s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.8);
  }

  *::-webkit-scrollbar {
    width: .5rem;
  }

  *::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.CAKE_100};
    border-radius: 8px;
  }
`;