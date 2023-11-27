import {
	containerAllElement,
	optionContainerElement,
	questionH2Element
} from './dom';
import { QUESTIONS } from './questions';

export const playerChoices = [];
export const correctAnswers = [];

export const createQuestion = numberOfQuestion => {
	document.querySelectorAll('p').forEach(p => p.remove());
	questionH2Element.textContent = QUESTIONS[numberOfQuestion].question;
	QUESTIONS[numberOfQuestion].options.forEach(option => {
		const newP = document.createElement('p');
		newP.textContent = option;
		optionContainerElement.append(newP);
	});
};

export const showResults = () => {
	containerAllElement.innerHTML = '';
	const newH2 = document.createElement('H2');
	newH2.textContent = 'Results';
	containerAllElement.append(newH2);
	for (let index = 0; index < QUESTIONS.length; index++) {
		const fragment = document.createDocumentFragment();
		const newDiv = document.createElement('div');
		newDiv.textContent = QUESTIONS[index].question;
		fragment.append(newDiv);
		const newDiv2 = document.createElement('div');
		const newSpan = document.createElement('span');
		newSpan.textContent = correctAnswers[index];
		newDiv2.append(newSpan);
		const newSpan2 = document.createElement('span');
		newSpan2.textContent = playerChoices[index];
		if (correctAnswers[index] === playerChoices[index]) {
			newSpan2.classList.add('correct');
		} else {
			newSpan2.classList.add('incorrect');
		}
		newDiv2.append(newSpan2);
		fragment.append(newDiv2);
		containerAllElement.append(fragment);
	}
};
