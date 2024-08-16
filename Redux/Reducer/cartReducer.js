import { act } from "react";

export const add_to_cart = "add_to_cart";
export const remove_from_cart = "remove_from_cart";
export const Increase = "Increase";
export const Decrease = "Decrease";

const InitailState = {
  items: [],
};

const cartReducer = (state = InitailState, action) => {
  switch (action.type) {
    case add_to_cart:
      const existingItems = state.items.findIndex(
        (items) => items.id === action.payload.id
      );
      if (existingItems >= 0) {
        const updateItem = [...state.items];
        updateItem[existingItems].quantity += 1;
        return {
          ...state,
          items: updateItem,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case remove_from_cart:
      return {
        ...state,
        items: state.items.filter((t) => t.id !== action.payload),
      };
    case Increase:
      const updatingItems = state.items.map((it) => {
        if (it.id === action.payload) {
          return { ...it, quantity: it.quantity + 1 };
        }
        return it;
      });

      return {
        ...state,
        items: updatingItems,
      };

    case Decrease:
      const removeItem = state.items.map((its) => {
        if (its.id === action.payload) {
          const newQuantity = its.quantity > 1 ? its.quantity - 1 : 1;
          return { ...its, quantity: newQuantity };
        }
        return its;
      });
      return {
        ...state,
        items: removeItem,
      };
    default:
      return state;
  }
};

export default cartReducer;
