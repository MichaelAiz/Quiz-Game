const start_btn = document.querySelector('#play-btn').addEventListener("click", setupQuiz);  
const start_card = document.querySelector('.start-card');
const start_cont = document.querySelector('.start-cont');
const game =  document.querySelector('.main-game');
const play_cont = document.querySelector('.play-cont');
const answers = document.querySelector('.answers');
const body = document.querySelector('body');
const q = document.querySelector('.question');
const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const score = []; //creates array to hold answers 
const result_card = document.querySelector('.result-card');
a1.addEventListener("click", () => {
    enterAnswer(1); 
    nextQuestion();
});
a2.addEventListener("click", () => {
    enterAnswer(2);
    nextQuestion();
});

function setupQuiz(){ //runs after start button is clicked, removes start container and reveals quiz game
    changeBackground();
    displayGame();
    hideStart();
    window.setTimeout(deleteStart, 500); //slows the deletion of start card to allow for fade out effect
    window.setTimeout(showGame,500); //slows the appearance of play card 
}
//Question Class 
class Question {
    constructor(question, answer1, answer2,){
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
    }
}

//Question Objects
const q1 = new Question('Do you enjoy parties?', 'yes', 'no');
const q2 = new Question('Do you enjoy having free time?', 'yes', 'no');
const q3 = new Question('Do you want to have sex?', 'yes', 'no');
const q4 = new Question('Country or City?', 'Country', 'City');
const q5 = new Question('How do you feel about smog?', 'love it, its my crack', 'ew');
const q6 = new Question('Money or Happiness', 'Money', 'Happiness');

//array of question objects
const questions = [q1, q2, q3, q4, q5, q6];

// Start Functions
changeBackground = () => body.className += " play";
function displayGame(){
    game.className += " visible";
    q.innerHTML = questions[0].question;
    a1.innerHTML = questions[0].answer1;
    a2.innerHTML = questions[0].answer2;
}
showGame = () => game.style.opacity = "1";
hideStart = () => start_cont.style.opacity = "0"; //fades out start card
deleteStart = () => start_cont.className += " invisible";

//adds answer to score array
function enterAnswer(answer){
    if (answer == 1){
        score.push(1);
    } else {
        score.push(2);
    }
    console.log(score);
}

//Show next question
let q_num = 0; 
function nextQuestion(){
    q_num ++;
    if (q_num === questions.length  ) {
        showResult();
    }
    q.innerHTML = questions[q_num].question;
    a1.innerHTML = questions[q_num].answer1;
    a2.innerHTML = questions[q_num].answer2;
    console.log(q_num);
}

 //Display Result 
function showResult(){
    document.querySelector('.quiz-section').style.display = "none";
    const result_header = document.querySelector('.result-header-text');
    const result_title = document.querySelector('.result-card .card-title');
    const result_text = document.querySelector('.result-card .card-text');
    const result_link = document.querySelector('.result-card .btn');

    game.className += " result";
    result_card.className += " visible";
    const img = document.querySelector('.card-img');
    console.log(score.length);
    let num_a1 = 0;
    let num_a2 = 0;
    for (i = 0; i < score.length; i++){ //iterates through score array to count the amount of times each number appears
        if (score[i] == 1) {
            num_a1 ++;
        } else {
            num_a2++;
        }
    }
    //set result based on score and change content of result card
    if (num_a1 == score.length){
        result = "Queens";
        img.setAttribute('src', "img/Queens.png");
        result_header.innerHTML = "You Got Queens University!";
        result_title.innerHTML = "Queens";
        result_text.innerHTML = "Queens University is the perfect university for having a social life. Your job prospects may not be the greatest, but it is statistically proven you have a 75% chance of getting laid if you go here.";
        result_link.setAttribute('href', 'https://www.queensu.ca/' );
    }
    else if (num_a1 > num_a2){
        result = "McMaster";
        img.setAttribute('src', "img/McMaster.jpg");
        result_header.innerHTML = "You Got McMaster!";
        result_title.innerHTML = "McMaster";
        result_text.innerHTML = ("You got this if you like to have some fun, but somewhere inside you still hate yourself at least a little bit. Here you can find a little bit of fun, but its far more likely you'll just find some smog");
        result_link.setAttribute('href', 'https://www.mcmaster.ca/' );   
    }
    else if (num_a1 == num_a2){
        result = "York"
        img.setAttribute('src', "img/York.jpg");
        result_header.innerHTML = "You Got York University!";
        result_title.innerHTML = "York";
        result_text.innerHTML = "York is for people who can't decide what to really do with their lives or what they want, which makes sense since to get this result you had to have clicked each button an equal number of times. Enjoy your education or psych degree."
        result_link.setAttribute('href', 'https://www.yorku.ca/index.html' );   
    }
    else if (num_a1 < num_a2){
        result = "Waterloo"
        img.setAttribute('src', "img/Waterloo.jpg");
        result_header.innerHTML = "You Got Waterloo University!";
        result_title.innerHTML = "Waterloo";
        result_text.innerHTML = "Call Crises Services Canada at 1-833-456-4566, or visit Ementalhealth.ca.";
        result_link.setAttribute('href', 'https://kidshelpphone.ca/' );   
    }
}



