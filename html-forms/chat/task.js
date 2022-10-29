const openChat = document.querySelector(".chat-widget");
const areaChat = document.querySelector(".chat-widget__messages-container");
const messages = document.querySelector('.chat-widget__messages');
const question = document.querySelector('.chat-widget__input');
let timeID;

function answerTimeout() {
    let date = new Date();
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${getAnswers()}</div>
        </div>
        `;
};

function open() {
    openChat.classList.add("chat-widget_active");
    timeID = setTimeout(answerTimeout, 30000);
};

openChat.addEventListener("click", open);

function getAnswers() {
    const answers = [
        'Нет ответа.',
        'Досвидания!',
        'Добрый день! Досвидания!',
        'Где ваша совесть?',
        'Мы ничего вам не продадим!',
        'Приходите завтра.',
        'Технический сбой.',
        'Я вас не понимаю.',
        'Пишите по-русски.',
        'Добрый день, мы ещё не проснулись. Позвоните через 10 лет.',
        'Ничем не можем вам помочь.'
      ],
      index = Math.floor(Math.random() * answers.length);

    return answers[index];
}

function enterText(event) {
    let date = new Date();
    let getInput = question.value;
    
    if ((event.key === "Enter") && (question.value != "")) {
        messages.innerHTML += `
        <div class="message_client">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${getInput}</div>
            <p></p>
        </div>
        <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${getAnswers()}</div>
        </div>
        `;
        question.value = "";
        areaChat.scrollTo(0, areaChat.scrollHeight);
        clearTimeout(timeID);
    } 
}; 

question.addEventListener("keyup", enterText);

