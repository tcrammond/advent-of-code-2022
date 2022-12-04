import { lines } from '../util';
import { score } from './1';

export default function getScore(input: string) {
	return lines(input).reduce(
		(sum, line) => {
			const [them, goal] = line.split(' ');
			const i = 'ABC'.indexOf(them);
			return (
				sum +
				score(
					them,
					goal === 'Y'
						? 'XYZ'[i]
						: goal === 'X'
						? 'XYZ'[(i + 2) % 3]
						: 'XYZ'[(i + 1) % 3],
				)
			);
		},

		0,
	);
}
