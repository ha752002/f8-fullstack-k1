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


// day.addEventListener("click", (event) => {
//     event.stopPropagation();
//     const selectedDay = parseInt(event.target.textContent);
//     const selectedMonth = currentMonth.value;
//     const selectedYear = currentYear.value;

//     const selectedDate = new Date(
//         selectedYear,
//         selectedMonth,
//         selectedDay
//     );

//     const currentDate = new Date();
//     var timeDifference = selectedDate - currentDate;

//     // You can use the selectedDay, selectedMonth, and selectedYear as needed
//     console.log(`Selected Date: ${selectedDay}`);
//     console.log(`Selected Month: ${month_names[selectedMonth]}`);
//     console.log(`Selected Year: ${selectedYear}`);

//     // To get the current time, you can use the existing timer (as it updates every second)
//     const currentTime = todayShowTime.textContent;
//     console.log(`Current Time: ${currentTime}`);

//     // Calculate days and time
//     const daysDifference = Math.floor(
//         timeDifference / (1000 * 60 * 60 * 24)
//     );
//     const timeDifferenceMillis = timeDifference % (1000 * 60 * 60 * 24);
//     const hoursDifference = Math.floor(
//         timeDifferenceMillis / (1000 * 60 * 60)
//     );
//     const minutesDifference = Math.floor(
//         (timeDifferenceMillis % (1000 * 60 * 60)) / (1000 * 60)
//     );

//     // Calculate the time difference string
//     let timeDifferenceString = "";
//     if (daysDifference > 0) {
//         timeDifferenceString += `${daysDifference} ngày${daysDifference > 1 ? "" : ""
//             } `;
//     }
//     if (hoursDifference > 0) {
//         timeDifferenceString += `${hoursDifference} giờ${hoursDifference > 1 ? "" : ""
//             } `;
//     }
//     if (minutesDifference > 0) {
//         timeDifferenceString += `${minutesDifference} phút${minutesDifference > 1 ? "" : ""
//             }`;
//     }

//     if (timeDifferenceString === "") {
//         timeDifferenceString = "Vui lòng chọn lại thời gian đăng";
//     } else {
//         timeDifferenceString = `Bài viết của bạn sẽ được đăng sau ${timeDifferenceString} lúc ${selectedYear} ${month_names[selectedMonth]} ${selectedDay}, ${currentTime}`;
//     }

//     // Update the calendarSetEl with the time difference string
//     calendarSetEl.innerText = timeDifferenceString;

// });

