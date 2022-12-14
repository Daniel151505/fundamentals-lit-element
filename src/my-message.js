import { LitElement, html } from 'lit-element';

export class MyMessage extends LitElement {

    static get properties() {
        return {
            msg: {
                type: String
            },
            color: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.color = '#ffc';
    }

    render() {
        return html`
        <style>
        p{
            background-color: ${this.color} ;
            padding: 15px;
            border-radius: 10px;
        }

        </style>
            <p style="background-color: ${this.color};"> ${this.msg} </p>
        `;
    }
}
customElements.define('my-message', MyMessage);