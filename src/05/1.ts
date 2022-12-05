export default function moveCrates(input: string) {
	const [state, commands] = parseCrates(input);

	for (const command of commands) {
		const [count, from, to] = command
		let c = 0
		while (c < count) {
			state[to -1].push(state[from - 1].pop())
			c++;
		}
	}

	return state.map(column => column[column.length - 1]).join('')
}

/*
Example

    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
*/
export const parseCrates = (input: string) => {
	const data = input.split('\n');
	const blank = data.findIndex((line) => !line);
	const crates = data.slice(0, blank - 1);

	const rows = crates.length
	const columns = +(data[blank - 1].slice(-2))
	const state: Array<void | string>[] = new Array(columns);
	crates.reverse()

	for (let x = 0; x < columns; x++) {
		state[x] = state[x] ?? []
		for (let y = 0; y < rows; y++) {
			const start = x + x * 3
			const item = crates[y].slice(start, start + 3)
			if (item !== '   ') {
				state[x].push(item.replace(/[\[\]]/g, ''))
			}
		}
	}

	const commands = data.slice(blank + 1)
		.filter(Boolean)
		.map(line => line.match(/(\d+)/g) as unknown as Command)

	return [state, commands] as const;
};

type Command = [number, number, number]
