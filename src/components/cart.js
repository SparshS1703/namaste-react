import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
const handleClearCart=()=>{
    dispatch(clearCart());
}

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-xl cursor-pointer" onClick={handleClearCart}> Clear Cart</button>
                {cartItems.length==0 && (<h1>Cart is Empty. Add items to Cart.</h1>)}
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    )
}
export default cart;