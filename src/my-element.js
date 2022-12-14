import { LitElement, html } from 'lit-element';

export class MyElement extends LitElement {

    static get properties() {
        return {
            clics: {
                type: Number
            }
        }
    }

    constructor() {
        super();
        this.clics = 10;
    }

    incrementar() {
        this.clics ++;
    }

    render() {
        return html` 
        <style>
            h2 {
                color:blue
            }
        </style>
        <h2>Hola soy un titulo</h2>
        <p>Hola! Soy un componente</p> 
        <p>Llevo ${this.clics} clics</p>
        <button @click="${this.incrementar}" >Click aqui</button>
        `;
        
    }
}
customElements.define('my-element', MyElement);