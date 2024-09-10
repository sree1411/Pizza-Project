import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.pizza.cartList);
  const total = useSelector((state) => state.pizza.total);
  const dispatch = useDispatch();

  return (
    <>
      <div className="vh-100" style={{ border: "2px solid black" }}>
        <h1>Cart Section: {cart.length}</h1>
        <ul>
          {cart.map((cartItem, id) => (
            <li key={id}>
              {cartItem.name} -{" "}
              {cartItem.selectedOption
                ? `$${cartItem.selectedOption.price}`
                : `$${cartItem.price}`}

              <button
                onClick={() => dispatch(removeFromCart(cartItem.id))}>
                Remove from the cart
              </button>
            </li>
          ))}
        </ul>
        <h1>Total Price: ${total}</h1>
      </div>
    </>
  );
};

export default Cart;
