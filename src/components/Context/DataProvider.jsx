import React, { createContext, useEffect, useReducer } from "react";
import { initialState } from "./ShopData";
import { shopReducer } from "./Reducer";

export const ActionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  DATA_CART: "DATA_CART",
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  // Actions
  const addtoCart = (id) => {
    const check = state.cart.every((item) => item._id !== id);
    if (check) {
      const data = state.products.filter((product) => product._id === id);
      dispatch({ type: ActionTypes.ADD_TO_CART, payload: data });
    } else {
      alert("The Product Has Been Added to Cart");
    }
  };

  //Settingup Browser Local Storage
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) {
      dispatch({ type: ActionTypes.DATA_CART, payload: dataCart });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <DataContext.Provider
      value={{
        // States
        products: state.products,
        cart: state.cart,
        // Actions
        addtoCart: addtoCart,
        dispatch: dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
