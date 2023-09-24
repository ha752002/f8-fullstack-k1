document.addEventListener("DOMContentLoaded", function () {
    class CountdownTimer extends HTMLElement {
        constructor() {
            super();
            this.duration = parseInt(this.getAttribute('duration')) || 30;
            this.attachShadow({ mode: 'open' });
            this.render();
            this.lastTimestamp = 0;
            this.delay = 1000;
            this.isCounting = true;
            this.updateTimer();
        }

        render() {
            this.shadowRoot.innerHTML = `
                <style>
                    .counter {
                        font-size: 24px;
                        padding: 10px;
                        background: green;
                        border-radius: 99px;
                        margin: 10px 0;
                    }
                </style>
                <div class="counter">${this.duration}</div>
            `;
        }

        updateTimer() {
            const counterElement = this.shadowRoot.querySelector('.counter');
            const timestamp = performance.now();

            if (timestamp - this.lastTimestamp >= this.delay && this.isCounting) {
                if (this.duration >= 0) {
                    counterElement.textContent = this.duration;
                    this.duration--;
                    const actionButton = document.querySelector('.btn');
                    if (actionButton) {
                        actionButton.disabled = true;
                    }

                } else {
                    this.isCounting = false;
                    const actionButton = document.querySelector('.btn');
                    if (actionButton) {
                        actionButton.disabled = false;
                        actionButton.addEventListener("click", function () {
                            window.location.href = "https://fullstack.edu.vn";
                        });
                    }
                }
                this.lastTimestamp = timestamp;
            }

            if (this.isCounting) {
                requestAnimationFrame(() => this.updateTimer());
            }
        }
    }

    customElements.define('countdown-timer', CountdownTimer);
});


// document.addEventListener("DOMContentLoaded", function () {
//     const counter = document.querySelector('.counter');
//     const actionButton = document.querySelector('.btn');
//     let timer = 30;
//     let lastTimestamp = 0;
//     const delay = 1000;

//     function updateTimer(timestamp) {
//         if (timestamp - lastTimestamp >= delay) {
//             if (timer >= 0) {
//                 counter.textContent = timer;
//                 timer--;
//                 actionButton.disabled = true;

//             } else {
//                 actionButton.disabled = false;
//                 actionButton.addEventListener("click", function () {
//                     window.location.href = "https://fullstack.edu.vn";
//                 });
//                 return;
//             }
//             lastTimestamp = timestamp;
//         }
//         requestAnimationFrame(updateTimer);
//     }

//     requestAnimationFrame(updateTimer);
// });
