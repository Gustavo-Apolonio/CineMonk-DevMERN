import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.descriptionOnTop ? "column" : "row")};
  align-items: center;

  width: 100%;
  margin-bottom: 3em;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logo img {
    width: 90px;
    height: auto;

    margin: 0em 1.5em 0em 0em;
  }

  .title {
    font: bold 3.5em SeoulHangang;
    color: #f0a124;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  }

  .description {
    font-size: ${(props) => (props.descriptionOnTop ? "2.8em" : "2.6em")};
    font-family: ShareTech;
    color: #e1e1e1;
    text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);

    margin: ${(props) =>
      props.descriptionOnTop ? "0.4em 0em 0em 1em" : "0em 0em 0em 0m"};
  }
`;
