import React, { useState, useEffect } from "react";
import Product from "./Product";

export default function Shop() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    return fetchProducts();
  }, []);

  const fetchProducts = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  return (
    <div className="mt-5 pt-5 row row-cols-1 row-cols-md-3 g-4 justify-content-center">
      {products ? (
        products.map((product) => (
          <Product product={product} key={product.id} />
        ))
      ) : (
        <div className="mt-5 pt-5 d-flex justify-content-center align-items-center">
          <div
            className="spinner-grow text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          ></div>
        </div>
      )}
    </div>
  );
}
