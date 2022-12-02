import { lines } from '../util';

export default function getScore(input: string) {
	return lines(input).reduce((sum, line) => sum + score(line[0], line[2]), 0);
}

export const score = (them: string, us: string) => {
	const i = 'XYZ'.indexOf(us);
	const j = 'ABC'.indexOf(them);
	return i + 1 + (i === j ? 3 : (i + 2) % 3 === j ? 6 : 0);
};
