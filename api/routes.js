import cors from "cors";

import SessoesController from "./controller/sessoesController.js";

export default function setarRotas(express, server) {
  server.use(cors());
  server.use(express.json());
  server.use("/sessoes", SessoesController);
}
