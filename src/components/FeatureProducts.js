import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:8000/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true
        });
      }
    }
    fetchProducts();
  }, []);

  // Get only the first 4 products
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured Projects</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center pt-5">
        <Link to="/projects" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See all projects</Link>
      </div>
    </section>
  );
};
