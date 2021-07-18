import React from "react";
import { HeaderContainer } from "./styled.js";

import Ticket from "../../assets/images/ticket.png";

export default function Header(props) {
  return (
    <HeaderContainer descriptionOnTop={props.descriptionOnTop}>
      <div className="header">
        <div className="logo">
          <img src={Ticket} alt="Ticket" />
        </div>
        <div className="title">CineMonk</div>
      </div>
      <div className="description">{props.description}</div>
    </HeaderContainer>
  );
}
