import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function Home() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      return res.json();
    },
  });
  return (
    <section className={"container mx-auto py-5"}>
      <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
        {data?.map((product: Product) => (
          <div
            key={product.id}
            className={
              "bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center gap-2"
            }
          >
            <img
              src={product.image}
              alt={product.title}
              className={"w-46 h-46 object-cover"}
            />
            <h2 className={"text-lg font-bold"}>{product.title}</h2>
            <p className={"text-gray-600 line-clamp-1"}>
              {product.description}
            </p>
            <p className={"text-gray-600"}>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
