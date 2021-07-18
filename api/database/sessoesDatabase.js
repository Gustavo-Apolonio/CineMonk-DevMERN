let db;

export default class SessoesDatabase {
  static injectDB(conn) {
    db = conn.db("ingressos").collection("sessoes");
  }

  async listarDatas(data) {
    return await db
      .aggregate([
        { $match: { data: { $gte: data } } },
        { $project: { data: 1, _id: 0 } },
        { $group: { _id: "$data" } },
        { $project: { data: "$_id", _id: 0 } },
        { $sort: { data: 1 } },
        { $limit: 7 },
      ])
      .toArray();
  }

  async listarFilmes(data) {
    return await db
      .find({
        data: data,
      })
      .project({
        _id: 0,
        filme: 1,
      })
      .sort({
        "filme.nome": 1,
      })
      .toArray();
  }
}
