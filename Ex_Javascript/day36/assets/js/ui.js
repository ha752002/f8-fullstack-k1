export function render(quizData, currentQuestionIndex, streak) {
    const quizBox = document.querySelector('.quiz__box');

    // Kiểm tra xem currentQuestionIndex có hợp lệ hay không
    if (currentQuestionIndex >= 0 && currentQuestionIndex < quizData.length) {
        const quizItem = quizData[currentQuestionIndex];

        // Xóa nội dung hiện tại của quizBox
        quizBox.innerHTML = '';

        const header = document.createElement('header');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.textContent = 'Awesome Quiz Application';

        const timerDiv = document.createElement('div');
        timerDiv.classList.add('timer');

        const timerProgressDiv = document.createElement('div');
        timerProgressDiv.classList.add('quizizzGame__top--timer-progress');
        timerProgressDiv.style.width = '100%';

        timerDiv.appendChild(timerProgressDiv);

        header.appendChild(titleDiv);
        header.appendChild(timerDiv);

        const section = document.createElement('section');

        const queTextDiv = document.createElement('div');
        queTextDiv.classList.add('que_text');
        queTextDiv.innerHTML = `<span>${quizItem.quiz}</span>`;

        const optionListDiv = document.createElement('div');
        optionListDiv.classList.add('option_list', 'grid__row');

        quizItem.options.forEach((optionItem) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option', 'grid__column-6');
            optionDiv.setAttribute('data-isAnswer', optionItem.isAnswer);

            const optionInnerDiv = document.createElement('div');
            optionInnerDiv.classList.add('option__inner');

            const optionSpan = document.createElement('span');
            optionSpan.textContent = `${optionItem.option}`;

            optionInnerDiv.appendChild(optionSpan);
            optionDiv.appendChild(optionInnerDiv);
            optionListDiv.appendChild(optionDiv);
        });

        section.appendChild(queTextDiv);
        section.appendChild(optionListDiv);

        // Tạo footer
        const footer = document.createElement('footer');

        const totalQueDiv = document.createElement('div');
        totalQueDiv.classList.add('total_que');
        const totalQueSpan = document.createElement('span');
        totalQueSpan.innerHTML = `<p>${currentQuestionIndex + 1}</p> Of <p>${quizData.length}</p> Questions`;
        totalQueDiv.appendChild(totalQueSpan);

        const streakBonus = document.createElement('div');
        streakBonus.classList.add('streak-bonus');

        const streakBonusInner = document.createElement('span');
        streakBonusInner.classList.add('streak-bonus-inner');
        streakBonusInner.textContent = 0;

        streakBonus.appendChild(streakBonusInner)


        const streakDiv = document.createElement('div');
        streakDiv.classList.add('streak');

        for (let index = 0; index < 3; index++) {
            // console.log(index);
            let steakItem = document.createElement('div');
            steakItem.classList.add('steak__items');
            if (index < streak) {
                steakItem.classList.add('streak-is-show');
            }
            streakDiv.appendChild(steakItem);
        }




        footer.appendChild(totalQueDiv);
        footer.appendChild(streakBonus);

        footer.appendChild(streakDiv);

        quizBox.appendChild(header);
        quizBox.appendChild(section);
        quizBox.appendChild(footer);
    }
}

