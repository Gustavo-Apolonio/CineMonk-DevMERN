import styled from "styled-components";

import Background from "../../assets/images/bg.png";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 1200px;

  background-image: url(${Background});
  background-position: bottom center;
  background-size: cover;

  padding: 3em 5em 1em 5em;
`;
