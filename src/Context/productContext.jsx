import {createContext, useState, useEffect} from "react";
import {getCategoriesAndDocuments} from "../Utilities/Firebase/FirebaseUtilities.js";
import SHOP_DATA from "../shopData.js";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) =>{
    const [products, setProducts] = useState([]);
     useEffect( ()=>{
         const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
             console.log(categoryMap);
         };
         getCategoriesMap();
     }, []);
    const value = {products};
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
}