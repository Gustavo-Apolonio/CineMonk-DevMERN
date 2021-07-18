import React, { useEffect, useState } from "react";

import PageContainer from "../../components/page";
import Box from "./dateBox";
import { Content } from "./style";

import API_Sessoes from "../../services/sessoes";
import API_Aux from "../../services/aux";

const api = new API_Sessoes();
const error = new API_Aux();

export default function Datas(props) {
  const [datas, setDatas] = useState([
    { diaSemana: "", dia: 0, mes: "" },
    { diaSemana: "", dia: 0, mes: "" },
    { diaSemana: "", dia: 0, mes: "" },
    { diaSemana: "", dia: 0, mes: "" },
    { diaSemana: "", dia: 0, mes: "" },
    { diaSemana: "", dia: 0, mes: "" },
    { diaSemana: "", dia: 0, mes: "" },
  ]);

  useEffect(() => {
    async function carregarDatas() {
      try {
        const resp = await api.datas();

        setDatas(resp);
      } catch (e) {
        error.handler(e);
      }
    }

    carregarDatas();
  }, []);

  return (
    <PageContainer
      descriptionOnTop={false}
      description="Escolha a data que você deseja comprar o ingresso."
    >
      <Content>
        <Box
          size="big"
          weekDay={datas[0].diaSemana}
          day={datas[0].dia}
          month={datas[0].mes}
        />

        <div className="weekDates">
          {datas
            .filter((data, index) => index > 0)
            .map((data) => (
              <Box
                size="small"
                weekDay={data.diaSemana}
                day={data.dia}
                month={data.mes}
              />
            ))}
        </div>
      </Content>
    </PageContainer>
  );
}
