import { describe, it, expect } from 'vitest';

import fn from './1';

const inputs: [string, number][] = [
	['mjqjpqmgbljsphdztnvjfqwrcgsmlb',7],
	['bvwbjplbgvbhsrlpgdmjqwftvncz', 5],
	['nppdvjthqldpwncqszvftbrmjlhg', 6],
	['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 10],
	['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 11],
]

describe('day 6, part 1', () => {
	it('find the character at which the first start-of-packet marker is reached', () => {
		inputs.forEach((input) => {
			expect(fn(input[0])).toBe(input[1])
		})
	});
});
