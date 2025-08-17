import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMapNext, commandMapPrevious } from "./command_map.js";
import { commandExplore } from "./command_explore.js";

import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
	return {
		help: {
			name: "help",
			description: "Displays a help message",
			callback: commandHelp,
		},
		exit: {
			name: "exit",
			description: "Exit the pokedex",
			callback: commandExit,
		},
		map: {
			name: "map",
			description: "Displays the names of the next 20 location areas in Pokemon world",
			callback: commandMapNext,
		},
		mapb: {
			name: "mapb",
			description: "Displays the names of the previous 20 location areas",
			callback: commandMapPrevious,
		},
		explore: {
			name: "explore",
			description: "Return a list of all the Pokemon in a given area",
			callback: commandExplore,
		},
	};
}
