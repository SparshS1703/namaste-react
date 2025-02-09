import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data, showItems, setShowIndex})=>{
    console.log(data);
  

    // const [showItems,setShowItems]=useState(false);  ------if this is present then each item has its own state therefore it is uncontrolled component else controlled component if controolled by parent component   /// interview  
    const handleClick=()=>{
        // setShowItems(!showItems);
        setShowIndex();
    }


    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  ">
            <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length}) </span>
                <span><svg className="w-2.5 h-2.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg></span>
            </div>
                
               {showItems && <ItemList items={data.itemCards} />}
                


                </div>
                

        </div>
    )
}

export default RestaurantCategory;