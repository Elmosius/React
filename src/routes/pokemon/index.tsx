import { getPokemons } from '@/api/pokemon';
import { PokemonPage } from '@/components/pages/Pokemon';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pokemon/')({
  component: RouteComponent,
  loader: async () => getPokemons(),
});

function RouteComponent() {
  const pokemons = Route.useLoaderData();

  return <PokemonPage data={pokemons} />;
}
