import React, { createContext, useReducer } from "react";
import { initialState } from "./ShopData";
import { shopReducer } from "./Reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);
  return (
    <DataContext.Provider
      value={{
        products: state,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
