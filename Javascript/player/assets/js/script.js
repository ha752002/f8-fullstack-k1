var progressBar = document.querySelector(".progress-bar");

var progress = progressBar.querySelector(".progress");

var progressDot = progressBar.querySelector("span");

var progressBarWidth = progressBar.clientWidth;
var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationTimeEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".play-btn");

var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var getTime = function (seconds) {
    var mins = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${seconds < 10 ? "0" + seconds : seconds
        }`;
};

var isDrag = false;
var initialClientX = 0;
var initalRate = 0;
var rate = 0;
var newTime = 0;

var handleChange = function (value) {
    // console.log(value);
};

progressBar.addEventListener("mousedown", function (e) {
    rate = (e.offsetX * 100) / progressBarWidth;
    progress.style.width = `${rate}%`;
    initalRate = rate;
    isDrag = true;
    initialClientX = e.clientX;
    handleChange(rate);

    newTime = (audio.duration * rate) / 100;
    currentTimeEl.innerText = getTime(newTime);
});

progressDot.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    isDrag = true;
    initialClientX = e.clientX;
});

document.addEventListener("mousemove", function (e) {
    if (isDrag) {
        var space = e.clientX - initialClientX;
        rate = (space * 100) / progressBarWidth + initalRate;
        if (rate >= 0 && rate <= 100) {
            progress.style.width = `${rate}%`;
            handleChange(rate);
        }
    }
});

document.addEventListener("mouseup", function () {
    isDrag = false;
    initalRate = rate;
    // currentTimeEl.innerText = getTime(this.currentTime);
});





audio.addEventListener("loadeddata", function () {
    durationTimeEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        this.innerHTML = pauseIcon;
    } else {
        audio.pause();
        this.innerHTML = playIcon;
    }
    newTime = audio.currentTime;
});

audio.addEventListener("timeupdate", function () {
    currentTimeEl.innerText = getTime(this.currentTime);
    var rate = (this.currentTime / this.duration) * 100;
    progress.style.width = `${rate}%`;
    newTime = this.currentTime;

});