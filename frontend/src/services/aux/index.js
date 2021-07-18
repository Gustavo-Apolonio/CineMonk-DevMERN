export default class Aux {
  acceptedTypeErrors = {
    BrError(realError) {
      const badRequestErrors = {
        data() {
          console.log("Data maior que a data atual.");
        },
      };
      const realErrorFunction = badRequestErrors[realError];
      if (typeof realErrorFunction === "function") return realErrorFunction();
      else console.log("Error not defined.");
    },
    NfError(realError) {
      const notFoundErrors = {
        datas() {
          console.log("Não há datas para hoje e além.");
        },
      };
      const realErrorFunction = notFoundErrors[realError];
      if (typeof realErrorFunction === "function") return realErrorFunction();
      else console.log("Error not defined.");
    },
    SystemError(realError) {
      const errors = {
        Network() {
          console.log(
            "Não foi possível realizar sua solicitacao, tente mais tarde."
          );
        },
      };
      const realErrorFunction = errors[realError];
      if (typeof realErrorFunction === "function") return realErrorFunction();
      else console.log("Error not defined.");
    },
  };

  formatError(e) {
    if (e.response === undefined || e.response.data.errors !== undefined) {
      const error = e.toString();

      const type = "SystemError";

      const real = error.substring(
        error.indexOf(" ") + 1,
        error.indexOf(" ", error.indexOf(" ") + 1)
      );

      return { type, real };
    } else {
      const error = e.response.data.message;

      const type = error.substr(error.indexOf("Error") - 2);

      const real = error.substring(0, error.indexOf(type));

      return { type, real };
    }
  }

  handler(e) {
    const error = this.formatError(e);

    const errorFunction = this.acceptedTypeErrors[error.type];

    errorFunction(error.real);
  }
}
