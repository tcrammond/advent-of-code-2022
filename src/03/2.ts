import { lines } from '../util';

import { getPrio } from './1';

export default function getScore(input: string) {
	const bags = lines(input);
	let sum = 0;

	for (let index = 0; index < bags.length; index += 3) {
		const items = [
			new Set(bags[index].split('')),
			new Set(bags[index + 1].split('')),
			new Set(bags[index + 2].split('')),
		];

		for (const item of items[0]) {
			if (items[1].has(item) && items[2].has(item)) {
				sum += getPrio(item);
				break;
			}
		}
	}

	return sum;
}
