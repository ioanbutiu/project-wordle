import React from 'react';
import { range } from '../../utils';

function GuessResults() {
	return (
		<div>
			{range(6).map((num) => (
				<p className="guess" key={num}>
					{range(5).map((num) => (
						<span className="cell" key={num}></span>
					))}
				</p>
			))}
		</div>
	);
}

export default GuessResults;
