import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-size: 3em;
  color: white;

  .weekDates {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    width: 11em;
    max-height: 50vh;
  }
`;
