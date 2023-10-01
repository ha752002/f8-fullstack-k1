
import searchBoxHTML from './textComponent.js';

document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");
    root.innerHTML = searchBoxHTML;

    const searchBox = document.querySelector(".search-box");
    const btn = document.querySelector(".btn");
    const action = document.querySelector(".action");
    let result = null;

    const SpeechRecognition =
        window.speechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.lang = "vi-VN";
    recognition.continuous = false;

    let speechTimeout;

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        if (recognition && !recognition.recognizing) {
            // Xóa kết quả trước đó (nếu có)
            if (result) {
                result.remove();
            }
            startRecognition();
        }
    });

    recognition.onend = () => {
        if (recognition && recognition.recognizing) {
            recognition.recognizing = false;
            stopRecognition();
        }
    };

    recognition.onerror = () => {
        if (recognition && recognition.recognizing) {
            recognition.recognizing = false;
            handleRecognitionError();
        }
    };

    recognition.onnomatch = function () {
        if (recognition && recognition.recognizing) {
            handleRecognitionNoMatch();
        }
    };

    recognition.onresult = (e) => {
        if (recognition && recognition.recognizing) {
            const text = e.results[0][0].transcript.toLowerCase();
            handleRecognitionResult(text);
        }
    };

    const startRecognition = () => {
        recognition.start();
        btn.style.background = "green";
        action.innerHTML = "Hãy nói nội dung bạn muốn";
        recognition.recognizing = true;
        speechTimeout = setTimeout(() => {
            if (recognition.recognizing) {
                recognition.stop();
                handleRecognitionNoMatch();
            }
        }, 5000);
    };

    const stopRecognition = () => {
        btn.style.background = "red";
        action.innerHTML = "Đã nói xong. Hy vọng kết quả như ý bạn";
        clearTimeout(speechTimeout);
    };

    const handleRecognitionError = () => {
        recognition.recognizing = false;
        action.innerHTML = "Xin hãy nói lại !";
    };

    const handleRecognitionNoMatch = () => {
        recognition.recognizing = false;
        action.innerHTML = "Vui lòng nói yêu cầu của bạn!";
    };

    const handleRecognitionResult = (text) => {
        result = document.createElement("div");
        const css = {
            fontSize: '1.4rem',
            padding: '10px',
            border: '1px solid black',
            margin: '10px 0',
        };
        Object.assign(result.style, css);
        result.innerText = `Đang thực hiện: ${text}`;
        searchBox.append(result);

        setTimeout(() => {
            const handled = handleVoice(text);
            if (handled) {
                result.innerText = `Đã thực hiện thành công`;
            } else {
                result.innerText = `Không thực hiện được`;
            }
        }, 1000);
    };

    const handleVoice = (text) => {
        switch (text) {
            case "google":
                window.open("https://google.com");
                return true;

            case "youtube":
                window.open("https://youtube.com");
                return true;

            case "facebook":
                window.open("https://facebook.com");
                return true;

            case "google drive":
                window.open("https://drive.google.com");
                return true;

            case "google maps":
            case "bản đồ":
            case "maps":
                window.open("https://maps.google.com");
                return true;

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
                    return true;
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
                    return true;
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
                    return true;
                } else {
                    return false;
                }
        }
    };
});
