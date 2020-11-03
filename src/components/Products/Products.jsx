import React, { useContext } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { DataContext } from "./../Context/DataProvider";

export const Products = () => {
  const { products } = useContext(DataContext);

  return (
    <div className="products">
      {products.map((e_products) => (
        <div className="card" key={e_products._id}>
          <Link to={`/products/${e_products._id}`}>
            <img src={e_products.images[0]} alt="" />
          </Link>
          <div className="box">
            <h3 title={e_products.title}>
              <Link to={`/products/${e_products._id}`}>{e_products.title}</Link>
            </h3>
            <p>{e_products.description}</p>
            <h4>${e_products.price}</h4>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};
