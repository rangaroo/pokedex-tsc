import type { State } from "./state.js";

export async function commandMapNext(state: State) {
	const locationsData = await state.pokeAPI.fetchLocations(state.nextLocationsURL);
	
	state.nextLocationsURL = locationsData.next;
	state.prevLocationsURL = locationsData.previous;

	for (const { name, url } of locationsData.results) {
		console.log(name);
	}
	
	console.log();
};

export async function commandMapPrevious(state: State) {
	if (!state.prevLocationsURL) {
		throw new Error("you're on the first page");
	}

	const locationsData = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

	state.nextLocationsURL = locationsData.next;
	state.prevLocationsURL = locationsData.previous;

	for (const { name, url } of locationsData.results) {
		console.log(name);
	}
	
	console.log();
};
