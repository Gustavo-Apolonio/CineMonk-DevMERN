const pad = (value, length) => value.toString().padStart(2, "0");

const toISOBRString = function (date) {
  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    "." +
    (date.getMilliseconds() / 1000).toFixed(3) +
    "Z"
  );
};

const toResponse = (datas) => {
  let newDatas = [];
  let diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  let meses = [
    "JANEIRO",
    "FEVEREIRO",
    "MARÇO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO",
  ];
  datas.forEach((date) => {
    let data = new Date(date.data);
    let diaSemana = diasSemana[data.getDay()];
    let dia = data.getDate();
    let mes = meses[data.getMonth()];

    let newData = {
      diaSemana,
      dia,
      mes,
    };

    newDatas.push(newData);
  });

  newDatas[0].diaSemana = "HOJE";

  return newDatas;
};

export { toISOBRString, toResponse };
