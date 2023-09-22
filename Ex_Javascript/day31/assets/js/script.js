document.addEventListener("DOMContentLoaded", function () {
    const counter = document.querySelector('.counter');
    const actionButton = document.querySelector('.btn');
    let timer = 30;
    let lastTimestamp = 0;
    const delay = 1000;

    function updateTimer(timestamp) {
        if (timestamp - lastTimestamp >= delay) {
            if (timer >= 0) {
                counter.textContent = timer;
                timer--;
                actionButton.disabled = true;

            } else {
                actionButton.disabled = false;
                actionButton.addEventListener("click", function () {
                    window.location.href = "https://fullstack.edu.vn";
                });
                return;
            }
            lastTimestamp = timestamp;
        }
        requestAnimationFrame(updateTimer);
    }

    requestAnimationFrame(updateTimer);
});
