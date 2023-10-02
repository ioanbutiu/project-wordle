import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList/';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessList, setGuessList] = React.useState([]);

	function handleGuess(guess) {
		const newGuess = {
			guess,
			key: crypto.randomUUID(),
		};

		const nextGuesses = [...guessList, newGuess];
		setGuessList(nextGuesses);
	}

	return (
		<>
			<GuessResults />
			<GuessInput handleGuess={handleGuess} />
			<GuessList guessList={guessList} />
		</>
	);
}

export default Game;
