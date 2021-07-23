
import { html, LitElement } from "lit-element";
import { EventEmitter } from "../EventEmitter/EventEmitter";

export class ButtonComponent extends LitElement {

    static get properties() {
        return {
           
        }
    }

    constructor() {
        super();
        this._eventEmitter = new EventEmitter();
        
    }

    validate() {
        this._eventEmitter.emit('Form:validateForm');
    }

    render() {
        return html`
            <button type="button" class="inputForm__button"
                @click="${this.validate}">Enviar Formulario</button>
        `;
    }

}

customElements.define('button-component', ButtonComponent);