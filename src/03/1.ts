import { lines } from '../util';

const az = 'abcdefghijklmnopqrstuvwxyz';
const AZ = az.toUpperCase();

export default function getScore(input: string) {
	return lines(input).reduce((sum, line) => {
		const [leftBag, rightBag] = [
			new Set(line.slice(0, line.length / 2).split('')),
			new Set(line.slice(line.length / 2).split('')),
		];
		let commonItem = '';

		for (const item of leftBag) {
			if (rightBag.has(item)) {
				commonItem = item;
				break;
			}
		}
		if (!commonItem) {
			return sum;
		}

		const prio =
			1 +
			(az.includes(commonItem)
				? az.indexOf(commonItem)
				: 26 + AZ.indexOf(commonItem));

		return sum + prio;
	}, 0);
}
