class DDHero extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <style>
        .hero-banner{
            background-color: rgba(0,0,0,0.5);
            background-position: center center;
            background-size: cover; 
            background-image: url("${this.getAttribute("hero-image")}");
        }
        .hero-banner p{
            padding-bottom: 20rem;
            padding-top: 8.125rem;
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