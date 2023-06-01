import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    transition: all 0.6s ease-out;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .container-hero{
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.fifth};
    .scroll-content {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
    .scrollbar-track.scrollbar-track-y {
      background: ${({ theme }) => theme.colors.primary};
      .scrollbar-thumb-y {
        background: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
