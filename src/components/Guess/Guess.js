import React from 'react';
import { range } from '../../utils';

function Guess({ result = '' }) {
	return (
		<p className="guess">
			{result
				? result.map((result, index) => (
						<span className={`cell ${result.status}`} key={index}>
							{result.letter}
						</span>
				  ))
				: range(5).map((num) => <span className="cell" key={num}></span>)}
		</p>
	);
}

export default Guess;
