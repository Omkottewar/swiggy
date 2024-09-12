import { createContext } from "react";

const CartContext = createContext(
    {
        quantity:0,
        item:{
            0:'hairdryer',
           1: "washingMachine"
        }
    }
)
export default CartContext;