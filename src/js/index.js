import { optionContainerElement } from './dom';
import {
	correctAnswers,
	createQuestion,
	playerChoices,
	showResults
} from './functions';
import { QUESTIONS } from './questions';

let numberOfQuestion = 0;

createQuestion(numberOfQuestion);

optionContainerElement.addEventListener('click', event => {
	if (event.target.tagName === 'P') {
		playerChoices.push(event.target.textContent);
		correctAnswers.push(QUESTIONS[numberOfQuestion].correctAnswer);
		console.log(playerChoices);
		console.log(correctAnswers);
		numberOfQuestion = numberOfQuestion + 1;
		// Verificamos si el jugador ha respondido todas las preguntas
		if (numberOfQuestion === QUESTIONS.length) {
			showResults();
		} else {
			createQuestion(numberOfQuestion);
		}
	}
});
