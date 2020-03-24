class DDFeature extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `

        <h1>${this.getAttribute("feature-header")}</h1>

        `;
    }
}


    
window.customElements.define('dd-feature', DDFeature);