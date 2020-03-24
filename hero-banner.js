class DDHero extends HTMLElement {
constructor() {
super();
}

connectedCallback() {
this.innerHTML = `
<style>
    .hero-banner {
        background-color: rgba(0, 0, 0, 0.5);
        background-position: center center;
        background-size: cover;
        background-image: url("${this.getAttribute("hero-image")}");
    }

    .hero-banner:after {
        background: rgba(5, 32, 22, 0.25);
    }

    .hero-banner p {
        padding-bottom: 20rem;
        padding-top: 8.125rem;
    }
    .hero-banner .hero-callout{
        background-color: #fff;
        color: #fff;
    }
</style>
<section class="hero-banner">
    <div class="container">
        <div class="row">
            <div class="col-3 hero-callout">
                <h1>Be Apart of Your Kenosha Community</h1>
                <p>Stop in to the Daily Dose to see friendly faces </p>
                <p>CTA button</p>
            </div>
        </div>
    </div>
</section>


</h1>

`;
}
}



window.customElements.define('dd-hero', DDHero);