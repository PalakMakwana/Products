export const add_to_cart = "add_to_cart";
export const remove_from_cart = "remove_from_cart";
export const Increase = "Increase";
export const Decrease = "Decrease";

export const Add_cart = (product) => ({
  type: add_to_cart,
  payload: product,
});

export const Remove_cart = (productid) => ({
  type: remove_from_cart,
  payload: productid,
});

export const increase_quantity = (productid) => ({
  type: Increase,
  payload: productid,
});

export const decrease_quantity = (productid) => ({
  type: Decrease,
  payload: productid,
});
