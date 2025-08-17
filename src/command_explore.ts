import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
	if (!args) {
		console.log("Location name was not entered");
		return;
	}
	console.log(`Command works, locationName: ${args}`);
	//TODO: fetchLocation method is already implemented in pokeapi.ts
	const locationName = args[0];
	const locationData = await state.pokeAPI.fetchLocation(locationName);
	
	const pokemonsList = locationData.pokemon_encounters;
	for (const pokemonData of pokemonsList) {
		const name = pokemonData.pokemon.name;
		console.log(name);
	}
	console.log();
}
