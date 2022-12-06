import { describe, it, expect } from 'vitest';

import fn from './2';

const inputs: [string, number][] = [
	['mjqjpqmgbljsphdztnvjfqwrcgsmlb',19],
	['bvwbjplbgvbhsrlpgdmjqwftvncz', 23],
	['nppdvjthqldpwncqszvftbrmjlhg', 23],
	['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 29],
	['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 26],
]

describe('day 6, part 2', () => {
	it('find the character at which the first start-of-message marker is reached', () => {
		inputs.forEach((input) => {
			expect(fn(input[0])).toBe(input[1])
		})
	});
});
