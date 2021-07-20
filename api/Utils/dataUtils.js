const pad = (valor, tamanho) => valor.toString().padStart(2, "0");

const toISOBR = function (data) {
  let novaData =
    data.getFullYear() +
    "-" +
    pad(data.getMonth() + 1) +
    "-" +
    pad(data.getDate()) +
    "T" +
    pad(data.getHours()) +
    ":" +
    pad(data.getMinutes()) +
    ":" +
    pad(data.getSeconds()) +
    "." +
    (data.getMilliseconds() / 1000).toFixed(3);
  return novaData;
};

const dia = function (data) {
  let resp = new Date(toISO(data)).getDate();
  return resp;
};

const diaSemana = function (data) {
  let diaSemana = new Date(toISO(data)).getDay();
  switch (diaSemana) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda";
    case 2:
      return "Terça";
    case 3:
      return "Quarta";
    case 4:
      return "Quinta";
    case 5:
      return "Sexta";
    case 6:
      return "Sábado";
  }
};

const mes = function (data) {
  let mes = new Date(toISO(data)).getMonth();
  switch (mes) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
  }
};

const toISO = function (data) {
  return data.length === 10 ? `${data}T00:00:00` : data;
};

export { toISOBR, dia, diaSemana, mes };
