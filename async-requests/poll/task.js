const poll = document.querySelector(".poll");
const pollAnswers = document.querySelector(".poll__answers");
const pollTitle = document.querySelector(".poll__title");
const pollAnswer = document.querySelectorAll(".poll__answer");

let item, votes = {};
let html;

function createResult() {
    let sum = 0;
    for (let i = 0; i < votes.stat.length; i++) {
        sum += Number(votes.stat[i].votes);
    };
    pollAnswers.remove();
    let pollAnswersNew = document.createElement("div");
    pollAnswersNew.classList.add("poll__answers");
    pollAnswersNew.classList.add("poll__answers_active");
    pollAnswersNew.id = "poll__answers";
    poll.appendChild(pollAnswersNew);
    for (let i = 0; i < votes.stat.length; i++) {
        let percent = (100/ sum) * Number(votes.stat[i].votes);
        let percentAnswer = document.createElement("div");
        percentAnswer.append(votes.stat[i].answer + ' ' + percent.toFixed(2) + '%');
        pollAnswersNew.appendChild(percentAnswer);
    };
};

function buttonClick() {
    let xhrPost = new XMLHttpRequest;
    xhrPost.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
    xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhrPost.send(`vote=${this.id}&answer=${this.index}`);      
    window.alert("Спасибо, ваш вопрос засчитан!");
    window.alert(`vote=${this.id}&answer=${this.index}`);
    xhrPost.addEventListener('readystatechange', function() {
        if (this.readyState === this.DONE) {
            votes = JSON.parse(xhrPost.response);
            createResult();
        };
    });
};

function createButton(answer, id, index) {
    let buttonAnswer = document.createElement("button");
    buttonAnswer.classList.add("poll__answer");
    buttonAnswer.append(answer);
    pollAnswers.appendChild(buttonAnswer);
    buttonAnswer.addEventListener("click",  () => {
        let xhrPost = new XMLHttpRequest;
        xhrPost.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
        xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        xhrPost.send(`vote=${id}&answer=${index}`);      
        window.alert("Спасибо, ваш вопрос засчитан!");
        xhrPost.addEventListener('readystatechange', function() {
            if (this.readyState === this.DONE) {
                votes = JSON.parse(xhrPost.response);
                createResult();
            };
        });
    });
};

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();
xhr.addEventListener('readystatechange', function() {
    if (this.readyState === this.DONE) {
        item = JSON.parse(xhr.response);
        html = `
            <div class="poll__title" id="poll__title">
                ${item.data.title}
            </div>
        `;
        poll.insertAdjacentHTML("afterbegin", html);
        for (let index = 0; index < item.data.answers.length; index++) {
            createButton(item.data.answers[index], item.id, index);
        };
    };
});