import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

type Category = 'all' | 'men' | 'women' | 'kids';

type ItemFilters = {
  query: string;
  sort: 'asc' | 'desc';
  categories: Category[];
};

export const Route = createFileRoute('/search')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): ItemFilters => {
    return {
      query: (search.query as string) ?? '',
      sort: (search.sort as 'asc' | 'desc') ?? 'asc',
      categories: (search.categories as Category[]) ?? ['all'],
    };
  },
});

function RouteComponent() {
  const { query, sort, categories } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  // Local state for query (debounced)
  const [localQuery, setLocalQuery] = useState(query);

  // Keep local state in sync if user navigates with back/forward buttons
  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  // Debounce the URL update for query input
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (localQuery !== query) {
        navigate({
          search: (prev) => ({ ...prev, query: localQuery }),
          replace: true, // biar ga spam history
        });
      }
    }, 400); // 400ms debounce delay

    return () => clearTimeout(timeout);
  }, [localQuery, query, navigate]);

  // Update other filters (sort & categories) langsung tanpa debounce
  const updateFilters = (name: keyof ItemFilters, value: unknown) => {
    navigate({
      search: (prev) => {
        const next = { ...prev, [name]: value };
        // Hindari navigasi kalau tidak berubah
        if (JSON.stringify(prev) === JSON.stringify(next)) return prev;
        return next;
      },
      replace: true,
    });
  };

  return (
    <div>
      <h1 className='font-bold text-2xl'>Search Page</h1>

      <div className='flex flex-col gap-4 mt-6'>
        {/* Input dengan debounce */}
        <input className='border p-2' type='text' placeholder='Search' value={localQuery} onChange={(e) => setLocalQuery(e.target.value)} />

        {/* Sort */}
        <select title='sort' className='border p-2' value={sort} onChange={(e) => updateFilters('sort', e.target.value)}>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>

        {/* Categories */}
        <select
          multiple
          title='categories'
          className='border p-2'
          value={categories}
          onChange={(e) =>
            updateFilters(
              'categories',
              Array.from(e.target.selectedOptions).map((option) => option.value as Category)
            )
          }
        >
          {['all', 'men', 'women', 'kids'].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <pre className='mt-6 bg-gray-100 p-3 rounded'>{JSON.stringify({ query, sort, categories }, null, 2)}</pre>
    </div>
  );
}
