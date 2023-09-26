class F8 {
    static component(tagName, options) {
        customElements.define(tagName, class extends HTMLElement {
            constructor() {
                super();
                this.options = options;
                this.count = 0;
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
                const buttons = shadow.querySelectorAll('button');
                buttons.forEach((button) => {
                    const vOnClick = button.getAttribute('v-on:click');
                    if (vOnClick === "count++") {
                        button.onclick = () => this.updateCountDisplay(1);
                    } else if (vOnClick === "count--") {
                        button.onclick = () => this.updateCountDisplay(-1);
                    }

                    const vOndblclick = button.getAttribute('v-on:dblclick');
                    if (vOndblclick === "title='Hello'") {
                        button.onclick = () => this.updateTitle('Hello');
                    }
                });
                if (results) {
                    // results.forEach((result) => {
                    // const variableResult = result.match(/{{(.+?)}}/);
                    // const variable = variableResult[1].trim();
                    if (tagName === "counter-app") {
                        var h1 = shadow.querySelector("h1");
                        var h2 = shadow.querySelector("h2");
                        h1.textContent = this.options.data().title;
                        h2.textContent = `Đã đếm ${this.count} lần`;
                    }
                    // });
                }
            }

            updateTitle(text) {
                var h1 = this.shadowRoot.querySelector("h1");
                h1.textContent = text;
            }

            updateCountDisplay(i) {
                var h2 = this.shadowRoot.querySelector("h2");
                this.count += i;
                console.log(this.count);
                h2.textContent = `Đã đếm ${this.count} lần`;
            }


        });
    }
}

