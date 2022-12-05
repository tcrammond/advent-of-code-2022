import { lines } from '../util';

export default function getNumberOfPairs(input: string) {
	const pairs = lines(input).map((str) =>
		str
			.split(',')
			.map((str) => str.split('-').map(Number) as [number, number])
			.sort((a, b) => (b[0] > a[0] ? -1 : 1)),
	);

	let eclipsedPairs = 0;

	for (const group of pairs) {
		const [g1, g2] = group;
		if (overlapped(g1, g2)) {
			eclipsedPairs++;
		}
	}

	return eclipsedPairs;
}

const overlapped = (a: [number, number], b: [number, number]) =>
	b[0] <= a[1] || a[0] >= b[0];
