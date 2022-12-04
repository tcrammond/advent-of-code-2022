import { describe, it, expect } from 'vitest';

import fn from './2';

const input = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

describe('day 3, part 2', () => {
	it('finds the sum of priority of the common item in each 3 bags', () => {
		expect(fn(input)).toBe(70);
	});
});
