import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAllProduct, getProductById } from "../../../api/product.ts";
import Toast from "../../ui/Toast";
import Button from "../../ui/Button";
import Product from "../../ui/Product";
import DetailProduct from "../../ui/DetailProduct";
import Skeleton from "../../ui/Skeleton";

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [fetchProduts, setFetchProducts] = useState(false);
  const [showProduct, setShowProduct] = useState<number | null>(null);

  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => getAllProduct(),
    enabled: fetchProduts,
  });

  const {
    data: detailProduct,
    isLoading: isLoadingDetailProduct,
    isError: isErrorDetailProduct,
  } = useQuery({
    queryKey: ["product", showProduct],
    queryFn: async () => getProductById(showProduct!),
    enabled: showProduct !== null,
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
    <>
      <section className={"container mx-auto py-5 px-20"}>
        {showSuccess &&
          Toast({
            message: "Product added successfully",
          })}

        {!fetchProduts && (
          <Button type="button" onClick={() => setFetchProducts(true)}>
            See Products
          </Button>
        )}

        {isLoading ? (
          <Skeleton type={"product"} number={9} />
        ) : (
          <div>
            {isError ? (
              <p>Error fetching products. Please try again later.</p>
            ) : (
              <Product data={data} setShowProduct={setShowProduct} />
            )}
          </div>
        )}
      </section>

      <div
        className={`fixed inset-0 w-screen h-screen bg-black/50 ${showProduct ? "flex items-center " : "hidden"}`}
      >
        <div className="relative w-1/2 h-1/2 mx-auto bg-white rounded-md p-4">
          {isLoadingDetailProduct ? (
            <Skeleton type={"detailProduct"} />
          ) : isErrorDetailProduct ? (
            <p>Error fetching product. Please try again later.</p>
          ) : (
            <DetailProduct data={detailProduct} />
          )}

          <button
            onClick={() => setShowProduct(null)}
            className="absolute top-4 right-5  rounded-full font-bold cursor-pointer"
          >
            x
          </button>
        </div>
      </div>
    </>
  );
}
