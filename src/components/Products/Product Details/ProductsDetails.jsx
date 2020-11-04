import React, { useContext, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "./../../Context/DataProvider";
import "./ProductsDetails.css";
import { Colors } from "./../../Colors/Colors";
import { Sizes } from "./../../Sizes/Sizes";
import { ThumbnailDetails } from "../../ThumbnailDetails/ThumbnailDetails";

export const ProductsDetails = () => {
  const { id } = useParams();
  const { products, addtoCart } = useContext(DataContext);
  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  //   Filtering and Showing Products as Per Product Id
  const details = products.filter((e_product, index) => {
    return e_product._id === id;
  });
  // Product Image Zoome in Out Function When Mouse is On Image
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <>
      {details.map((product) => (
        <div className="details" key={product._id}>
          <div
            ref={imgDiv}
            className="img-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={() =>
              (imgDiv.current.style.backgroundPosition = `center`)
            }
            style={{ backgroundImage: `url(${product.images[index]})` }}
          />
          <div className="box-details">
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <Colors colors={product.colors} />
            <Sizes sizes={product.sizes} />
            <p>{product.description}</p>
            <p>{product.content}</p>

            <ThumbnailDetails images={product.images} setIndex={setIndex} />
            <Link
              to="/cart"
              className="cart-btn"
              onClick={() => addtoCart(product._id)}
            >
              Add to Cart
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
