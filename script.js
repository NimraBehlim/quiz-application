var mcqs = [
    {
        question: "Q. How do you create a function in JavaScript?",
        answers: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function => myFunction()"],
        correct: 0
    },
    {
        question: "Q. Which of the following is not a CSS box model property?",
        answers: ["margin", "padding", "border-radius", "border-collapse"],
        correct: 3
    },
    {
        question: "Q. Which of the following is not a JavaScript data type?",
        answers: ["string", "boolean", "object", "float"],
        correct: 3
    },
    {
        question: "Q. Which CSS property controls the text size?",
        answers: ["font-size", "text-size", "font-style", "text-style"],
        correct: 0
    },
    {
      question: "Q. Which JavaScript data type is used to represent true or false values?",
        answers: [ "Number" , "String" , "Boolean" , "Object" ] ,
        correct: 2
    },
];

var current = 0;
var score = 0;

function load() {
    var question = mcqs[current];
    document.getElementById("question").innerHTML = question.question;

    var answersHtml = '';

    for (var i = 0; i < question.answers.length; i++) {
        answersHtml += '<div class="form-check"><input class="form-check-input" type="radio" name="answer" value="' + i + '"> <label class="form-check-label">' + question.answers[i] + '</label></div>';
    }

    document.getElementById("answer").innerHTML = answersHtml;
    document.getElementById("answer").innerHTML += '<br><button class="btn btn-primary" onclick="submitAnswer()">Submit Answer</button>';
}

function submitAnswer() {
    var selected = document.querySelector('input[name="answer"]:checked');

    if (selected) {
        var selectedValue = parseInt(selected.value);
        checkAnswer(selectedValue);
    } else {
        alert("Please select an answer!");
    }
}

function checkAnswer(selected) {
    if (selected === mcqs[current].correct) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
    current++;
    if (current < mcqs.length) {
        load();
    } else {
        document.getElementById("question").innerHTML = 'Quiz over! You scored ' + score + ' out of ' + mcqs.length + '.';
        document.getElementById("answer").innerHTML = "";
    }
}

(function () {
    load();
})();