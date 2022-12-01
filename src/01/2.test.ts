import { assert, describe, it } from 'vitest';

import fn from './2';

describe('day 1, part 2', () => {
	it('finds the largest 3 inventories', () => {
		const input = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
		assert.equal(fn(input), '45000');
	});
});
