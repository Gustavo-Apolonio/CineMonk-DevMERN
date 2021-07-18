import React from "react";
import { PageContainer } from "./styled.js";
import Header from "../header";

export default function Page(props) {
  return (
    <PageContainer>
      <Header
        description={props.description}
        descriptionOnTop={props.descriptionOnTop}
      />

      {props.children}
    </PageContainer>
  );
}
