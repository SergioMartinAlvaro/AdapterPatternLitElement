export class InputPasswordAdapter {

    constructor(inputHandler) {
        this._inputHandler = inputHandler;
    }

    setValue(value) {
        this._inputHandler.setValue(value);
        return this;
    }

    getValue() {
        this._inputHandler.getValue();
    }

    getErrorMessage(error) {
        return this._inputHandler.getErrorMessage(error)
    }

    setErrorMessage(error, message) {
        this._inputHandler.setErrorMessage(error, message);
        return this;
    }

    validate() {
        let message;
        console.log('valido');
        const isValidated = !!~this._inputHandler.getValue().indexOf('#');
        //Simulamos respuesta del server
        if(isValidated) {
            message = 500;
        } else {
            message = 102;
        }
        return this.getErrorMessage(message);
    }

}