import express from "express";
import MongoDB from "mongodb";
import IOC from "./ioc.js";
import setarRotas from "./routes.js";

function iniciarAPI(connectionString) {
  IOC(connectionString);

  const server = express();

  setarRotas(express, server);

  const port = process.env.PORT | 8080;
  server.listen(port, () =>
    console.log(`...$ API rodando na porta http://0.0.0.0:${port}/`)
  );
}

function pararAPI(e) {
  console.log({
    error: e,
  });
  process.exit(-1);
}

const Mongo = MongoDB.MongoClient;
Mongo.connect("mongodb+srv://devmonkdb:d3vm0nk@cluster0.jghqd.mongodb.net", {
  useUnifiedTopology: true,
})
  .then(iniciarAPI)
  .catch(pararAPI);
