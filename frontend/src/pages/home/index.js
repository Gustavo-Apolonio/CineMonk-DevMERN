import React from "react";

import PageContainer from "../../components/page";
import { Content } from "./style.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PageContainer descriptionOnTop={true} description="O que você quer fazer?">
      <Content>
        <div className="comprarIngresso">
          <Link to="/datas">COMPRAR INGRESSO</Link>
        </div>
      </Content>
    </PageContainer>
  );
}
