import { describe, it, expect } from 'vitest';

import fn from './1';

const input = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

describe('day 3, part 1', () => {
	it('finds the sum of priority of the missorted item in each bag', () => {
		expect(fn(input)).toBe(157);
	});
});
