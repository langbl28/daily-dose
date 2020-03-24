class DDHero extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <style>
        .hero-banner{
            background-color: rgba(0,0,0,0.5);
            height: 600px;
            background-image: url("${this.getAttribute("hero-image")}");
        }
        </style>
        <section class="hero-banner">
            <div class="container">
            <div class="row">
            <div class="col">
                <p>Content</p>
            </div>
            </div>
            </div>
        </section>
        
        
        </h1>

        `;
    }
}


    
window.customElements.define('dd-hero', DDHero);