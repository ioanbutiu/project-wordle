import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ resultsList }) {
	return (
		<div className="guess-results">
			{resultsList.map((result, index) => (
				<Guess result={result} key={index} />
			))}
			{range(NUM_OF_GUESSES_ALLOWED - resultsList.length).map((num) => (
				<Guess key={num} />
			))}
		</div>
	);
}

export default GuessResults;
