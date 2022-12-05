import { describe, it, expect } from 'vitest';

import fn from './1';

const input = [
'    [D]    ',
'[N] [C]    ',
'[Z] [M] [P]',
' 1   2   3 ',
'',
'move 1 from 2 to 1',
'move 3 from 1 to 3',
'move 2 from 2 to 1',
'move 1 from 1 to 2',
].join('\n')

describe('day 5, part 1', () => {
	it('find the top crate of each stack after movement procedures', () => {
		expect(fn(input)).toBe('CMZ');
	});
});
