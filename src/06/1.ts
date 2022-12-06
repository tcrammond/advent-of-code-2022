export default function getFirstPacket(input: string) {
	const parser = createParser(input)

	return parser.readUntilPacketMarker()
}

export function createParser(input: string) {
	let i = 0;

	const read = () => {
		const char = input[i]
		i++;
		return char
	}
	const readUntilUniqueSequence = (n: number) => {
		const bank: string[] = []

		for (let index = 0; index < input.length; index++) {
			if (bank.length === n) {
				bank.shift()
			}
			bank.push(read())
			if (new Set(bank).size === n) {
				return i
			}
		}

		return -1
	}
	const readUntilPacketMarker = () => readUntilUniqueSequence(4)
	const readUntilMessageMarker = () => readUntilUniqueSequence(14)
	const reset = () => { i = 0 }

	return {
		read,
		readUntilMessageMarker,
		readUntilPacketMarker,
		reset,
	}
}
