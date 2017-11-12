
var names = ['Alex', 'John', 'Jay'];
var scores = [];
var scoreVal1 = 1;
var scoreVal2 = 1;
var audioCorrect;
var audioIncorrect;

function playCorrect(){
	audioIncorrect.pause();
	audioCorrect.currentTime = 0;
	audioCorrect.play();
}

function playIncorrect(){
	audioCorrect.pause();
	audioIncorrect.currentTime = 0;
	audioIncorrect.play();
}

function addScore(ind, sind){
	if (sind == 1) {
		updateScore(ind, scoreVal1);
	} else {
		updateScore(ind, scoreVal2);
	}
	playCorrect();
}

function subtractScore(ind, sind){
	if (sind == 1) {
		updateScore(ind, -scoreVal1);
	} else {
		updateScore(ind, -scoreVal2);
	}
	playIncorrect();
}

function setScore(sind){
	if (sind == 1) {
		scoreVal1 = parseInt($('#score-setter-1').val());
		$('.score-val-1').html(scoreVal1.toString());
	} else {
		scoreVal2 = parseInt($('#score-setter-2').val());
		$('.score-val-2').html(scoreVal2.toString());
	}
}

function setPlayer(ind){
	nameVal = $('#name-setter-' + ind).val();
	names[parseInt(ind)-1] = nameVal;
	$('#name-' + ind.toString()).html(nameVal);
}

function updateScore(ind, incScore){
	var oldScore = scores[parseInt(ind)-1];
	scores[parseInt(ind)-1] = oldScore + incScore;
	$('#score-' + (ind).toString()).html(oldScore + incScore);
	// console.log([ind, (ind).toString(), oldScore, oldScore+incScore]);
}

function initNames(){
	for (i=0; i<names.length; i++) {
		$('#name-' + (i+1).toString()).html(names[i]);
	}
}

function initScores(){
	for (i=0; i<names.length; i++) {
		scores.push(0);
		$('#score-' + (i+1).toString()).html('0');
	}
	$('.score-val-1').html(scoreVal1.toString());
	$('.score-val-2').html(scoreVal2.toString());
}

function initSounds(){
	audioCorrect = document.getElementById("audio-correct");
	audioIncorrect = document.getElementById("audio-incorrect");
}

function init(){
	initNames();
	initScores();
	initSounds();
}

$(document).ready(function(){
	init();
});
