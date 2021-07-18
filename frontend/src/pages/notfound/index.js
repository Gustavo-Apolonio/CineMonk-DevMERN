import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

export default function NotFound(props) {
  return (
    <Container>
      <Link to="/">Voltar</Link>
    </Container>
  );
}
