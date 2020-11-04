import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Products/Product Details/ProductsDetails.css";
import { Sizes } from "./../Sizes/Sizes";
import { Colors } from "./../Colors/Colors";
import "./Cart.css";
import { DataContext } from "../Context/DataProvider";

export const Cart = () => {
  const { cart, dispatch } = useContext(DataContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      console.log(res);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const decreament = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
      dispatch({ type: "decreament" });
    });
  };

  const increament = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
      dispatch({ type: "increament" });
    });
  };

  const deleteProduct = (id) => {
    if (window.confirm("Do you want to delete this item ?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      dispatch({ type: "delete" });
    }
  };

  if (cart.length === 0) {
    return (
      <h3 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h3>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <div className="details cart" key={product._id}>
          <div
            className="img-container"
            style={{ backgroundImage: `url(${product.images[0]})` }}
          />
          <div className="box-details">
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <Colors colors={product.colors} />
            <Sizes sizes={product.sizes} />
            <p>{product.description}</p>
            <p>{product.content}</p>
            <div className="amount">
              <button className="count" onClick={() => decreament(product._id)}>
                -
              </button>
              <span>{product.count}</span>
              <button className="count" onClick={() => increament(product._id)}>
                +
              </button>
            </div>
            <div className="delete" onClick={() => deleteProduct(product._id)}>
              X
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <Link to="/payment">Payment</Link>
        <h3>Total:$ {total}</h3>
      </div>
    </>
  );
};
