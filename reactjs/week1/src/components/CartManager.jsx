import React, { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const found = state.find((i) => i.id === action.payload.id);
      if (found) {
        return state.map((i) =>
          i.id === action.payload.id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...state, { ...action.payload, qty: 1 }];

    case "INC":
      return state.map((i) =>
        i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
      );

    case "DEC":
      return state
        .map((i) =>
          i.id === action.payload ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0);

    case "REMOVE":
      return state.filter((i) => i.id !== action.payload);

    default:
      return state;
  }
}

function CartManager() {
  const [cart, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, dispatch, total }}>
      <ProductList />
      <Cart />
    </CartContext.Provider>
  );
}

function ProductList() {
  const { dispatch } = useContext(CartContext);

  const products = [
    { id: 1, name: "Apple", price: 10 },
    { id: 2, name: "Banana", price: 5 },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - {p.price}
          <button onClick={() => dispatch({ type: "ADD", payload: p })}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const { cart, dispatch, total } = useContext(CartContext);

  return (
    <div>
      {cart.map((i) => (
        <div key={i.id}>
          {i.name} ({i.qty})
          <button onClick={() => dispatch({ type: "INC", payload: i.id })}>
            +
          </button>
          <button onClick={() => dispatch({ type: "DEC", payload: i.id })}>
            -
          </button>
          <button onClick={() => dispatch({ type: "REMOVE", payload: i.id })}>
            X
          </button>
        </div>
      ))}
      <div>Total: {total}</div>
    </div>
  );
}

export default CartManager;
