import searchBoxHTML from './textComponent.js';

document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");
    root.innerHTML = searchBoxHTML;

    const SpeechRecognition =
        window.speechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        console.error("Speech recognition not supported in this browser.");
        return;
    }

    const searchBox = document.querySelector(".search-box");
    const btn = document.querySelector(".btn");
    const action = document.querySelector(".action");


    // if (recognition && recognition.isListening) {
    //     recognition.stop();
    // }
    const recognition = new SpeechRecognition();
    let recognizing = false;

    recognition.lang = "vi-VN";
    recognition.continuous = false;

    btn.addEventListener("click", function (e) {
        if (!recognizing) {
            e.preventDefault();
            recognition.start();
            btn.style.background = "green";
        }
    });

    recognition.onspeechend = () => {
        recognizing = false;
        recognition.stop();
        btn.style.background = "red";
    };

    recognition.onerror = () => {
        recognizing = false;
        action.innerHTML = "Xin hãy nói lại !";
    };

    const result = document.createElement("div");

    recognition.onresult = (e) => {
        const text = e.results[0][0].transcript.toLowerCase();
        result.innerText = `Đang thực hiện: ${text}`;
        searchBox.append(result);

        setTimeout(() => {
            if (handleVoice(text) === "không thực hiện được") {
                result.innerText = `Không thực hiện được`;
            } else {
                result.innerText = `Đã thực hiện thành công`;
            }
        }, 1000);
    };

    const handleVoice = (text) => {
        // console.log(text);
        let status = true;
        switch (text) {
            case "google":
                window.open("https://google.com");
                break;

            case "youtube":
                window.open("https://youtube.com");
                break;

            case "facebook":
                window.open("https://facebook.com");
                break;

            case "google drive":
                window.open("https://drive.google.com");
                break;

            case "google maps":
            case "bản đồ":
            case "maps":
                window.open("https://maps.google.com");
                break;

            default:
                if (
                    text.includes("chỉ đường") ||
                    text.includes("tới") ||
                    text.includes("đường tới")
                ) {
                    const transcriptNew = text
                        .replace("chỉ đường", "")
                        .replace("tới", "")
                        .replace("đường tới", "")
                        .trim();

                    const url = `https://www.google.com/maps/search/${transcriptNew}`;
                    window.open(url.trim());
                } else if (
                    text.includes("bài hát") ||
                    text.includes("mở bài hát") ||
                    text.includes("nghe bài hát")
                ) {
                    const transcriptNew = text
                        .replace("bài hát", "")
                        .replace("mở", "")
                        .replace("nghe", "")
                        .trim();

                    const url = `https://zingmp3.vn/tim-kiem/tat-ca?q=${transcriptNew}`;
                    window.open(url.trim());
                } else if (
                    text.includes("video") ||
                    text.includes("mở video") ||
                    text.includes("xem video")
                ) {
                    const transcriptNew = text
                        .replace("video", "")
                        .replace("mở", "")
                        .replace("xem", "")
                        .trim();

                    const url = `https://www.youtube.com/results?search_query=${transcriptNew}`;
                    window.open(url.trim());
                } else {
                    status = false;
                }
                break;
        }

    };
});
