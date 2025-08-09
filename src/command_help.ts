import type { State } from "./state.js";

export function commandHelp(state: State) {
	console.log("\nWelcome to the Pokedex!");
	console.log("Usage: \n");

	const commands = state.commands;
	for (let command in commands) {
		console.log(`${commands[command].name}: ${commands[command].description}`);
	}
	console.log();
};
