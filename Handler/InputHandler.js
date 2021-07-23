export class InputHandler {

    constructor() {
        this.value = "";
        this.message = "";
        this.errorMessages = {
            101: "Error 101",
            102: "Error de formato. Introduzca de nuevo los datos",
            401: "Error 401",
            402: "Error 402",
            500: "Los datos fueron enviados correctamente"
        }
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        console.log(value)
        this.value = value;
        return this;
    }

    getMessage() {
        return this.message;
    }

    setMessage(message) {
        this.message = message;
        return this;
    }

    setErrorMessage(error, message) {
        this.errorMessages[error] = message;
        return this;
    }

    getErrorMessage(error) {
        return this.errorMessages[error];
    }

    validate() {
        return !!this.value;
    }


}