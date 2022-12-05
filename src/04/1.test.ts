import { describe, it, expect } from 'vitest';

import fn from './1';

const input = `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`;

describe('day 4, part 1', () => {
	it('finds how many "completely eclipsed" pairs of number ranges there are', () => {
		expect(fn(input)).toBe(2);
	});
	it('avoids tricky hobbitses', () => {
		expect(fn('3-97,2-2')).toBe(0);
	});
});
