import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
  :root {
    --primary-color: #34CB79;
    --title-color: #322153;
    --text-color: #6C6C80;
    --main-bg-color: #F0F0F5;
    --placeholder-color: #a0a0b2;
    --dopzone-bg-color: #e1faec;
    --dopzone-border-color: #4ecb79;
    
    --main-font-family: 'Poppins', sans-serif;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    text-align: left;
    line-height: 1.5;
    color: var(--text-color);
    background-color: var(--main-bg-color);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  
  body, 
  input, 
  select, 
  textarea, 
  button {
    font-family: var(--main-font-family);
  }
  
  button {
    outline: 0;
  }
  
  input, 
  select, 
  textarea {
    width: 100%;
    font-size: 1rem;
    text-align: left;
    line-height: 1.5;
    outline: 0;
    transition: all .15s ease-in-out;
  }
  
  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6 {
    color: var(--title-color);
    font-family: var(--main-font-family);
  }
`;
