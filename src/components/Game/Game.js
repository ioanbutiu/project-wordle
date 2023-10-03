import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessList, setGuessList] = React.useState([]);
	const [resultsList, setResultsList] = React.useState([]);
	const [isCorrect, setIsCorrect] = React.useState(false);
	const [isCompleted, setIsCompleted] = React.useState(false);

	function handleGuess(guess) {
		if (guess === answer) {
			setIsCorrect(true);
			setIsCompleted(true);
		}

		if (guessList.length + 1 === NUM_OF_GUESSES_ALLOWED) {
			setIsCompleted(true);
		}

		const newGuess = {
			value: guess,
			key: crypto.randomUUID(),
		};

		const nextGuesses = [...guessList, newGuess];
		setGuessList(nextGuesses);

		const newResult = checkGuess(guess, answer);
		const nextResults = [...resultsList, newResult];
		setResultsList(nextResults);
	}

	return (
		<>
			<GuessResults resultsList={resultsList} />
			<GuessInput handleGuess={handleGuess} disabled={isCompleted} />
			{isCompleted && <Banner answer={answer} isCorrect={isCorrect} guesses={guessList.length} />}
		</>
	);
}

export default Game;
