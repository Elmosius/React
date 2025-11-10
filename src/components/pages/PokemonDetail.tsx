import type { PokemonDetail } from '@/api/pokemon';

type PokemonDetailPageProps = {
  id: string;
  data: PokemonDetail;
};

export default function PokemonDetailPage({ id, data }: PokemonDetailPageProps) {
  console.info(data);
  return (
    <div className='text-center flex flex-col '>
      <h1 className={'text-3xl font-bold text-center'}>Hello is Pokemon Page {id}</h1>

      <p>Name: {data.name}</p>
      <img className={'mx-auto'} src={data.sprites.front_default} alt={data.name} />
    </div>
  );
}
