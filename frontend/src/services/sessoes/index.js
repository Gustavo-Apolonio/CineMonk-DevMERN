import axios from "axios";
import API_URL from "../constants";

const api = axios.create({
  baseURL: `${API_URL}/sessoes`,
});

export default class Sessoes {
  async datas() {
    const resp = await api.get("/datas");
    return resp.data;
  }
}
