import type { IProduct } from "../../../types/product.ts";

interface ProductProps {
  data: IProduct[];
  setShowProduct: (id: number) => void;
}

export default function Product(props: ProductProps) {
  const { data, setShowProduct } = props;

  return (
    <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
      {data?.map((product: IProduct) => (
        <div
          onClick={() => setShowProduct(product.id)}
          key={product.id}
          className={
            "bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer"
          }
        >
          <img
            src={product.image}
            alt={product.title}
            className={"w-46 h-46 object-cover"}
          />
          <h2 className={"text-lg font-bold"}>{product.title}</h2>
          <p className={"text-gray-600 line-clamp-1"}>{product.description}</p>
          <p className={"text-gray-600"}>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
