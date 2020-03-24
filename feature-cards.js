class DDFeature extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `

        html content

        `;
    }
}


    
window.customElements.define('dailydose-cards', DDFeature);