import { sum } from '../math'
import fs from 'fs'
export default function smallestDeleteableDirectory(input: string) {
	const freeSpaceRequired = 30000000
	const lines = input.split('\n')
	const tree = buildTree(lines)

	let dirSizes: Map<string, number> = new Map()

	const go = (children: Dir['children']) => Array.from(children)
		.forEach(([key, item]) => {
			if (!('size' in item)) {
				dirSizes.set(item.name, sumDir(item))
				go(item.children)
			}
		})
	go(tree.children)

	const spaceAvailable = 70000000 - sumDir(tree)
	const spaceRequired = freeSpaceRequired - spaceAvailable
	const sizes = Array.from(dirSizes.entries()).sort((a, b) => a[1] - b[1])

	let dirToDelete: any = null
	for (const dir of sizes) {
		if (dir[1] >= spaceRequired) {
			dirToDelete = dir
			break
		}
	}
	console.log(spaceAvailable, spaceRequired, dirToDelete)
	fs.writeFileSync('./numbers.txt', JSON.stringify(sizes, null, 2))

	return dirToDelete[1]
}

export const sumDir = (values: Dir) => Array.from(values.children.entries()).reduce((total: number, [name, item]) => {
	if ('size' in item) {
		return total + item.size
	}

	return total + sumDir(item)
}, 0)

export const buildTree = (commands: string[]) => {
	const tree: Dir = {
		children: new Map(),
		name: '/',
		parent: undefined,
		root: true,
	}
	let cursor: Dir = tree

	for (const line of commands) {
		const command = parseLine(line)
		if (!command) continue

		if (command[0] === 'cd') {
			const target = command[1]
			if (target === '/') {
				cursor = tree
				continue
			}
			if (target === '..') {
				if (cursor.parent) cursor = cursor.parent
				continue
			}

			if (!cursor.children.get(target)) {
				cursor.children.set(target, {
					children: new Map(),
					name: target,
					parent: cursor,
					root: false,
				})
			}
			cursor = (cursor.children.get(target) as Dir)
		}

		if (command[0] === 'dir') {
			const [, name] = command
			cursor.children.set(name, {
				children: new Map(),
				name,
				parent: cursor,
				root: false,
			})
		}
		if (command[0] === 'file') {
			const [, size, name] = command
			cursor.children.set(name, {
				name,
				size: +size,
			})
		}
	}

	return tree
}

const parseLine = (command: string) => {
	if (!command) return null

	if (command.startsWith('$')) {
		if (command.startsWith('$ cd')) {
			return ['cd', command.slice(5)]
		}
		return null
	}
	if (command.startsWith('dir')) {
		const [, name] = (command.match(/^dir (.*)/i) as string[])
		return ['dir', name]
	} else {
		const [, size, name] = (command.match(/^(\d+) (.*)/i) as string[])
		return ['file', size, name]
	}
}

interface Dir {
	children: Map<string, Dir | F>
	name: string
	parent: void | Dir
	root: boolean
}

interface F {
	name: string
	size: number
}
