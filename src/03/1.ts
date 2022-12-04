import { lines } from '../util';

export const az = 'abcdefghijklmnopqrstuvwxyz';
export const AZ = az.toUpperCase();

export default function getScore(input: string) {
	return lines(input).reduce((sum, line) => {
		const [leftBag, rightBag] = [
			new Set(line.slice(0, line.length / 2).split('')),
			new Set(line.slice(line.length / 2).split('')),
		];

		for (const item of leftBag) {
			if (rightBag.has(item)) {
				return sum + getPrio(item);
			}
		}

		return sum;
	}, 0);
}

export const getPrio = (item: string) =>
	1 + (az.includes(item) ? az.indexOf(item) : 26 + AZ.indexOf(item));
