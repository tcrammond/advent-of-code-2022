import { describe, it, expect } from 'vitest';

import fn from './2';

const input = `
A Y
B X
C Z
`;

describe('day 2, part 2', () => {
	it('works', () => {
		expect(fn('A X')).toBe(3); // rock, lose
		expect(fn('A Y')).toBe(4); // rock, draw
		expect(fn('A Z')).toBe(8); // rock, win

		expect(fn(input)).toBe(12);
	});
});
