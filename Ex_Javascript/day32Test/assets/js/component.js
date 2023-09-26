class F8 {
    static component(tagName, options) {
        customElements.define(tagName, class extends HTMLElement {
            constructor() {
                super();
                this.options = options;
                this.attachShadow({ mode: 'open' });
                this.render();
            }

            render() {
                const shadow = this.shadowRoot;
                const templateEl = document.createElement('template');
                templateEl.innerHTML = this.options.template;
                const templateNode = templateEl.content.cloneNode(true);
                shadow.appendChild(templateNode);

                const html = this.options.template;
                const results = html.match(/{{.+?}}/g);

                if (results) {
                    results.forEach((result) => {
                        const variableResult = result.match(/{{(.+?)}}/);
                        const variable = variableResult[1].trim();
                        if (tagName === "counter-app") {
                            var h1 = shadow.querySelector("h1");
                            var h2 = shadow.querySelector("h2");
                            h1.textContent = this.options.data().title;
                            h2.textContent = `Đã đếm ${this.options.data().count} lần`;

                            const buttons = shadow.querySelectorAll('button');
                            buttons.forEach((button) => {
                                const vOnClick = button.getAttribute('v-on:click');
                            });

                        }
                    });
                }
            }

            updateCountDisplay() {
                var h2 = this.shadowRoot.querySelector("h2");
                h2.textContent = `Đã đếm ${this.options.data().count} lần`;
            }

            // Add any other methods or event handling as needed.

            // connectedCallback() {
            //     this.render();
            // }
        });
    }
}

