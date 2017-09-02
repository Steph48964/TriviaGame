var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 60;
var countdown;

var questions = [
    { 
    	question: "WHO IS BRIAN GREENE?",
            choices: [
                "Theoretical Physicist",
                "Guy from 90210",
                "Neighbor from down the street"
            ],
            answer: 0
    },
    {
        question: "TITLE OF HIS NOVA SERIES?",
            choices: [
                "The Fabric of Our Cosmos",
                "The Fabric of Our Lives",
                "The Perils of Fabric Lives"
            ],
            answer: 0
    },
    {
        question: "ORGANIZATION HE CO-FOUNDED IN 2008?",
            choices: [
                "World Science Festival",
                "As the World Turns Festival",
                "Science is Cool Festival"
            ],
            answer: 0
    },
    {
        question: "WHICH OF THESE IS NOT A SUBJECT MATTER OF HIS TEDTALKS?",
            choices: [
                "String Theory",
                "Multiverse",
                "String(thing)"
            ],
            answer: 2
    },
    {
        question: "TITLE OF HIS CHILDREN'S BOOK?",
            choices: [
                "Icarus at the Edge of Time",
                "The Relevance of Time",
                "In Due Time"
            ],
            answer: 0
    },
    {
        question: "WHICH OF THESE IS NOT ONE OF HIS BOOK TITLES?",
            choices: [
                "The Elegant Universe",
                "The Hidden Reality",
                "Stringing Out"
            ],
            answer: 2
    }
];

function start() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;

    countdown = setInterval(
    function() {
        console.log(time);
        $('#timerSeconds').text(time + " seconds");
        time = time - 1;
        if(time === 0) {
            clearInterval(countdown); 
            end();
        }
    }, 1000);

    questions.forEach(function(element, index) {
        var $question = $("<div>", { id: "question" + index, class: "question"});
        
        var $questionText = $("<div>", {class: "questionText"});
        $questionText.html(element.question);
        $questionText.appendTo($question);

        for (i = 0; i < element.choices.length; i++) {
            var $radChoices = $('<span class="choices"><input type="radio" name="radChoices' + index + '" value="' + i + '" />' + element.choices[i] + '</span>');
            $radChoices.appendTo($question);
        }

        $question.appendTo('.play-game');
    }, this);
}

function end() {
    questions.forEach(function(element, index) {
        var $radChoices = $('<span class="choices"><input type="radio" name="radChoices' + index + '" value="' + i + '" />' + element.choices[i] + '</span>');
        var radChoiceMade = $('input[name=radChoices' + index + ']:checked').val();
        console.log(radChoiceMade);

        if (radChoiceMade == undefined)
        {
            unanswered++;
        }
        else if (radChoiceMade == element.answer) 
        {
            correct++;
        } else {
            incorrect++;
        }
    }, this);

    $("#Correct").text("Correct: " + correct);
    console.log("correct: " + correct);

    $("#Incorrect").text("Incorrect: " + incorrect);
    console.log("incorrect " + incorrect);

    $("#Unanswered").text("Unanswered: " + unanswered);
    console.log("unanswered " + unanswered);

    $("#start").hide();
    $("#play").hide();
    $("#end").show();
}

$(document).ready(function() {

    $("#play").hide();
    $("#end").hide();

    $("#startButton").click(function(){

        $("#start").hide();
        $("#end").hide();
        $("#play").show();
        start();
    }); 

    $("#doneButton").click(function(){
        clearInterval(countdown);
        end();
    }); 
   
});
