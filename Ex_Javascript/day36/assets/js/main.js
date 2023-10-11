// main.js
import { render } from './ui.js';
import { client } from './client.js';

let quizData = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let streak = 0;
let timerInterval;
//score += scorePerCorrectAnswer * (leftTime / initTime) + scorePerStreak * streak
let score = 0;
//interval 10s left / total * spca
let scorePerCorrectAnswer = 1000;
//scs * current streak
let scorePerStreak = 100;
document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.querySelector('.quizGame__start--button');
    const quizBox = document.querySelector('.quiz__box');
    const resultBox = document.querySelector('.result_box');


    function handleAnswer(isCorrect) {
        if (isCorrect) {
            correctAnswers++;
            streak++;
        } else {
            streak = 0;
        }

        setTimeout(() => {
            if (currentQuestionIndex < quizData.length - 1) {
                currentQuestionIndex++;
                displayCurrentQuestion();
            } else {
                showFinalResult();
            }
        }, 100);
    }

    function showFinalResult() {
        quizBox.style.display = 'none';
        resultBox.style.display = 'block';
        const resultItemStreak = resultBox.querySelector('.result__item-streak');
        resultItemStreak.innerText = streak;


        if (currentQuestionIndex === quizData.length - 1) {
            const scoreElement = resultBox.querySelector('.result__item p');
            const totalQuestions = quizData.length;
            // const resultItemStreak = resultBox.querySelector('.result__item-streak');

            const correctAnswersElement = resultBox.querySelector('.result__item:nth-child(3) p');
            const incorrectAnswersElement = resultBox.querySelector('.result__item:nth-child(4) p');

            const scorePerCorrectAnswer = 1000;
            const scorePerStreak = 100;
            const finalScore = (correctAnswers * scorePerCorrectAnswer * (100 / totalQuestions)) + (streak * scorePerStreak);
            scoreElement.innerText = finalScore;

            correctAnswersElement.innerText = correctAnswers;
            incorrectAnswersElement.innerText = totalQuestions - correctAnswers;
        }

    }

    startBtn.addEventListener('click', function () {
        startBtn.style.display = 'none';
        quizBox.style.display = 'block';
        displayCurrentQuestion();
    });

    function handleOptionClick(event) {
        const selectedOption = event.currentTarget;
        const isCorrect = selectedOption.getAttribute('data-isAnswer') === 'true';

        if (isCorrect) {
            selectedOption.querySelector('.option__inner').style.backgroundColor = 'green';
        } else {
            selectedOption.querySelector('.option__inner').style.backgroundColor = 'red';
        }

        const options = quizBox.querySelectorAll('.option');
        options.forEach(option => {
            option.removeEventListener('click', handleOptionClick);
        });

        handleAnswer(isCorrect);

        clearInterval(timerInterval);

    }

    function displayCurrentQuestion() {
        render(quizData, currentQuestionIndex, streak).then(() => {
            const options = quizBox.querySelectorAll('.option');
            options.forEach(option => {
                option.getAttribute('data-isAnswer');

                option.addEventListener('click', handleOptionClick);
            });
            startTimer();
        });

    }

    function startTimer() {
        const timerProgressDiv = document.querySelector('.quizizzGame__top--timer-progress');
        let progressWidth = 100;
        const intervalDuration = 100;

        timerInterval = setInterval(() => {
            if (progressWidth > 0) {
                progressWidth -= 1;
                timerProgressDiv.style.width = `${progressWidth}%`;
            } else {
                clearInterval(timerInterval);
                if (currentQuestionIndex < quizData.length - 1) {
                    currentQuestionIndex++;
                    streak = 0;
                    displayCurrentQuestion();
                } else {
                    showFinalResult();
                }
            }
        }, intervalDuration);
    }


    client.get(`/Quizs`).then(({ response, data }) => {
        if (response.status === 200) {
            quizData = data;
        }
    });
});
