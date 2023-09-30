class F8 {
    static component(tagName, options) {
        customElements.define(tagName, class extends HTMLElement {
            constructor() {
                super();
                this.options = options;
                this.attachShadow({ mode: 'open' });
                this.render();
                this.initButtonEvent();
            }

            render() {
                this.data = options.data();
                const shadow = this.shadowRoot;
                const templateEl = document.createElement('template');
                templateEl.innerHTML = this.options.template;
                const templateNode = templateEl.content.cloneNode(true);
                shadow.appendChild(templateNode);
                const html = this.options.template;
                const results = html.match(/{{.+?}}/g);
                if (results) {
                    if (tagName === "counter-app") {
                        this.updateCountDisplay();
                    }
                }
            }
            initButtonEvent() {
                const shadow = this.shadowRoot;
                const buttons = shadow.querySelectorAll('button');
                if (buttons) {
                    var vOnRegex = /v-on:\w+/g;
                    buttons.forEach((button) => {
                        var buttonAttribute = this.getAttributeByRegex(button, vOnRegex);
                        if (buttonAttribute) {
                            let buttonEvent = buttonAttribute[0].split(":")[1];
                            let buttonActivity = buttonAttribute[1];
                            button.addEventListener(buttonEvent, () => {
                                eval('this.data.' + buttonActivity);
                                this.updateCountDisplay();
                            });
                        }
                    });
                }
            }
            updateCountDisplay() {
                const shadow = this.shadowRoot;
                var h1 = shadow.querySelector("h1");
                var h2 = shadow.querySelector("h2");
                h1.textContent = this.data.title;
                h2.textContent = `${this.data.count}`;
            }

            getAttributeByRegex(htmlTag, regex) {
                const attributes = htmlTag.attributes;
                for (let i = attributes.length - 1; i >= 0; i--) {
                    const attr = attributes[i];
                    if (attr.name.match(regex)) {
                        return [attr.name, attr.value];
                    }
                    return undefined;
                }
            }

            // Add any other methods or event handling as needed.

            // connectedCallback() {
            //     this.render();
            // }
        });
    }
}