import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingCart className="cart-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
