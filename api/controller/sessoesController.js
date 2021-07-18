import { Router } from "express";
const Roteador = Router();

import SessoesService from "../service/sessoesService.js";
import { toISOBRString, toResponse } from "../Utils/dataUtils.js";
const service = new SessoesService();

Roteador.get("/datas", async (req, resp) => {
  try {
    // let data = toISOBRString(new Date()).substr(0, 10);
    let data = new Date().toISOString().substr(0, 10);

    const datas = await service.listarDatas(data);

    if (datas.count <= 0) resp.status(404).send({ error: "datasNfError" });

    const response = toResponse(datas);

    resp.send(response);
  } catch (e) {
    resp.status(500).send({
      error: e,
    });
  }
});

Roteador.get("/filmes/:data", async (req, resp) => {
  try {
    const filmes = await service.listarFilmes(req.params.data);

    if (filmes.count <= 0) resp.status(404).send({ error: "filmesNfError" });

    resp.send(filmes);
  } catch (e) {
    resp.status(500).send({
      error: e,
    });
  }
});

export default Roteador;
