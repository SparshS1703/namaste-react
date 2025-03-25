import { useDispatch } from "react-redux";
import CDN_URL from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const ItemList=({items})=>{
    console.log("items=",items);

    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }
    
    return (
        <div className="transition-all"> 
           {
            items.map((item)=>{
               return (
                 <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    
                    <div className="p-2 w-9/12">
                        <span className="text-xl">{item.card.info.name} </span>
                        <span className="text-xl">₹{item.card.info.price?(item.card.info.price/100):(item.card.info.defaultPrice/100)}</span>
                        <div className="pt-5">
                        <p className="text-s"> {item.card.info.description}</p>
                        </div>
                    </div>
                  
                   <div className="p-4 w-3/12">
                    <div className="absolute">
                    <button className="p-2 mx-18 bg-white shadow-2xl rounded-xl cursor-pointer" onClick={()=>handleAddItem(item)}>Add +</button>
                   
                    </div>
                    <img src={CDN_URL+item.card.info.imageId} className="w-full rounded-2xl"></img>
                    </div>
                </div>
               )
            })
           }
        </div>


    )
}
export default ItemList;