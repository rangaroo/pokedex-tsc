import type { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
	console.log("\nWelcome to the Pokedex!");
	console.log("Usage: \n");
	for (let command in commands) {
		console.log(`${commands[command].name}: ${commands[command].description}`);
	}
	console.log();
};
