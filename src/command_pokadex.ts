import type { State } from "./state.js";

export async function commandPokadex(state: State) {
  const caught = Object.values(state.caughtPokemon);
  if (caught.length === 0) {
    console.log("Your Pokedex is empty. Catch some Pokemon first!");
    return;
  }
  console.log("Your Pokedex:");
  for (const pokemon of caught) {
    console.log(` - ${pokemon.name}`);
  }
}
