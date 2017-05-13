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
		text: "Pandas spend most of their day eating, the rest of the time they are usually resting. When are pandas most active?",
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
		text: "How old is the oldest Giant Panda, named Jia Jia?",
		option1: "48 years old",
		option2: "37 years old",
		option3: "52 years old",
		option4: "61 years old",
		answer: "37 years old"
	}
var q10 = {
		text: "How many hours do pandas spend eating a day?",
		option1: "1 - 2 hours",
		option2: "3 - 5 hours",
		option3: "6 - 9 hours",
		option4: "10 - 16 hours",
		answer: "10 - 16 hours"
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

	randomize();

	// Create the first question and show it
	firstQuestion();

	// Display starting score of 0
	$('#scores-box').html('Correct: ' + correct + '<br> Incorrect: ' + incorrect);

	// Hide the start button after it's clicked
	$('#start-btn').hide();

}

function randomize() {
	questionSet.sort(function(a, b){return 0.5 - Math.random()});
	console.log(questionSet);
}

function firstQuestion() {
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
			$('#reveal-box').html("You're out of time! The correct answer is " + questionSet[x].answer).attr('class', 'red');
			$('#timer-box').html("0 seconds");
			incorrect++;
			$('#scores-box').html('Correct: ' + correct + '<br> Incorrect: ' + incorrect);
					
			
			clearInterval(countDown);
			setTimeout(nextQuestion, 3000);
		}

	}
	
	$('#option-box').show();

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

		// Keep item highlighted on selection
		$(this).attr('background', '#000');

		// If the clicked button matches the answer, show correct
		if (this.innerHTML === questionSet[x].answer) {
			$('#reveal-box').html("Correct!<br/>").attr('class', 'green');

			// Increase correct
			correct++;
			$('#scores-box').html('Correct: ' + correct + '<br> Incorrect: ' + incorrect);
			
			// Turn off click listeners
			$('.answer').off('click');
			clearInterval(countDown);
			setTimeout(nextQuestion, 3000);
		}

		// If the clicked button  doesn't match, adds the correct answer to the reveal box
		else {
			$('#reveal-box').html('Wrong! The correct answer is <b>"' + questionSet[x].answer + '"</b><br/>').attr('class', 'red');
			
			// Increase incorrect
			incorrect++;
			$('#scores-box').html('<br>Correct: ' + correct + '<br> Incorrect: ' + incorrect);
			
			// Turn off click listeners
			$('.answer').off('click');
			clearInterval(countDown);
			setTimeout(nextQuestion, 3000);
		}

		$('#option-box').hide();

		var queryURL = "https://api.giphy.com/v1/gifs/search?q=panda&api_key=dc6zaTOxFJmzC";

	    $.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response) {
	      console.log(response);
	      $('#reveal-box').append('<img src="' + response.data[Math.floor((Math.random() * 25) + 1)].images.fixed_height.url + '">');
	    });
	
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
	if (correct <= 3) {
		$('#trivia').html('Not great =( <br/> Study up on your panda facts and play again.<br/>');
	}
	else if (correct > 3) {
		$('#trivia').html('<p>You are a panda expert! Play again if you love pandas.<p>');
	}

	$('#trivia').append('<h2>Final Score</h2><div class="final-score bottom-spacer">Correct: ' + correct + '<br> Incorrect: ' 
		+ incorrect + '<br></div>');
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=panda&api_key=dc6zaTOxFJmzC";
	$.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      $('#reveal-box').append('<img src="' + response.data[Math.floor((Math.random() * 25) + 1)].images.fixed_height.url + '">');
    });

	var x = "<button id='restart-btn'>Play Again</button>";
	$('#trivia').append(x);
	$('#restart-btn').click(function(){location.reload();});
}

