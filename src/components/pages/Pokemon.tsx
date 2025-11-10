import type { Pokemon } from '@/api/pokemon';
import { Link } from '@tanstack/react-router';

export function PokemonPage({ data }: { data: Pokemon[] }) {
  return (
    <div className='flex flex-col mx-auto container'>
      <h1 className={'text-3xl font-bold text-center'}>Hello is Pokemon Page</h1>

      {data.map((pokemon: Pokemon, index) => (
        <Link to={'/pokemon/$id'} params={{ id: `${pokemon.id}` }} key={pokemon.id} className={'flex flex-col mx-auto container underline text-blue-500'}>
          <p>
            {index + 1}. {pokemon.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
