
// customElements.define("header-component", class extends HTMLElement {
//     constructor() {
//         super();
//     }
// });

// customElements.define("counter-app", class extends HTMLElement {
//     constructor() {
//         super();
//     }
// });


class F8 {
    static component(tagName, options) {
        customElements.define(tagName, class extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
                this.options = options;
                this.render();
            }

            render() {
                this.shadowRoot.innerHTML = this.options.template;
                this.addEventListeners();
            }

            addEventListeners() {
                const buttons = this.shadowRoot.querySelectorAll('button');
                buttons.forEach((button) => {
                    button.addEventListener('click', () => {
                        // console.log(this);
                        this.options.methods[button.getAttribute('data-action')].call(this);
                    });
                });
            }

            connectedCallback() {
                this.render();
            }
        });
    }
}

