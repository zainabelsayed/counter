import React, { useEffect, useState } from "react";

export default function ProductDetails({ match }) {
  const [product, setProduct] = useState(null);
  const id = match.params.id;
  useEffect(() => {
    return fetchProduct();
  });

  const fetchProduct = () => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  console.log(id, product);
  return (
    <div className="pt-5">
      {product ? (
        <div className="card mb-3 w-75 mx-auto mt-5 p-5 shadow">
          <div className="row g-0">
            <div className="col-md-4 d-flex justify-content-center w-25 pe-5">
              <img
                src={product.image}
                className="img-fluid rounded-start w-100"
                alt="..."
              />
            </div>
            <div className="col-md-8 ps-5 border-start">
              <div className="card-body">
                <p className="badge bg-dark">{product.category}</p>
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="badge bg-success">Price : {product.price} EGP</p>
                <p className="badge bg-warning">
                  Rating : {product.rating.rate}
                </p>
                <div>
                  <button type="button" className="btn btn-dark">
                    Add To Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
