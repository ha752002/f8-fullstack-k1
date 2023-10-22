export function formatDate(date) {
    date = new Date(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Nếu hours là 0, thì hiển thị 12 giờ
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "  " + strTime;
}

// fix lỗi xss
export function escapeOutput(toOutput) {
    return toOutput.replace(/&/g, '&amp;')
        .replace(/\</g, '&lt;')
        .replace(/\>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/\'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}


export function calculateSelectedDate(selectedDate) {
    const currentDate = new Date();
    const chosenDate = new Date(selectedDate);
    console.log(currentDate);
    console.log(chosenDate);
    const timeDifference = chosenDate - currentDate;
    console.log(timeDifference);

    // Calculate days and time
    const daysDifference = Math.floor(
        timeDifference / (1000 * 60 * 60 * 24)
    );
    const timeDifferenceMillis = timeDifference % (1000 * 60 * 60 * 24);
    const hoursDifference = Math.floor(
        timeDifferenceMillis / (1000 * 60 * 60)
    );
    const minutesDifference = Math.floor(
        (timeDifferenceMillis % (1000 * 60 * 60)) / (1000 * 60)
    );

    // Calculate the time difference string
    let timeDifferenceString = "";
    if (daysDifference > 0) {
        timeDifferenceString += `${daysDifference} ngày `;
    }
    if (hoursDifference > 0) {
        timeDifferenceString += ` ${hoursDifference} giờ`;
    }
    if (minutesDifference > 0) {
        timeDifferenceString += ` ${minutesDifference} phút`;
    }

    if (timeDifferenceString === "") {
        timeDifferenceString = "Vui lòng chọn lại thời gian đăng";
    } else {
        timeDifferenceString = `Bài viết của bạn sẽ được đăng sau ${timeDifferenceString} `;
    }

    return timeDifferenceString;
}

export function removeExtraSpaces(text) {
    const result = text.replace(/\s+/g, ' ');
    return result;
}

export function extractAndReplaceLinks(text) {
    const linkRegex = /\bhttps?:\/\/[^\s]+\b/g;
    const links = text.match(linkRegex);

    if (links) {
        links.forEach((link) => {
            const linkTag = `<a href="${link}" target="_blank">${link}</a>`;
            text = text.replace(link, linkTag);
        });
    }
    return text;
}


export function extractAndReplaceYouTubes(text) {
    const youtubeRegex = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?‌=]*)?/g;
    let youtubeLinks = text.match(youtubeRegex);

    if (youtubeLinks) {
        youtubeLinks.forEach((youtubeLink) => {
            fetch(youtubeLink)
                .then((response) => response.text())
                .then((html) => {
                    if (html.includes("Video unavailable")) {
                        text = text.replace(youtubeLink, "Video unavailable");
                    } else {
                        const videoIdMatch = youtubeLink.match(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?‌=]*)?/);
                        if (videoIdMatch) {
                            const videoId = videoIdMatch[1];
                            const iframeTag = `<iframe width="600" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
                            text = text.replace(youtubeLink, iframeTag);
                        }
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }
    return text;
}

export function extractAndReplaceEmails(text) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/g;
    const emails = text.match(emailRegex);

    if (emails) {
        emails.forEach((email) => {
            const emailTag = `<a href="mailto:${email}" target="_blank">${email}</a>`;
            text = text.replace(email, emailTag);
        });
    }
    return text;
}

export function extractAndReplacePhones(text) {
    const phoneRegex = /tel:[0-9+\-\s]+/g;
    const phoneNumbers = text.match(phoneRegex);

    if (phoneNumbers) {
        phoneNumbers.forEach((phoneNumber) => {
            const telTag = `<a href="${phoneNumber}" target="_blank">${phoneNumber}</a>`;
            text = text.replace(phoneNumber, telTag);
        });
    }
    return text;
}

export function notifyResponse(response) {
    const toastDiv = document.createElement('div');
    toastDiv.classList.add('notify-response');

    toastDiv.textContent = response;

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.classList.add('notify-close');
    closeButton.textContent = '✖';

    closeButton.addEventListener('click', () => {
        toastDiv.remove();
    });

    toastDiv.appendChild(closeButton);

    document.body.appendChild(toastDiv);
    setTimeout(() => {
        toastDiv.remove();
    }, 1500);
}

