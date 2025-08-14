import { Cache } from "./pokecache.js";

export class PokeAPI {
	#cache: Cache;

	private static readonly baseURL = "https://pokeapi.co/api/v2";

	constructor(cacheInterval: number) {
		this.#cache = new Cache(cacheInterval);
	}

	async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
		const url = pageURL || `${PokeAPI.baseURL}/location-area`;

		const cached = this.#cache.get<ShallowLocations>(url);
		if (cached) {
			return cached;
		}

		const response = await fetch(url);

		try {
			if (!response.ok) {
				throw new Error(`${response.status} ${response.statusText}`);
			}
			const locations: ShallowLocations = await response.json();

			this.#cache.add(url, locations);

			return locations;
		} catch (e) {
			throw new Error(`Error fetching locations: ${(e as Error).message}`);
		}
	}

	async fetchLocation(locationName: string): Promise<Location> {
		const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

		const cached = this.#cache.get<Location>(url);
		if (cached) {
			return cached;
		}

		const response = await fetch(url);

		try {
			if (!response.ok) {
				throw new Error(`${response.status} ${response.statusText}`);
			}
			const location: Location = await response.json();

			this.#cache.add(url, location);

			return location;
		} catch (e) {
			throw new Error(`Error fetching location '${locationName}': ${(e as Error).message}`);
		}
	}
}

export type ShallowLocations = {
	count: number;
	next: string;
	previous: string;
	results: {
		name: string;
		url: string;
	}[];
};

export type Location = {
	encounter_method_rates: {
		encounter_method: {
			name: string;
			url: string;
		};
		version_details: {
			rate: number;
			version: {
				name: string;
				url: string;
			};
		}[];
	}[];
	game_index: number;
	id: number;
	location: {
		name: string;
		url: string;
	};
	names: {
		language: {
			name: string;
			url: string;
		};
		name: string;
	}[];
	name: string;
	pokemon_encounters: {
		pokemon: {
			name: string;
			url: string;
		};
		version_details: {
			encounter_details: {
				chance: number;
				condition_values: [];
				max_level: number;
				method: {
					name: string;
					url: string;
				};
				min_level: number;
			}[];
			max_chance: number;
			version: {
				name: string;
				url: string;
			}
		}[];
	}[];
};
