import { createParser } from './1';

export default function getFirstPacket(input: string) {
	const parser = createParser(input)
	return parser.readUntilMessageMarker()
}
