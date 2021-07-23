import {LitElement, html} from 'lit-element';
import { InputPasswordAdapter } from '../Adapters/InputPasswordAdapter.js';
import { EventEmitter } from '../EventEmitter/EventEmitter.js';
import { InputHandler } from '../Handler/InputHandler.js';

export class InputComponent extends LitElement {

    static get properties() {
        return {
            type: {
                type: String
            },
            className: {
                type: String
            },
            placeholder: {
                type: String
            },
            label: {
                type: String
            },
            name: {
                type: String
            },
            inputMessage: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.type = "password";
        this._inputHandler = new InputHandler();
        this.inputMessage = "";
        this.setInputAdapter();
        this._eventEmitter = new EventEmitter();
        this._eventEmitter.on('Form:validateForm', () => {
            this.validate();
        });
    }

    launchValidation() {
        window.EM.on('Form:validateForm', () => {
            this.validate();
        });
    }
    

    setInputAdapter() {
        this._inputAdapter = new InputPasswordAdapter(this._inputHandler);
    }

    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.setInputAdapter();
    }

    validate() {
        const value = document.querySelector(`.${this.className}`)
            .shadowRoot.querySelector(`.${this.className}`).value;
        this.inputMessage = this._inputAdapter.setValue(value).validate();
    }

    render() {
        return html`
            <div class="inputElement">
                <label class="inputElement__label" @click="${this.validate}">${this.label}</label>
                <input type="${this.type}" class="inputElement__input ${this.className}"
                    placeholder="${this.placeholder}" name="${this.name}" />
                <br>
                ${this.inputMessage}
            </div>
        `;
    }
}

customElements.define('input-component', InputComponent);