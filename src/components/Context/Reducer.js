import { ActionTypes } from "./DataProvider";

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.payload],
      };
    case ActionTypes.DATA_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.payload],
      };

    case "increament":
      return {
        ...state,
        cart: [...state.cart],
      };

    case "decreament":
      return {
        ...state,
        cart: [...state.cart],
      };
    case "delete":
      return {
        ...state,
        cart: [...state.cart],
      };
    default:
      return state;
  }
};
