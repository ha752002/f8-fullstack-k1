var track_art = document.querySelector('.track-art');
var track_name = document.querySelector('.track-name');
var track_artist = document.querySelector('.track-artist');
var playpause_btn = document.querySelector('.playpause-track');
var next_btn = document.querySelector('.next-track');
var prev_btn = document.querySelector('.prev-track');
var seek_slider = document.querySelector('.seek_slider');
var curr_time = document.querySelector('.current-time');
var total_duration = document.querySelector('.total-duration');
var curr_track = document.createElement('audio');

var track_index = 0;
var isPlaying = false;
var isRandom = false;
var updateTimer;

var music_list = [
  {
    img: 'images/fallingdown.jpg',
    name: 'Anh sai rồi!!',
    artist: 'Sơn Tùng M-TP',
    music: 'music/test.mp3'
  }
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();
  curr_track.src = music_list[track_index].music;
  curr_track.load();
  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;
  updateTimer = setInterval(setUpdate, 1000);
  // curr_track.addEventListener('ended', nextTrack);
  curr_track.addEventListener('ended', nextTrack);
}



function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add('rotate');
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove('rotate');
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (track_index < music_list.length - 1 && isRandom === false) {
    track_index += 1;
  } else if (track_index < music_list.length - 1 && isRandom === true) {
    var random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music_list.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  var seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setUpdate() {
  var seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    var currentMinutes = Math.floor(curr_track.currentTime / 60);
    var currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    var durationMinutes = Math.floor(curr_track.duration / 60);
    var durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


var timer_span = document.querySelector('.timer');

seek_slider.addEventListener('mousemove', function (e) {
  var rect = seek_slider.getBoundingClientRect();
  // console.log(rect);
  var offsetX = e.clientX - rect.left;
  var percentage = (offsetX / rect.width) * 100;

  var duration = curr_track.duration ? curr_track.duration : 0;
  var currentTime = (duration * percentage) / 100;

  var currentMinutes = Math.floor(currentTime / 60);
  var currentSeconds = Math.floor(currentTime - currentMinutes * 60);

  var formattedTime = currentMinutes.toString().padStart(2, '0') + ':' + currentSeconds.toString().padStart(2, '0');

  timer_span.textContent = formattedTime;
  timer_span.style.display = 'block';
  timer_span.style.left = rect.left + offsetX + "px";
});

seek_slider.addEventListener('mouseleave', function () {
  timer_span.style.display = 'none';
});



// console.log(lyricData);

var lyricData = JSON.parse(lyricData).data.sentences;


var kara = document.querySelector(".karaoke");
var karaBtn = document.querySelector(".open-karaoke button");
var karaClose = kara.querySelector(".close");
var karaInner = kara.querySelector(".karaoke-inner");

var lyricIndex = 0;
var isPlaying = false;
var updateTimer;
var lyricDisplayed = false;
var currentTime = 0;

var curr_track = new Audio();


function startMusic() {
  curr_track.play();
  isPlaying = true;
  displayLyric();
  kara.classList.add("show");

}

// curr_track.addEventListener('canplay', function () {
//   kara.classList.add("show");

// });

function displayLyric() {
  if (!lyricDisplayed) {
    var firstSentence = lyricData[0];
    var firstSentenceText = firstSentence.words.map(function (word) {
      return word.data;
    }).join(' ');
    karaInner.querySelector('.karaoke-lyrics').textContent = firstSentenceText;
    lyricDisplayed = true;
  }
  else if (lyricIndex < lyricData.length) {
    var currentSentence = lyricData[lyricIndex];
    var sentenceText = currentSentence.words.map(function (word) {
      return word.data;
    }).join(' ');
    karaInner.querySelector('.karaoke-lyrics').textContent = sentenceText;
    lyricIndex++;
  }
}

karaBtn.addEventListener("click", function () {
  kara.classList.toggle("hidden");
});

karaClose.addEventListener("click", function () {
  kara.classList.add("hidden");
});

curr_track.addEventListener('timeupdate', function () {
  if (!isNaN(curr_track.duration)) {
    currentTime = curr_track.currentTime;

    if (lyricIndex > 0 && currentTime < lyricData[lyricIndex].words[0].startTime / 1000) {
      lyricIndex--;
    }

    while (lyricIndex < lyricData.length && currentTime >= lyricData[lyricIndex].words[0].startTime / 1000) {
      displayLyric();
      lyricIndex++;
    }
  }
});

seek_slider.addEventListener("click", function (event) {
  var clickX = event.clientX - seek_slider.getBoundingClientRect().left;
  var clickPercent = (clickX / seek_slider.offsetWidth);
  var newTime = clickPercent * curr_track.duration;
  curr_track.currentTime = newTime;
  currentTime = newTime;
  console.log(currentTime);
  displayLyric();
});
curr_track.src = './music/test.mp3';
curr_track.load();

curr_track.addEventListener('ended', function () {
  if (isPlaying) {
    curr_track.currentTime = 0;
    lyricIndex = 0;
    lyricDisplayed = false;
    curr_track.play();
  }
});



