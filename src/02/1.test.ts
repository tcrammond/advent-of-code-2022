import { describe, it, expect } from 'vitest';

import fn, { score } from './1';

const input = `
A Y
B X
C Z
`;

describe('day 2, part 1', () => {
	it('works', () => {
		expect(fn(input)).toBe(15);
	});
});

describe.each([
	{ a: 'C', b: 'X', expected: 7 },
	{ a: 'A', b: 'Y', expected: 8 },
	{ a: 'B', b: 'Z', expected: 9 },
])('score', ({ a, b, expected }) => {
	it(`scores ${a} vs ${b}`, () => {
		expect(score(a, b)).toBe(expected);
	});
});
