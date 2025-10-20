import { useMutation, useQuery } from "@tanstack/react-query";
import { type FormEvent, useEffect, useState } from "react";
import {
  addProduct,
  getAllProduct,
  getProductById,
} from "../../../api/product.ts";
import Toast from "../../ui/Toast";
import Button from "../../ui/Button";
import Product from "../../ui/Product";
import DetailProduct from "../../ui/DetailProduct";
import Skeleton from "../../ui/Skeleton";
import Card from "../../ui/Card";
import Form from "../../ui/Form";
import type { IProduct } from "../../../types/product.ts";

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [fetchProducts, setFetchProducts] = useState(false);
  const [showProduct, setShowProduct] = useState<number | null>(null);

  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => getAllProduct(),
    enabled: fetchProducts,
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

  const {
    mutate,
    isPending,
    isSuccess: isSuccessAddProduct,
  } = useMutation({
    mutationFn: async (data: IProduct) => addProduct(data),
    onSuccess: () => {
      setFetchProducts(true);
      setShowForm(false);
      setShowSuccess(true);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const payload: IProduct = {
      id: Math.floor(Math.random() * 1000000),
      title: `${form.title.valueOf}`,
      description: form.description.value,
      price: Number(form.price.value),
      category: form.category.value,
      image: form.image.value,
    };

    mutate(payload, {
      onSuccess: () => form.reset(),
    });
  };

  useEffect(() => {
    if (isSuccess || isSuccessAddProduct) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }, [isSuccess, isSuccessAddProduct]);

  return (
    <>
      <section className={"container mx-auto py-5 px-20"}>
        <Button
          classList={"mx-2 my-2"}
          type="button"
          onClick={() => setShowForm(!showForm)}
        >
          Add Products
        </Button>

        <Card showCard={showForm} onClick={() => setShowForm(false)}>
          <Form onSubmit={handleSubmit} loading={isPending} />
        </Card>

        {showSuccess &&
          Toast({
            message: "Product added successfully",
          })}

        {!fetchProducts && (
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

      <Card showCard={showProduct} onClick={() => setShowProduct(null)}>
        {isLoadingDetailProduct ? (
          <Skeleton type={"detailProduct"} />
        ) : isErrorDetailProduct ? (
          <p>Error fetching product. Please try again later.</p>
        ) : (
          <DetailProduct data={detailProduct} />
        )}
      </Card>
    </>
  );
}
