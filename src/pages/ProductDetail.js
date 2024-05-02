import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";

export const ProductDetail = () => {

  const [product, setProduct] = useState({});
  const { id } = useParams();

  async function getProduct(id) {
    const response = await fetch(`http://localhost:8000/products/${id}`);
    if (!response.ok) {
      throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    }
    fetchProducts();
  }, [id]);

  useTitle(`${product.name}`);

  return (
    <main>
      <section className="">
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {product.name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {product.overview}
        </p>
        <div className="flex flex-wrap justify-between">
          <div className="max-w-xl my-3">
            <a href={product.netlify}>
            <img
              className="rounded border-4 border-blue-700"
              src={product.image_local}
              alt={product.name}
            />
            </a>
          </div>
          <div className="max-w-xl my-3">
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.long_description}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              Github repositorie:{" "}
              <a
                href={product.github_repo}
                className="text-blue-700 dark:text-blue-300 underline hover:underline"
              >
                {product.github_repo}
              </a>
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              Netlify link:{" "}
              <a href="https://codebook-vs.netlify.app/" className="text-blue-700 dark:text-blue-300 underline hover:underline">
                {product.netlify}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
