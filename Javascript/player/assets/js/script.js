var progressBar = document.querySelector(".progress-bar");

var progress = progressBar.querySelector(".progress");

var progressDot = progressBar.querySelector("span");

var progressBarWidth = progressBar.clientWidth;

var isDrag = false;
var initialClientX = 0;
var initalRate = 0;
var rate = 0;

var handleChange = function (value) {
    console.log(value);
};

progressBar.addEventListener("mousedown", function (e) {
    //   console.log(e.offsetX, progressBarWidth);
    //Tính tỷ lệ phần trăm giữa vị trí click với chiều rộng
    rate = (e.offsetX * 100) / progressBarWidth;

    //Update CSS vào progress
    progress.style.width = `${rate}%`;

    initalRate = rate;

    isDrag = true;

    initialClientX = e.clientX;

    //   console.log("progress bar");

    handleChange(rate);
});

progressDot.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    isDrag = true;
    initialClientX = e.clientX;
    //   console.log(initalRate);
    //   console.log("progress dot");
});

document.addEventListener("mousemove", function (e) {
    if (isDrag) {
        var space = e.clientX - initialClientX;
        // console.log(space);
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
});


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

audio.addEventListener("loadeddata", function () {
    //   console.log(audio.duration);
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
});

audio.addEventListener("timeupdate", function () {
    //   console.log("đang chạy: ", this.currentTime);
    currentTimeEl.innerText = getTime(this.currentTime);

    //Tính tỷ lệ phần trăm
    var rate = (this.currentTime / this.duration) * 100;

    //Update vào timer
    progress.style.width = `${rate}%`;
});