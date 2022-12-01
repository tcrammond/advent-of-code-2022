import { greatest, sum } from '../math';

export default function bagCaloriesTopThree(input: string) {
	const bagSums = input
		.split('\n\n')
		.map((bag) => +bag.split('\n').reduce(sum, 0))
		.sort((a, b) => a - b);

	return bagSums.slice(-3).reduce(sum, 0);
}
