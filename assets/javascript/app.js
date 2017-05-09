// var questions = [
// 	"What part of your application do admissions officers read first?", 
// 	"Your Most Meaningful essay", 
// 	"How many letters of rec do you need?", 
// 	"Minimum 3",
// 	"Do medical schools care what your major is?",
// 	"Nope, not really"
// 	];

// document.getElementById("questions").innerHTML = questions[0];
// var i = 0;

// document.getElementById("start").addEventListener("click", showNext);

// function showNext() {
// 	i = i + 1; 
// 	i = i % questions.length; 
// 	document.getElementById("questions").innerHTML = questions[i];
// };


// New trivia
$(document).ready(function() {
	console.log('ready');
	var x = "<button id='start-btn'>Start Game</button>";
	$('#trivia').append(x);
	$('#start-btn').click(startGame);
	var startButton = $('#start-btn');
	$('input:radio').val('question');
});

function startGame() {
	console.log('start');
	createQuestions();

	// Hide the start button
	$('#start-btn').hide();
}

function createQuestions() {
	var x;
	for (x in questionSet) {
		console.log('ok');

		// Adds the question to the question box
		$('#question-box').html(questionSet[x].text);

		// Create radio button for each question
		$('#option-box').html('<input type="radio" name="action" id="option1">' + questionSet[x].option1 
			+ '<br>');
		$('#option1').val(questionSet[x].option1);
		$('#option-box').append('<input type="radio" name="action"  id="option2">' + questionSet[x].option2 
			+ '<br>');
		$('#option2').val(questionSet[x].option2);
		$('#option-box').append('<input type="radio" name="action" id="option3">' + questionSet[x].option3 + '<br>');
		$('#option3').val(questionSet[x].option3);
		$('#option-box').append('<input type="radio" name="action"  id="option4">' + questionSet[x].option4 + '<br>');
		$('#option4').val(questionSet[x].option4);

	}


	// Submits the form when a radio button is clicked
	$('input[type=radio]').on('change', function() {
		$('<form>').submit(nextQuestion());
			// Adds the answer to the reveal box
			$('#reveal-box').html(questionSet[x].answer);
		});


	 //Delay the next question by 20 seconds
    // setTimeout(nextQuestion, 3000);
}

function nextQuestion() {
	console.log(this);
	// y = $('<input>').value;
	// console.log(y);
	// var x;
	// x = 2;
	// if (y == questionSet.questionSet[x].answer) {
	// 	console.log('nextQuestion');
	// }

}


// Question objects
var questionSet = {
	q1: {
		text: "In the first ever episode of Sex and the City, whose birthday is it?",
		option1: "Miranda",
		option2: "Samantha",
		option3: "Charlotte",
		option4: "Carrie",
		answer: "Miranda"
	},  

	q2: {
		text: "How many 'great loves' does Charlotte say that each person gets in their lifetime?",
		option1: 0,
		option2: 1,
		option3: 2,
		option4: 3,
		answer: 2
	},

	q3: {
		text: "Which of the following breaks up with Carrie via a post-it note?",
		option1: "Aiden",
		option2: "Berger",
		option3: "Jeremy",
		option4: "Mr. Big",
		answer: "Berger"
	},

}

// if answer matches - confrim, if not - wrong answer and 

