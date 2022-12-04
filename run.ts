import fs from 'fs';

const [argDay, argSub] = process.argv.filter(
	(arg) => !(arg.match(/^\//) || arg.match(/^-/)),
);

let day: string = '';
let part: string = '';

const lp = (value: string) => (value.charAt(0) === '0' ? value : `0${value}`);

if (!(argDay || argSub)) {
	console.error('No day specified');
	process.exit(1);
}

const isCompound = (value: string) => value.match(/^\d+\-\d+$/);
const isValidDay = (value: string) =>
	value.match(/^\d+$/) && +value > 0 && +value <= 25;

const isValidPart = (value: string) =>
	value.match(/^\d+$/) && +value > 0 && +value <= 2;

if (argSub) {
	if (!(isValidDay(argDay) && isValidPart(argSub))) {
		console.error('Invalid args');
		process.exit(1);
	}
	day = argDay;
	part = argSub;
} else {
	if (isCompound(argDay)) {
		const parts = argDay.split('-');
		day = parts[0];
		part = parts[1];
	} else if (isValidDay(argDay)) {
		day = argDay;
	} else {
		console.error('Invalid args');
		process.exit(1);
	}
}

executeDay(day, part);

async function executeDay(day: string, part: string) {
	const name = `./src/${lp(day)}/${part}.ts`;
	try {
		const module = await import(name);
		const input = fs.readFileSync(name.replace(`${part}.ts`, 'input.txt'), 'utf8');
		log(day, part, module.default(input));
	} catch (error) {
		if (error.message.includes('find module')) {
			console.error(`💥 Could not find module for ${name}`);
		} else if (error.message.includes('no such file')) {
			console.error('💥 Something wrong with puzzle input');
		} else if (error instanceof ReferenceError) {
			console.error('💥 Something wrong with puzzle input');
		} else {
			console.error(error.message);
		}
		process.exit(0);
	}
}

function log(day: string, part: string, result: number | string) {
	console.log(`Running day ${day}, part ${part}`);
	console.log(`Output: ${result}`);
}
