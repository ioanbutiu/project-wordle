import React from 'react';

function GuessInput({ handleGuess }) {
	const [guess, setGuess] = React.useState('');
	return (
		<>
			<form
				className="guess-input-wrapper"
				onSubmit={(event) => {
					event.preventDefault();
					handleGuess(guess);
					setGuess('');
				}}>
				<label htmlFor="guess-input">Enter Guess:</label>
				<input
					id="guess-input"
					type="text"
					value={guess}
					pattern="[A-Z]{5}"
					onChange={(e) => {
						setGuess(e.target.value.toUpperCase());
						console.log(e.target.value);
					}}
				/>
			</form>
		</>
	);
}

export default GuessInput;
