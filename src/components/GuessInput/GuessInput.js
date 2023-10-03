import React from 'react';

function GuessInput({ handleGuess, disabled }) {
	const [guess, setGuess] = React.useState('');
	return (
		<>
			<form
				className="guess-input-wrapper"
				onSubmit={(event) => {
					event.preventDefault();
					handleGuess(guess);
					setGuess('');
				}}
				style={disabled ? { opacity: '25%' } : { opacity: '100%' }}>
				<label htmlFor="guess-input">Enter Guess:</label>
				<input
					id="guess-input"
					type="text"
					value={guess}
					disabled={disabled}
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
