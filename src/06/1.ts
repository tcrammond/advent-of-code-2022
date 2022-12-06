export default function getFirstPacket(input: string) {
	const parser = createParser(input)

	return parser.readUntilPacketMarker()
}

function createParser(input: string) {
	let i = 0;

	const read = () => {
		const char = input[i]
		i++;
		return char
	}
	const readUntilPacketMarker = () => {
		const bank: string[] = []

		for (let index = 0; index < input.length; index++) {
			if (bank.length === 4) {
				bank.shift()
			}
			bank.push(read())
			if (new Set(bank).size === 4) {
				return i
			}
		}

		return -1
	}
	const reset = () => { i = 0 }

	return {
		read,
		readUntilPacketMarker,
		reset,
	}
}
