// Store
import { useCartStore } from "./store/cart.store";
// React
import { useEffect } from "react";

export default function App() {
  const { carts, add_to_cart, reset_cart } = useCartStore();
  useEffect(() => {
    console.log(carts);
  }, [carts, reset_cart]);
  return (
    <div>
      <h3>Zustand</h3>
      <p>Products in cart {carts.length}</p>
      <button onClick={() => add_to_cart(carts.length + 1)}>Add to Cart</button>
      <br />
      <button onClick={reset_cart}>Clear</button>
    </div>
  );
}
