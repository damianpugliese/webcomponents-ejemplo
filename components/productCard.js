const template = document.createElement('template');
template.innerHTML = `
    <style>
        .link {
            display: flex;
            flexdirection: column;
            width: 200px;
            margin-right: 20px;
            font-family: 'Arial', sans-serif;
            background: #fff;
            -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.32);
            -moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.32);
            box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.32);
            text-decoration: none;
            border-radius: 5px;
        }

        .product-card {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .imagen-container {
            display: flex;
            width: 100%;
            align-items: center;
            justiy-center: center;
            height: 200px;
            border-bottom: 1px solid #ebebeb;
        }

        .product-card img {
            width: 100%;
        }

        .precio {
            font-size: 1.5em;
            color: #000;
            margin: 0;
            padding-top: 20px;
        }

        .nombre {
            font-size: 1em;
            color: #888888;
            margin: 0;
            padding-bottom: 20px 
        }
    </style>
    <a href='#' class='link'>
        <div class='product-card'>
            <div class='imagen-container'>
                <img/>
            </div>
            <div class='product-info'>
                <p class='precio'><slot name="precio"/></p>
                <p class='nombre'><slot name="nombre"/></p>
            </div>
        </div>
    </a>
`;

class ProductCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('img').src = this.getAttribute('imagen');
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.link').addEventListener('click', (e) => {
            e.preventDefault();
            console.log('click');
        });
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('.link').removeEventListener();
    }
}

window.customElements.define('product-card', ProductCard);