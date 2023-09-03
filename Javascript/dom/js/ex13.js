const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = "PLAYER";
const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const button = $(".btn");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
const volumeBar = $(".volume-bar");
const muteIcon = $(".icon-mute");
const unmuteIcon = $(".icon-unmute");
const audioDuration = $(".time-right");
const audioTimeLeft = $(".time-left");
const rangeValue = $(".range");
const cdProgressFull = $(".cd .circle .mask.full");
const cdProgressFill = $$(".cd .circle .mask .fill");
const timer = $(".timer");
const durationBar = $(".duration-bar");
var r = $(":root");
let isDragging = false;

const initialConfig = {
    isRandom: false,
    isRepeat: false,
    currentIndex: 0,
    isPlaying: false,
    currentVolume: 1,
    savedVolume: 1,
    progressSong: 0,
};
const storedConfig = JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY));

const app = {
    isMove: false,
    isRandom: false,
    isRepeat: false,
    currentIndex: 0,
    isPlaying: false,
    playedIndexes: [],
    currentVolume: 1,
    savedVolume: 1,
    progressSong: 0,
    config: storedConfig || initialConfig,
    setConfig: function (key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    songs: [
        {
            name: "Không Thể Say",
            singer: "HIEUTHUHAI",
            path: "./assets/music/song1.mp3",
            image: "./assets/img/song1.jpg",
        },
        {
            name: "Để tôi ôm em bằng giai điệu này",
            singer: "Kai Dinh, MIN, GREY D",
            path: "./assets/music/song2.mp3",
            image: "./assets/img/song2.jpg",
        },
        {
            name: "Nếu Lúc Đó",
            singer: "tlinh, 2pillz",
            path: "./assets/music/song3.mp3",
            image: "./assets/img/song3.jpg",
        },
        {
            name: "Waiting For You",
            singer: "Mono",
            path: "./assets/music/song4.mp3",
            image: "./assets/img/song4.jpg",
        },
        {
            name: "Lan Man",
            singer: "Ronboogz",
            path: "./assets/music/song5.mp3",
            image: "./assets/img/song5.jpg",
        },
        {
            name: "Ngủ Một Mình (tình Rất Tình)",
            singer: "HIEUTHUHAI, Negav, Kewtiie",
            path: "./assets/music/song6.mp3",
            image: "./assets/img/song6.jpg",
        },
        {
            name: "Ai Mới Là Kẻ Xấu Xa",
            singer: "MCK",
            path: "./assets/music/song7.mp3",
            image: "./assets/img/song7.jpg",
        },
        {
            name: "Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau",
            singer: "O.lew",
            path: "./assets/music/song8.mp3",
            image: "./assets/img/song8.jpg",
        },
        {
            name: "Chuyện Chúng Ta Sau Này",
            singer: "Hải Đăng Doo, ERIK",
            path: "./assets/music/song9.mp3",
            image: "./assets/img/song9.jpg",
        },
        {
            name: "Dự Báo Thời Tiết Hôm Nay Mưa",
            singer: "GREY D, PHÚC DU",
            path: "./assets/music/song10.mp3",
            image: "./assets/img/song10.jpg",
        },
    ],
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? "active" : ""
                }" data-index="${index}" >
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
            `;
        });
        playlist.innerHTML = htmls.join("");
    },

    //Ngay khi bat dau thi se lay bai hay dau tien Current Song.
    definedProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },

    handleEvents: function () {
        const _this = this;
        // Xử lý CD quay/dừng
        const cdWidth = cd.offsetWidth;
        const cdHeight = cd.offsetHeight;
        const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, //10 seconds
            iterations: Infinity,
        });
        cdThumbAnimate.pause();

        let isTouchingVolume = false;
        volumeBar.addEventListener(
            "touchstart",
            (e) => {
                isTouchingVolume = true;
            },
            { passive: false }
        );

        var getTime = function (seconds) {
            var mins = Math.floor(seconds / 60);
            seconds = Math.floor(seconds - mins * 60);
            return `${mins < 10 ? "0" + mins : mins}:${seconds < 10 ? "0" + seconds : seconds
                }`;
        };

        progress.addEventListener("mousemove", function (e) {
            e.stopPropagation();
            var isMove = false;
            if (!isMove) {
                timer.style.display = "block";
                timer.style.left = `${e.offsetX + 40}px`;
                var percentage = (100 * e.offsetX) / this.clientWidth;
                var time = (audio.duration * percentage) / 100;
                timer.innerText = getTime(time);
            }
        });

        progress.addEventListener("mouseout", function () {
            isMove = false;
            timer.style.display = "none";
        });

        // durationBar.addEventListener("mousedown", function () {
        //   if (e.which === 1) {
        //     isDragging = true;
        //   }
        // });

        // document.addEventListener("mousemove", function (e) {
        //   if (isDragging) {
        //     var newPercentage =
        //   }
        // });

        document.addEventListener("touchmove", (e) => {
            if (isTouchingVolume) {
                e.preventDefault(); // Ngăn cuộn trang khi di chuyển ngón tay
            }
        });

        document.addEventListener("touchend", (e) => {
            isTouchingVolume = false;
        });

        //Xu ly phong to / thu nho CD
        document.onscroll = function () {
            const scrollTop = document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            r.style.setProperty("--cd-dim", newCdWidth + "px");
            r.style.setProperty(
                "--thumb-dim",
                Math.floor((newCdWidth * 94) / 100) + "px"
            );
            r.style.setProperty(
                "--c-width",
                Math.floor((newCdWidth * 3) / 100) + "px"
            );
            cd.style.opacity = newCdWidth / cdWidth;
        };

        // Xử lý khi click play
        playBtn.addEventListener(
            "touchstart",
            (e) => {
                playBtn.style.backgroundColor = "#00ffca";
                if (!_this.isPlaying) {
                    const iconPlay = playBtn.querySelector(".icon-play .tooltip");
                    iconPlay.style.opacity = 1;
                } else {
                    const iconPause = playBtn.querySelector(".icon-pause .tooltip");
                    iconPause.style.opacity = 1;
                }
            },
            { passive: true }
        );

        playBtn.addEventListener(
            "touchmove",
            (e) => {
                playBtn.querySelector(".tooltip").style.opacity = "1";
            },
            { passive: true }
        );

        playBtn.addEventListener(
            "touchend",
            (e) => {
                playBtn.style.backgroundColor = "";
                playBtn.querySelector(".icon-play .tooltip").style.opacity = "";
                playBtn.querySelector(".icon-pause .tooltip").style.opacity = "";
            },
            { passive: true }
        );

        playBtn.onmousedown = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            // Khi bài hát đc play
            audio.onplay = function () {
                _this.isPlaying = true;
                player.classList.add("playing");
                cdThumbAnimate.play();
            };
            // Khi bài hát bị pause
            audio.onpause = function () {
                _this.isPlaying = false;
                player.classList.remove("playing");
                cdThumbAnimate.pause();
            };
        };

        let isTouchingProgressBar = false;

        progress.addEventListener(
            "touchstart",
            (e) => {
                if (e.cancelable) {
                    e.preventDefault();
                }
                isTouchingProgressBar = true;
                $(".progress").style.height = "10px";
                $(".progress").style.cursor = "pointer";
                const touchX = e.touches[0].clientX; // Vị trí ngón tay theo trục X
                const progressRect = progress.getBoundingClientRect(); // Kích thước và vị trí của thanh progress
                if (touchX >= progressRect.left && touchX <= progressRect.right) {
                    // Ngón tay chạm vào thanh progress
                    // Thực hiện xử lý ở đây, ví dụ: cập nhật audio.currentTime
                    const percent = (touchX - progressRect.left) / progressRect.width;
                    const seekTime = audio.duration * percent;
                    audio.currentTime = seekTime;
                    audio.play();
                }
            },
            { passive: false }
        );

        progress.addEventListener(
            "touchmove",
            (e) => {
                if (isTouchingProgressBar) {
                    const touchX = e.touches[0].clientX; // Vị trí ngón tay theo trục X
                    const progressRect = progress.getBoundingClientRect(); // Kích thước và vị trí của thanh progress

                    if (touchX >= progressRect.left && touchX <= progressRect.right) {
                        // Ngón tay di chuyển trong phạm vi của thanh progress
                        const percent = (touchX - progressRect.left) / progressRect.width;
                        const seekTime = audio.duration * percent;
                        audio.currentTime = seekTime;
                    } else {
                        console.log("không chạm progress");
                        // Người dùng chạm ngoài phạm vi thanh progress
                        // Không cập nhật giá trị audio.currentTime
                    }
                }
            },
            { passive: true }
        );

        progress.addEventListener(
            "touchend",
            (e) => {
                $(".progress").style.height = "";
                $(".progress").style.cursor = "";
                isTouchingProgressBar = false;
            },
            { passive: false }
        );

        //Xy ly khi tua
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(
                    (audio.currentTime / audio.duration) * 100
                );
                progress.value = progressPercent;
                _this.setConfig("progressSong", audio.currentTime);
                audioTimeLeft.innerHTML = _this.formatTime(audio.currentTime);
                var color =
                    "linear-gradient(to right, rgb(0, 0, 204)" +
                    progress.value +
                    "% , rgb(214, 214, 214)" +
                    progress.value +
                    "%)";
                progress.style.background = color;
                // progress.setAttribute("title", "Left " + progressPercent + "%");
            }
            // Xử lý khi tua
            progress.oninput = function (e) {
                const seekTime = (audio.duration / 100) * e.target.value;
                audio.currentTime = seekTime;
            };

            ///cd Thumb complete percent
            const percent = (progress.value / 100) * 180;
            cdProgressFull.style.transform = `rotate(${percent}deg)`;
            cdProgressFill.forEach((fillElement) => {
                fillElement.style.transform = `rotate(${percent}deg)`;
            });
        };
        // Khi next song
        nextBtn.addEventListener(
            "touchstart",
            () => {
                nextBtn.style.backgroundColor = "#d3d3d3";
                nextBtn.style.borderRadius = "50%";
                nextBtn.querySelector(".tooltip").style.opacity = "1";
            },
            { passive: true }
        );

        nextBtn.addEventListener(
            "touchmove",
            () => {
                nextBtn.querySelector(".tooltip").style.opacity = "1";
            },
            { passive: true }
        );

        nextBtn.addEventListener(
            "touchend",
            () => {
                nextBtn.style.backgroundColor = "";
                nextBtn.style.borderRadius = "";
                nextBtn.querySelector(".tooltip").style.opacity = "";
            },
            { passive: true }
        );

        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.scrollToActiveSong();
        };
        // Khi prev song
        prevBtn.addEventListener(
            "touchstart",
            () => {
                prevBtn.style.backgroundColor = "#d3d3d3";
                prevBtn.querySelector(".tooltip").style.opacity = "1";
                prevBtn.style.borderRadius = "50%";
            },
            { passive: true }
        );

        prevBtn.addEventListener(
            "touchmove",
            () => {
                prevBtn.querySelector(".tooltip").style.opacity = "1";
            },
            { passive: true }
        );

        prevBtn.addEventListener(
            "touchend",
            () => {
                prevBtn.style.backgroundColor = "";
                prevBtn.querySelector(".tooltip").style.opacity = "";
                prevBtn.style.borderRadius = "";
            },
            { passive: true }
        );

        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.scrollToActiveSong();
        };

        // Xử lý lặp lại một song
        repeatBtn.addEventListener(
            "touchstart",
            () => {
                repeatBtn.style.backgroundColor = "#d3d3d3";
                repeatBtn.querySelector(".tooltip").style.opacity = "1";
                repeatBtn.style.borderRadius = "50%";
            },
            { passive: true }
        );

        repeatBtn.addEventListener(
            "touchmove",
            () => {
                repeatBtn.querySelector(".tooltip").style.opacity = "1";
            },
            { passive: true }
        );

        repeatBtn.addEventListener(
            "touchend",
            () => {
                repeatBtn.style.backgroundColor = "";
                repeatBtn.querySelector(".tooltip").style.opacity = "";
                repeatBtn.style.borderRadius = "";
            },
            { passive: true }
        );

        repeatBtn.onclick = function (e) {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig("isRepeat", _this.isRepeat);
            repeatBtn.classList.toggle("active", _this.isRepeat);
        };

        // Xử lý bật/ tắt random song
        randomBtn.addEventListener(
            "touchstart",
            () => {
                randomBtn.style.backgroundColor = "#d3d3d3";
                randomBtn.querySelector(".tooltip").style.opacity = "1";
                randomBtn.style.borderRadius = "50%";
            },
            { passive: true }
        );

        randomBtn.addEventListener(
            "touchmove",
            () => {
                randomBtn.querySelector(".tooltip").style.opacity = "1";
            },
            { passive: true }
        );

        randomBtn.addEventListener(
            "touchend",
            () => {
                randomBtn.style.backgroundColor = "";
                randomBtn.querySelector(".tooltip").style.opacity = "";
                randomBtn.style.borderRadius = "";
            },
            { passive: true }
        );

        randomBtn.onclick = function (e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig("isRandom", _this.isRandom);
            randomBtn.classList.toggle("active", _this.isRandom);
        };
        //Xử lý next song khi audio end
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };

        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest(".song:not(.active)");

            if (songNode || e.target.closest(".option")) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.progressSong = 0;
                    _this.loadCurrentSong();
                    $(".song.active").classList.remove("active");
                    songNode.classList.add("active");
                    if (_this.isPlaying) audio.play();
                }
            }
        };

        //Xử lý khi click vào nút volume

        if (_this.currentVolume > 0) {
            volumeBar.value = _this.currentVolume;
            audio.volume = _this.currentVolume;
            $(".icon-unmute").style.visibility = "visible";
            $(".icon-mute").style.visibility = "hidden";
        } else {
            volumeBar.value = 0;
            audio.volume = 0;
            $(".icon-unmute").style.visibility = "hidden";
            $(".icon-mute").style.visibility = "visible";
        }

        audio.onvolumechange = () => {
            volumeBar.value = audio.volume;
            if (audio.volume === 0) {
                muteIcon.style.visibility = "visible";
                unmuteIcon.style.visibility = "hidden";
            } else {
                muteIcon.style.visibility = "hidden";
                unmuteIcon.style.visibility = "visible";
            }
        };

        volumeBar.oninput = (e) => {
            this.setConfig("currentVolume", e.target.value);
            audio.volume = volumeBar.value;
            volumeBar.setAttribute(
                "title",
                "Âm lượng " + volumeBar.value * 100 + "%"
            );
        };

        unmuteIcon.onclick = (e) => {
            this.setConfig("savedVolume", audio.volume);
            audio.volume = 0;
            this.setConfig("currentVolume", audio.volume);
        };

        muteIcon.onclick = (e) => {
            audio.volume = this.config.savedVolume;
            this.setConfig("currentVolume", audio.volume);
        };
    },

    scrollToActiveSong: function () {
        const song = $$(".song");
        var view = "";
        if (this.currentIndex <= 3) view = "end";
        else view = "center";
        setTimeout(() => {
            $(".song.active").scrollIntoView({
                behavior: "smooth",
                block: view,
            });
        }, 100);
    },

    //Tai bai hat dau tien khi chay ung dung
    loadCurrentSong: function () {
        this.setConfig("currentIndex", this.currentIndex);
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
        audio.onloadedmetadata = () => {
            audioDuration.innerHTML = this.formatTime(audio.duration);
            audio.currentTime = this.progressSong;
        };
    },

    formatTime: function (seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);

        const formattedTime = `${minutes}:${remainingSeconds < 10 ? "0" : ""
            }${remainingSeconds}`;
        return formattedTime;
    },

    loadConfig: function () {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
        this.currentIndex = this.config.currentIndex;
        this.currentVolume = this.config.currentVolume;
        this.progressSong = this.config.progressSong;
        // Object.assign(this, this.config)
    },

    nextSong: function () {
        this.currentIndex++;
        this.progressSong = 0;
        this.isPlaying = true;
        player.classList.add("playing");
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
            this.setConfig("currentIndex", this.currentIndex);
        }
        $(".song.active").classList.remove("active");
        const songList = $$(".song");
        const song = songList[this.currentIndex];
        song.classList.add("active");
        this.loadCurrentSong();
    },

    prevSong: function () {
        this.currentIndex--;
        this.progressSong = 0;
        this.isPlaying = true;
        player.classList.add("playing");
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        $(".song.active").classList.remove("active");
        const songList = $$(".song");
        const song = songList[this.currentIndex];
        song.classList.add("active");
        this.loadCurrentSong();
    },

    playRandomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (this.playedIndexes.includes(newIndex));

        this.playedIndexes.push(newIndex);
        console.log(this.playedIndexes);
        if (this.playedIndexes.length === this.songs.length) {
            this.playedIndexes = [];
        }
        this.currentIndex = newIndex;
        this.progressSong = 0;
        this.isPlaying = true;
        player.classList.add("playing");
        $(".song.active").classList.remove("active");
        const songList = $$(".song");
        const song = songList[this.currentIndex];
        song.classList.add("active");
        this.loadCurrentSong();
    },

    start: function () {
        //Gán cấu hình vào ứng dụng
        this.loadConfig();

        this.definedProperties();

        this.handleEvents();

        this.loadCurrentSong();

        this.render();

        randomBtn.classList.toggle("active", this.isRandom);
        repeatBtn.classList.toggle("active", this.isRepeat);
    },
};
app.start();