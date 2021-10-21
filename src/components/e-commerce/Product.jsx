import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
    const product = props.product
    return (
        <Link to={`/shop/${product.id}`}
          className="card mt-5 col-md-4 ms-3 p-3 shadow text-decoration-none text-black"
          style={{ width: "18rem" }}
        >
          <p className="badge bg-dark w-50">{product.category}</p>
          <div className="d-flex justify-content-center">
            <img src={product.image} className="card-img-top w-50" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{(product.description).substring(0,100)}</p>
            <p className="badge bg-success">Price : {product.price} EGP</p>
            <p className="badge bg-warning">Rating : {product.rating.rate}</p>
          </div>
        </Link>
    )
}
