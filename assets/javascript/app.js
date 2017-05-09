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


var correct = 0;
var incorrect = 0;

// Question objects
var questionSet = {
	1: {
		text: "The giant panda's diet is 99% this.",
		option1: "Bamboo",
		option2: "Bananas",
		option3: "Honey",
		option4: "Fish",
		answer: "Bamboo"
	},  

	2: {
		text: "Pandas live in the mountains in the Sichuan, Shaanxi, and Gansu provinces in this country.",
		option1: "China",
		option2: "Thailand",
		option3: "Mongolia",
		option4: "Korea",
		answer: "China"
	},

	3: {
		text: "At birth, pandas weigh about 4 ounces and are the size of a stick of butter. Which of these is NOT true about a newborn panda?",
		option1: "They are grey in color.",
		option2: "They are hairless.",
		option3: "They nurse up to 14 times a day.",
		option4: "They are blind.",
		answer: "They are grey in color."
	},

	4: {
		text: "Pandas do not hibernate.",
		option1: "True",
		option2: "False",
		answer: "True"
	},

	5: {
		text: "Pandas live and travel together.",
		option1: "True",
		option2: "False",
		answer: "False"
	},
	6: {
		text: "Pandas spend 10-16 hours a day eating, the rest of the time they are usually resting. When are pandas most active?",
		option1: "Between 2p and 10pm",
		option2: "Only at night",
		option3: "Between 10am and 2pm",
		option4: "At dusk and at dawn",
		answer: "At dusk and at dawn"
	},
	7: {
		text: "When a panda is born, it is impossible to tell if it is male or female. How old is the panda before its gender is known?",
		option1: "3 months",
		option2: "4 years",
		option3: "6 months",
		option4: "1 year",
		answer: "4 years"

	},
	8: {
		text: "Which of these is TRUE about pandas?",
		option1: "They belong to the raccoon family.",
		option2: "They are carnivores.",
		option3: "They were unknown to the Western world until the 1600s. ",
		option4: "They are poor climbers.",
		answer: "They are carnivores."
	},
	9: {
		text: "How long does a panda usually live in captivity?",
		option1: "80 - 90 years",
		option2: "55 - 65 years",
		option3: "10 - 15 years",
		option4: "20 - 30 years",
		answer: "20 - 30 years"
	},
	10: {
		text: "The panda has an enlarged wristbone that works as an opposable thumb.",
		option1: "True",
		option2: "False",
		answer: "True"
	},
}


// New trivia
$(document).ready(function() {
	console.log('ready');

	// Create start button
	var x = "<button id='start-btn'>Start Game</button>";
	$('#trivia').append(x);
	$('#start-btn').click(startGame);
	// var startButton = $('#start-btn');
	// $('input:radio').val('question');
});

function startGame() {
	console.log('start');

	// Create the first question and show it
	firstQuestion();

	// Display starting score of 0
	$('#scores-box').html('Correct: ' + correct + '<br> Incorrect: ' + incorrect);

	// Hide the start button after it's clicked
	$('#start-btn').hide();
}

function firstQuestion() {

	// Loop through each element in the questions object and display it
	// var x;
	// for (x in questionSet) {
	// 	// Adds the question to the question box
	// 	$('#question-box').html(questionSet[x].text);

	// 	// Create radio button for each question
	// 	$('#option-box').html('<input type="radio" name="action" id="option1">' + questionSet[x].option1 
	// 		+ '<br>');
	// 	$('#option1').val(questionSet[x].option1);
	// 	$('#option-box').append('<input type="radio" name="action"  id="option2">' + questionSet[x].option2 
	// 		+ '<br>');
	// 	$('#option2').val(questionSet[x].option2);
	// 	$('#option-box').append('<input type="radio" name="action" id="option3">' + questionSet[x].option3 + '<br>');
	// 	$('#option3').val(questionSet[x].option3);
	// 	$('#option-box').append('<input type="radio" name="action"  id="option4">' + questionSet[x].option4 + '<br>');
	// 	$('#option4').val(questionSet[x].option4);
	// }


 	loadQuestion();

}

var x;
x = 1;


function loadQuestion() {
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

			// Submits the form when a radio button is clicked
	$('input[type=radio]').on('change', function() {

		// If the clicked button matches the answer, show correct
		if (this.value === questionSet[x].answer) {
			$('#reveal-box').html("Correct!");
			correct++;
			$('#scores-box').html('Correct: ' + correct + '<br> Incorrect: ' + incorrect);
			setTimeout(nextQuestion, 3000);
		}
		// Adds the correct answer to the reveal box
		else {
			$('#reveal-box').html("Wrong, the correct answer is " + questionSet[x].answer);
			incorrect++;
			$('#scores-box').html('Correct: ' + correct + '<br> Incorrect: ' + incorrect);
			setTimeout(nextQuestion, 3000);
		}
	
		// $('form').submit();
		// $('<form>').submit(timer);

		// Delay the next question after a radio is checked

	});

	timer();

}

function nextQuestion() {
	console.log('nextup');
	x = x + 1;
	loadQuestion();
}

function timer() {
	t = 30;
	$('#timer-box').html('00:30');
	var countDown = setInterval(timerCount, 1000);
}

function timerCount() {
	t--; 
	$('#timer-box').html(t);

	// Stop timer at 0
	if (t <= 0) {
		clearInterval(countDown);
		var x;
		$('#reveal-box').html("You're out of time! The correct answer is " + questionSet[x].answer);
		nextQuestion();
		console.log('done');
	}
}



// if answer matches - confrim, if not - wrong answer and 

