F8.component("counter-app", {
    // data: () => ({
    //     title: "Counter App",
    // }),

    template: `
        <h1>Counter App</h1>
        <h2>Đã đếm: <span class="count">0</span> lần</h2>
        <button data-action="decrement">-</button>
        <button data-action="increment">+</button>
        <button v-on:dblclick="title='Hello'">Change Title</button>
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

