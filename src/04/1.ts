import { lines } from '../util';

export const az = 'abcdefghijklmnopqrstuvwxyz';
export const AZ = az.toUpperCase();

const input = `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`;

export default function getNumberOfPairs(input: string) {
	/*
	[
  [ [ '2', '4' ], [ '6', '8' ] ],
  [ [ '2', '3' ], [ '4', '5' ] ],
  [ [ '5', '7' ], [ '7', '9' ] ],
  [ [ '2', '8' ], [ '3', '7' ] ],
  [ [ '6', '6' ], [ '4', '6' ] ],
  [ [ '2', '6' ], [ '4', '8' ] ]
]
	*/
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

export const getPrio = (item: string) =>
	1 + (az.includes(item) ? az.indexOf(item) : 26 + AZ.indexOf(item));
