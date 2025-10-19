import type { IProduct } from "../../../types/product.ts";

interface DetailProductProps {
  data: IProduct;
}

export default function DetailProduct(props: DetailProductProps) {
  const { data } = props;

  return (
    <div className={"w-full h-full p-10 flex flex-row gap-10 items-center"}>
      <img
        src={data?.image}
        alt={data?.title}
        className={"w-64 h-64 object-cover"}
      />
      <div>
        <h2 className={"text-lg font-bold"}>{data?.title}</h2>
        <p className={"text-gray-600 line-clamp-1"}>{data?.description}</p>
        <p className={"text-gray-600"}>Price: ${data?.price}</p>
      </div>
    </div>
  );
}
