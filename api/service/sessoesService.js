import { dia, mes, diaSemana } from "../Utils/dataUtils.js";

import SessoesDatabase from "../database/sessoesDatabase.js";
const db = new SessoesDatabase();

export default class SessoesService {
  async listarDatas(data) {
    if (new Date(data) > new Date()) throw "dataBrError";

    let datas = await db.listarDatas(data.substr(0, 10));

    console.log(datas);

    let resp = datas.map((item) => {
      return {
        data: item.data,
        dia: dia(item.data),
        diaSemana: diaSemana(item.data),
        mes: mes(item.data),
      };
    });

    resp[0].diaSemana = "HOJE";

    return resp;
  }

  async listarFilmes(data) {
    return await db.listarFilmes(data);
  }
}
