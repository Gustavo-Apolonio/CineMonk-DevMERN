import { Router } from "express";
const Roteador = Router();

import SessoesService from "../service/sessoesService.js";
import { toISOBR } from "../Utils/dataUtils.js";
const service = new SessoesService();

Roteador.get("/datas", async (req, resp) => {
  try {
    let data = toISOBR(new Date());

    const datas = await service.listarDatas(data);

    if (datas.count <= 0) resp.status(404).send({ error: "datasNfError" });

    resp.send(datas);
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
