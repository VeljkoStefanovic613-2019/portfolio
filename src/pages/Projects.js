import { useEffect, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { useTitle } from "../hooks/useTitle";

export const Projects = () => {
  useTitle("Projects")

  // Define state to store the products
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_HOST}/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data); // Set the fetched products into state
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All Projects ({products.length})
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};
