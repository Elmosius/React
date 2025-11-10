import { getPokemonById } from '@/api/pokemon';
import PokemonDetailPage from '@/components/pages/PokemonDetail';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pokemon/$id')({
  component: RouteComponent,
  loader: async ({ params }) => await getPokemonById(Number(params.id)),
});

function RouteComponent() {
  const { id } = Route.useParams();
  const pokemon = Route.useLoaderData();

  return <PokemonDetailPage id={id} data={pokemon} />;
}
