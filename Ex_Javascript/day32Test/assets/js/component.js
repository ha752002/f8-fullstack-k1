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
                const shadow = this.shadowRoot;
                const templateEl = document.createElement('template');
                templateEl.innerHTML = this.options.template;
                const templateNode = templateEl.content.cloneNode(true);
                shadow.appendChild(templateNode);
                const html = this.options.template;
                const results = html.match(/{{.+?}}/g);
                if (results) {
                    if (tagName === "counter-app") {
                        this.updateCountDisplay(this.options.data());
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
                            var data = this.options.data();
                            button.addEventListener(buttonEvent, () => {
                                eval('data.' + buttonActivity);
                                this.updateCountDisplay(data);
                            });
                        }
                    });
                }
            }
            updateCountDisplay(data) {
                const shadow = this.shadowRoot;
                var h1 = shadow.querySelector("h1");
                var h2 = shadow.querySelector("h2");
                h1.textContent = data.title;
                h2.textContent = `Đã đếm ${data.count} lần`;
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