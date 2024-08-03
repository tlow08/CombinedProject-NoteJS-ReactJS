import { createContext, useEffect, useReducer } from "react";
import { InProduct } from "../interfaces/Product"
import productReducer from "../reducers/productReducer";
import instance from "../api";
import { useNavigate } from "react-router-dom";

export type ProductContextType = {
    state: { products : InProduct[]};
    dispatch: React.Dispatch<any>;
    removeProduct : (id: string | undefined) => Promise<void>;
    handleProduct: (product: InProduct) => Promise<void>;
};

export const ProductContext = createContext({} as ProductContextType);

const ProductProvider = ({ children } : { children: React.ReactNode }) =>{
    const [state, dispatch] = useReducer(productReducer, { products: []});
    const nav = useNavigate();
    useEffect(()=>{
        (async ()=>{
            const { data } = await instance.get(`/products`);
            dispatch({type: "GET_PRODUCTS", payload: data.data})
        })();
    },[]);

    const removeProduct = async (id : string | undefined) =>{
        try{
            if (window.confirm("Do you want to delete this product?")) {
                await instance.delete(`/products/${id}`);
                dispatch({type: "REMOVE_PRODUCT", payload: id});
            }
        }catch(error: any){
            console.log(error);
        }
    }

    const handleProduct = async (product: InProduct)=>{
        try{
            if(product._id){
                const {_id, ...updateData} = product;
                await instance.patch(`/products/${_id}`, updateData);
                // const response = await instance.patch(`/products/${product._id}`, product);
                // console.log(response.data);
                dispatch({ type : "UPDATE_PRODUCT", payload: {...updateData, _id}});
                alert("Product updated successfully");
            }else{
                // console.log(product);
                const { data }=  await instance.post(`/products`, product);
                dispatch({type: "ADD_PRODUCT", payload: data.data});
                alert("product added successfully");
            }
            const {data: updateDate} = await instance.get(`/products`);
            dispatch({type: "GET_PRODUCTS", payload: updateDate.data});
            
            nav("/admin");
        }catch(error){
            console.log(error);
            alert("Failed to save product");
            // alert(error.response?.data?.message || "Error");
        }
    }
    return (
        <ProductContext.Provider value={{state, dispatch, removeProduct, handleProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;