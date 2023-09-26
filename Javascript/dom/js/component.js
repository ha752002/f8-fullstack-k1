// create components name is : image (show image)
/**
 * have atributes
 * link
 * with
 * height
 * style
 */

// var ImageTag = function () {
//     return Reflect.construct(HTMLElement, [], this.constructor);
// }

// ImageTag.prototype = Object.create(HTMLElement.prototype);

// ImageTag.prototype.constructor = ImageTag;
// console.log(ImageTag.prototype);
// ImageTag.prototype.connectedCallback = function () {

// }



var Component = {
    //trong function có name(thẻ html), và callback
    create: function (name, handle) {
        var componentFunc = function () {
            return Reflect.construct(HTMLElement, [], this.constructor);

        }

        componentFunc.prototype = Object.create(HTMLElement.prototype);

        //Taọ constructor 
        componentFunc.prototype.constructor = componentFunc;
        componentFunc.prototype.connectedCallback = handle;


        //b3 dky component
        customElements.define(name, componentFunc);
    }
}

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

F8.component("counter-app", {
    template: `
        <h1>Counter App</h1>
        <h2>Đã đếm: <span class="count">0</span> lần</h2>
        <button data-action="decrement">-</button>
        <button data-action="increment">+</button>
    `,
    methods: {
        increment() {
            const countElement = this.shadowRoot.querySelector('.count');
            countElement.textContent = parseInt(countElement.textContent) + 1;
        },
        decrement() {
            const countElement = this.shadowRoot.querySelector('.count');
            countElement.textContent = parseInt(countElement.textContent) - 1;
        },
    },
});

F8.component("header-component", {
    template: `<h1>HEADER</h1>`,
});
