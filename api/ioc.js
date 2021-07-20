import SessoesDatabase from "./database/sessoesDatabase.js";

export default function IOC(connectionString) {
  SessoesDatabase.injectDB(connectionString);
}
