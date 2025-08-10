import type { State } from "./state.js";

export async function commandExit(state: State) {
	console.log("Closing the Pokedex... Goodbye!");
	console.log();
	state.readline.close();
	process.exit(0);
};
