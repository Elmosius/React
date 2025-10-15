import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type { IProduct } from "../../../types/product.ts";

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [fetchProduts, setFetchProducts] = useState(false);

  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      return res.json();
    },
    enabled: fetchProduts,
  });

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }, [isSuccess]);

  return (
    <section className={"container mx-auto py-5 px-20"}>
      {showSuccess && (
        <p className="p-4 my-4 shadow-md fixed right-3 top-3  text-black bg-gray-200 rounded-md">
          Data fetched successfully!
        </p>
      )}

      {!fetchProduts && (
        <button
          onClick={() => setFetchProducts(true)}
          className="p-2 border rounded-lg"
        >
          See Products
        </button>
      )}

      {isLoading ? (
        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              className="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center gap-2 animate-pulse w-full h-64"
              key={`loading-${index}`}
            ></div>
          ))}
        </div>
      ) : (
        <div>
          {isError ? (
            <p>Error fetching products. Please try again later.</p>
          ) : (
            <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
              {data?.map((product: IProduct) => (
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
          )}
        </div>
      )}
    </section>
  );
}
