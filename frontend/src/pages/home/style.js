import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-size: 3em;
  color: white;

  .comprarIngresso {
    height: 3.5em;
    width: 4em;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(183.2deg, #861b1b 12.34%, #f80000 148.35%);
    box-shadow: 8px 5px 5px 2px rgba(0, 0, 0, 0.25);
    border-radius: 54px;

    a {
      height: 100%;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      text-align: center;
      text-decoration: none;
      color: white;
      text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);

      font-size: 0.5em;
    }

    a:hover {
      color: #a1a1a1;
    }
  }
`;
