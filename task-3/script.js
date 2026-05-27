// Hero Button
function showMessage() {
    alert("Welcome to ApexPlanet Task 3 Project!");
}


/* =========================
   ADVANCED QUIZ SYSTEM
========================= */

const quizData = {

html: [

{
question: "1. What does HTML stand for?",
options: [
"A. Hyper Text Markup Language",
"B. Hyper Tool Multi Language",
"C. High Transfer Machine Language",
"D. Home Text Language"
],
answer: "A. Hyper Text Markup Language"
},

{
question: "2. Which tag is used for heading?",
options: [
"A. <p>",
"B. <h1>",
"C. <div>",
"D. <span>"
],
answer: "B. <h1>"
},

{
question: "3. Which tag inserts image?",
options: [
"A. <img>",
"B. <image>",
"C. <src>",
"D. <picture>"
],
answer: "A. <img>"
},

{
question: "4. Which tag creates hyperlink?",
options: [
"A. <link>",
"B. <a>",
"C. <href>",
"D. <url>"
],
answer: "B. <a>"
},

{
question: "5. Which tag creates paragraph?",
options: [
"A. <text>",
"B. <paragraph>",
"C. <p>",
"D. <para>"
],
answer: "C. <p>"
},

{
question: "6. Which tag creates table row?",
options: [
"A. <tr>",
"B. <td>",
"C. <th>",
"D. <table>"
],
answer: "A. <tr>"
},

{
question: "7. Which tag creates ordered list?",
options: [
"A. <ul>",
"B. <ol>",
"C. <li>",
"D. <list>"
],
answer: "B. <ol>"
},

{
question: "8. HTML is used for?",
options: [
"A. Styling",
"B. Database",
"C. Structure",
"D. Animation"
],
answer: "C. Structure"
},

{
question: "9. Which input type hides password?",
options: [
"A. text",
"B. email",
"C. password",
"D. number"
],
answer: "C. password"
},

{
question: "10. Which tag is used for line break?",
options: [
"A. <break>",
"B. <lb>",
"C. <br>",
"D. <hr>"
],
answer: "C. <br>"
}

],


css: [

{
question: "1. CSS stands for?",
options: [
"A. Cascading Style Sheets",
"B. Computer Style Sheets",
"C. Colorful Style Sheets",
"D. Creative Style System"
],
answer: "A. Cascading Style Sheets"
},

{
question: "2. Which property changes text color?",
options: [
"A. font-color",
"B. text-color",
"C. color",
"D. background"
],
answer: "C. color"
},

{
question: "3. Which property changes background?",
options: [
"A. bg-color",
"B. background-color",
"C. color",
"D. style"
],
answer: "B. background-color"
},

{
question: "4. Which property changes font size?",
options: [
"A. size",
"B. font-size",
"C. text-size",
"D. font"
],
answer: "B. font-size"
},

{
question: "5. Which property makes text bold?",
options: [
"A. font-style",
"B. font-weight",
"C. bold",
"D. text-weight"
],
answer: "B. font-weight"
},

{
question: "6. Which display creates flexbox?",
options: [
"A. block",
"B. inline",
"C. flex",
"D. grid"
],
answer: "C. flex"
},

{
question: "7. Which property centers text?",
options: [
"A. align",
"B. text-align",
"C. center",
"D. justify"
],
answer: "B. text-align"
},

{
question: "8. Which property adds space inside element?",
options: [
"A. margin",
"B. padding",
"C. spacing",
"D. border"
],
answer: "B. padding"
},

{
question: "9. Which property adds shadow?",
options: [
"A. shadow",
"B. box-shadow",
"C. text-shadow",
"D. border-shadow"
],
answer: "B. box-shadow"
},

{
question: "10. Media query is used for?",
options: [
"A. Database",
"B. API",
"C. Responsive Design",
"D. Animation"
],
answer: "C. Responsive Design"
}

],


js: [

{
question: "1. JavaScript is used for?",
options: [
"A. Styling",
"B. Structure",
"C. Interactivity",
"D. Database"
],
answer: "C. Interactivity"
},

{
question: "2. Which keyword declares variable?",
options: [
"A. var",
"B. int",
"C. string",
"D. value"
],
answer: "A. var"
},

{
question: "3. Which function shows popup?",
options: [
"A. message()",
"B. popup()",
"C. alert()",
"D. promptBox()"
],
answer: "C. alert()"
},

{
question: "4. Which symbol is used for comments?",
options: [
"A. //",
"B. ##",
"C. <!-- -->",
"D. **"
],
answer: "A. //"
},

{
question: "5. DOM stands for?",
options: [
"A. Document Object Model",
"B. Data Object Management",
"C. Digital Order Model",
"D. Desktop Object Method"
],
answer: "A. Document Object Model"
},

{
question: "6. Which method selects element by ID?",
options: [
"A. getElement()",
"B. querySelector()",
"C. getElementById()",
"D. selectId()"
],
answer: "C. getElementById()"
},

{
question: "7. Which loop repeats code?",
options: [
"A. if",
"B. switch",
"C. loop",
"D. for"
],
answer: "D. for"
},

{
question: "8. Which event occurs on button click?",
options: [
"A. hover",
"B. click",
"C. mouse",
"D. load"
],
answer: "B. click"
},

{
question: "9. Which operator checks equality?",
options: [
"A. =",
"B. ==",
"C. :=",
"D. =>"
],
answer: "B. =="
},

{
question: "10. Which method converts JSON?",
options: [
"A. JSON.parse()",
"B. JSON.convert()",
"C. JSON.change()",
"D. JSON.modify()"
],
answer: "A. JSON.parse()"
}

]

};


