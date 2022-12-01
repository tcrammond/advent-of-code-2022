import { assert, describe, it } from 'vitest';

import fn from './1';

describe('day 1, part 1', () => {
	it('finds the largest inventory', () => {
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
		assert.equal(fn(input), '24000');
	});
});
