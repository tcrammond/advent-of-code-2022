import { lines } from '../util';

export default function getNumberOfPairs(input: string) {
	const pairs = lines(input).map((str) =>
		str.split(',').map((str) => str.split('-').map(Number) as [number, number]),
	);

	let eclipsedPairs = 0;
	for (const group of pairs) {
		const [g1, g2] = group;

		if (contained(g1, g2) || contained(g2, g1)) {
			eclipsedPairs++;
		}
	}

	return eclipsedPairs;
}

const contained = (a: [number, number], b: [number, number]) =>
	a[0] <= b[1] && b[1] <= a[1] && b[0] >= a[0];