/* Variables */

let currentCategory = "";
let currentQuestion = 0;

let correctScore = 0;
let wrongScore = 0;


/* Load Quiz */

function loadQuiz(category){

    currentCategory = category;
    currentQuestion = 0;

    showQuestion();

}


/* Show Question */

function showQuestion() {

    let quiz = quizData[currentCategory][currentQuestion];

    document.getElementById("quiz-title").innerText =
        currentCategory.toUpperCase() + " Quiz";

    document.getElementById("question-number").innerText =
        "Question " + (currentQuestion + 1) + " of 10";

    document.getElementById("question").innerText =
        quiz.question;

    let optionButtons = document.querySelectorAll(".option");

    for (let i = 0; i < 4; i++) {

        optionButtons[i].innerText = quiz.options[i];

        optionButtons[i].disabled = false;

        optionButtons[i].classList.remove("correct");
        optionButtons[i].classList.remove("wrong");

        optionButtons[i].onclick = function () {
            checkAnswer(optionButtons[i], quiz.answer);
        };

    }
}


/* Check Answer */

function checkAnswer(button, correctAnswer) {

    let optionButtons = document.querySelectorAll(".option");

    optionButtons.forEach(btn => {

        btn.disabled = true;

        if (btn.innerText === correctAnswer) {
            btn.classList.add("correct");
        }

    });

    if (button.innerText === correctAnswer) {

        correctScore++;

    } else {

        button.classList.add("wrong");

        wrongScore++;
    }

    document.getElementById("correct-score").innerText =
        correctScore;

    document.getElementById("wrong-score").innerText =
        wrongScore;

    document.getElementById("total-score").innerText =
        correctScore * 10;
}


/* Next Question */

function nextQuestion(){

    if(currentQuestion < 9){

        currentQuestion++;

        showQuestion();

    }

}


/* Previous Question */

function previousQuestion(){

    if(currentQuestion > 0){

        currentQuestion--;

        showQuestion();

    }

}


// Image Carousel

const images = [
    "https://cdn-images-1.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg",
    "https://c8.alamy.com/comp/2DAW2W1/web-development-inscription-against-laptop-and-code-background-learn-web-development-programming-language-computer-courses-training-2DAW2W1.jpg",
    "https://tse1.mm.bing.net/th/id/OIP.xi_VY54V535hztHz11VTyQHaFL?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ="
];

let index = 0;

function showImage() {

    document.getElementById("slider").src = images[index];

}

function nextImage() {

    index++;

    if(index >= images.length){
        index = 0;
    }

    showImage();

}

function prevImage() {

    index--;

    if(index < 0){
        index = images.length - 1;
    }

    showImage();

}


// Auto Slide

setInterval(nextImage, 3000);


// Fetch Weather API

async function getWeather() {

    let city = document.getElementById("city").value;

    let weatherResult =
    document.getElementById("weatherResult");

    if(city === "") {
        weatherResult.innerHTML = "Please enter city name";
        return;
    }

    try {

        let url = `https://wttr.in/${city}?format=j1`;

        let response = await fetch(url);
        let data = await response.json();

        let temp = data.current_condition[0].temp_C;
        let desc = data.current_condition[0].weatherDesc[0].value;
        let humidity = data.current_condition[0].humidity;

        weatherResult.innerHTML = `
            <h3>${city}</h3>
            <p>Temperature: ${temp} °C</p>
            <p>Weather: ${desc}</p>
            <p>Humidity: ${humidity}%</p>
        `;

    } catch(error) {
        weatherResult.innerHTML = "Error fetching weather data";
    }
}