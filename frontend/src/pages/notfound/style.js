import styled from "styled-components";

import Erro from "../../assets/images/404_erro.png";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  justify-content: flex-end;

  padding: 1em;

  background-image: url(${Erro});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  a {
    text-decoration: none;
    color: #cb7230;

    font-weight: bold;
    font-size: 1.5em;
    padding: 0.5em;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover {
    color: #d15a02;
  }
`;
