export type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
};

export type Pokemon = {
  id: number;
  name: string;
  url: string;
};

export const getPokemonById = async (id: number): Promise<PokemonDetail> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.json();
};

export const getPokemons = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  const data = await res.json();

  return data.results.map((pokemon: Pokemon) => ({ ...pokemon, id: pokemon.url.split('/')[pokemon.url.split('/').length - 2] }));
};
