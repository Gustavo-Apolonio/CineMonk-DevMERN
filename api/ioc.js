import SessoesDatabase from "./database/sessoesDatabase.js";

export default function IOC(conn) {
  SessoesDatabase.injectDB(conn);
}
