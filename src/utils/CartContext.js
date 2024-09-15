import { createContext } from "react";

const CartContext = createContext(
    {
        quantity:0,
        item:[]
    }
)
export default CartContext;