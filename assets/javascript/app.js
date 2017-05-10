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
var q1 = {
		text: "The giant panda's diet is 99% this.",
		option1: "Bamboo",
		option2: "Bananas",
		option3: "Honey",
		option4: "Fish",
		answer: "Bamboo"
	} 

var q2 = {
		text: "Pandas live in the mountains in the Sichuan, Shaanxi, and Gansu provinces in this country.",
		option1: "China",
		option2: "Thailand",
		option3: "Mongolia",
		option4: "Korea",
		answer: "China"
	}

var q3 = {
		text: "At birth, pandas weigh about 4 ounces and are the size of a stick of butter. Which of these is NOT true about a newborn panda?",
		option1: "They are grey in color.",
		option2: "They are hairless.",
		option3: "They nurse up to 14 times a day.",
		option4: "They are blind.",
		answer: "They are grey in color."
	}

var q4 = {
		text: "A group of pandas is called",
		option1: "A posse",
		option2: "A pack",
		option3: "An embarassment",
		option4: "A herd",
		answer: "An embarassment"
	}

var q5 = {
		text: "How many fingers does a Giant Panda have on a single paw?",
		option1: "4",
		option2: "5",
		option3: "6",
		option4: "7",
		answer: "6"
	}

var q6 = {
		text: "Pandas spend 10-16 hours a day eating, the rest of the time they are usually resting. When are pandas most active?",
		option1: "Between 2p and 10pm",
		option2: "Only at night",
		option3: "Between 10am and 2pm",
		option4: "At dusk and at dawn",
		answer: "At dusk and at dawn"
	}
var q7 = {
		text: "When a panda is born, it is impossible to tell if it is male or female. How old is the panda before its gender is known?",
		option1: "3 months",
		option2: "4 years",
		option3: "6 months",
		option4: "1 year",
		answer: "4 years"

	}
var q8 = {
		text: "Which of these is TRUE about pandas?",
		option1: "They belong to the raccoon family.",
		option2: "They are carnivores.",
		option3: "They were unknown to the Western world until the 1600s. ",
		option4: "They are poor climbers.",
		answer: "They are carnivores."
	}
var q9 = {
		text: "How long does a panda usually live in captivity?",
		option1: "80 - 90 years",
		option2: "55 - 65 years",
		option3: "10 - 15 years",
		option4: "20 - 30 years",
		answer: "20 - 30 years"
	}
var q10 = {
		text: "The panda has an enlarged wristbone that works as an opposable thumb.",
		option1: "True",
		option2: "False",
		answer: "True"
	}

var questionSet = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// New trivia
$(document).ready(function() {
	console.log('ready');

	// Create start button
	var x = "<button id='start-btn'>Start Game</button>";
	$('#trivia').append(x);
	$('#start-btn').click(startGame);

});


// Starts game on click of start button
function startGame() {
	console.log('start');

	// Create the first question and show it
	firstQuestion();

	// Display starting score of 0
	$('#scores-box').html('Correct: ' + correct + '<br> Incorrect: ' + incorrect);

	// Hide the start button after it's clicked
	$('#start-btn').hide();

	var x = "<button id='restart-btn'>Restart</button>";
	$('#restart-box').append(x);
	$('#restart-btn').click(function(){location.reload();});
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
x = 0;

var countDown;

function loadQuestion() {

	t = 20;
	$('#timer-box').html(t + ' seconds');
	var countDown = setInterval(timerCount, 1000);

	function timerCount() {
		t--; 
		$('#timer-box').html(t + ' seconds');

		// Stop timer at 0
		if (t <= 0) {
			// var x;
			$('#reveal-box').html("You're out of time! The correct answer is ");
			$('#timer-box').html("0 seconds");
			incorrect++;
			$('#scores-box').html('Correct: ' + correct + '<br> Incorrect: ' + incorrect);
					
			setInterval(nextQuestion(), 3000);

			clearInterval(countDown);
		}

	}

	$('#question-box').html(questionSet[x].text);
	// Create radio button for each question
	$('#option-box').html('<li id="option1" class="answer">' + questionSet[x].option1
		+ '</li><br>');
	// $('#option1').val(questionSet[x].option1);
	$('#option-box').append('<li id="option2" class="answer">' + questionSet[x].option2 
		+ '</li><br>');
	// $('#option2').val(questionSet[x].option2);
	$('#option-box').append('<li id="option3" class="answer">' + questionSet[x].option3 
		+ '</li><br>');
	// $('#option3').val(questionSet[x].option3);
	$('#option-box').append('<li id="option4" class="answer">' + questionSet[x].option4 
		+ '</li><br>');
	// $('#option4').val(questionSet[x].option4);

	$('#reveal-box').html('');

	// Changes when the link is clicked
	$('.answer').on('click', function() {

		// If the clicked button matches the answer, show correct
		if (this.innerHTML === questionSet[x].answer) {
			$('#reveal-box').html("Correct!");
			correct++;
			$('#scores-box').html('Correct: ' + correct + '<br> Incorrect: ' + incorrect);
			
			
			$(this).attr('background', '#000');
			$('.answer').off('click');
			clearInterval(countDown);
			setTimeout(nextQuestion, 3000);
		}

		// If the clicked button  doesn't match, adds the correct answer to the reveal box
		else {
			$('#reveal-box').html("Wrong, the correct answer is " + questionSet[x].answer);
			incorrect++;
			$('#scores-box').html('Correct: ' + correct + '<br> Incorrect: ' + incorrect);
			
			
			$(this).attr('background', '#000');
			$('.answer').off('click');
			clearInterval(countDown);
			setTimeout(nextQuestion, 3000);
		}
	
		// $('form').submit();
		// $('<form>').submit(timer);

		// Delay the next question after a radio is checked

	});

	

}

function nextQuestion() {
	x = x + 1;

	if (x === 10) {
		console.log(10);
		endGame(); 
	}

	else {
		loadQuestion();
	}
}


function endGame() {
	console.log('end');
	$('#trivia').html('<h2>Good game!</h2> Correct: ' + correct + '<br> Incorrect: ' 
		+ incorrect);
	var x = "<button id='restart-btn'>Restart</button>";
	$('#trivia').append(x);
	$('#restart-btn').click(function(){location.reload();});
}


// function timer() {
// 	t = 20;
// 	$('#timer-box').html(t + ' seconds');
// 	var countDown = setInterval(timerCount, 1000);

// 	function timerCount() {
// 		t--; 
// 		$('#timer-box').html(t + ' seconds');

// 		// Stop timer at 0
// 		if (t <= 0) {
// 			// var x;
// 			$('#reveal-box').html("You're out of time! The correct answer is ");
// 			$('#timer-box').html("0 seconds");
// 			incorrect++;
// 			$('#scores-box').html('Correct: ' + correct + '<br> Incorrect: ' + incorrect);
					
// 			setInterval(nextQuestion(), 3000);

// 			clearInterval(countDown);
// 		}

// 	}

// }




// if answer matches - confrim, if not - wrong answer and 

