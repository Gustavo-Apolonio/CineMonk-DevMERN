import React from "react";
import styled from "styled-components";

const ContainerBig = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 0.5em 1em;

  background: #c60a0a;
  box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
  border-radius: 16px;

  margin: 0.3em;

  & div {
    margin: 0.1em 0em;
  }

  .week {
    font: bold 0.7em SpaceMono;
  }

  .day {
    font: 800 1em Spartan;
  }

  .month {
    font: bold 0.7em SpaceMono;
  }
`;

const ContainerSmall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 0.3em 0em;
  width: 3em;

  background: #aa0a0a;
  box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
  border-radius: 16px;

  margin: 0.3em;

  & div {
    margin: 0.1em 0em;
  }

  .week {
    font: bold 0.4em SpaceMono;
  }

  .day {
    font: 800 0.6em Spartan;
  }

  .month {
    font: bold 0.4em SpaceMono;
  }
`;

export default function Box(props) {
  const Container = props.size === "big" ? ContainerBig : ContainerSmall;

  const week =
    props.weekDay === undefined || props.weekDay === "" ? "-" : props.weekDay;
  const day = props.day === undefined || props.day === 0 ? "-" : props.day;
  const month =
    props.month === undefined || props.month === "" ? "-" : props.month;

  return (
    <Container>
      <div className="week"> {week} </div>
      <div className="day"> {day} </div>
      <div className="month"> {month} </div>
    </Container>
  );
}
