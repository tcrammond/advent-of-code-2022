import { parseCrates } from './1'

export default function moveCrates(input: string) {
	const [state, commands] = parseCrates(input);

	for (const command of commands) {
		const [count, from, to] = command
		state[to - 1].push(
			...state[from - 1].splice(-count)
		)
	}

	return state.map(column => column[column.length - 1]).join('')
}
