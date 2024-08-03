import { createContext, useEffect, useReducer } from "react";
import { InCategory } from "../interfaces/Category"
import CategoryReducer from "../reducers/categoryReducer";
import { useNavigate } from "react-router-dom";
import instance from "../api";

export type CategoryContextType = {
    state: {categories : InCategory[]};
    dispatch: React.Dispatch<any>;
    removeCategory : (id: string | undefined) => Promise<void>;
    handleCategory : (category: InCategory) => Promise<void>;
};

export const CategoryContext = createContext({} as CategoryContextType);

const CategoryProvider = ({children} : {children: React.ReactNode}) => {
    
    const [state, dispatch] = useReducer(CategoryReducer, {categories: []});
    const nav = useNavigate();

    useEffect(()=>{
        (async ()=>{
            const {data} = await instance.get(`/categories`);
            dispatch({type: "GET_CATEGORIES", payload: data.data});
        })();
    },[]);

    const removeCategory = async (id : string | undefined) =>{
        try{
           if(confirm("ban muon xoa?")){
            await instance.delete(`/categories/${id}`);
            dispatch({type: "REMOVE_CATEGORY", payload: id});
           }
        }catch(error: any){
            console.log(error);
            alert("Failed to delete category")
        }
    }

    const handleCategory = async( category : InCategory) =>{
        try{
            if(category._id){
                // const response = await instance.put(`/categories/${category._id}`, category);
                // console.log("Response data:", response.data);
                const {_id, ...updateData} = category;
                await instance.patch(`/categories/${_id}`, updateData);
                dispatch({type: "UPDATE_CATEGORY", payload: {...updateData, _id}});
                alert("Category updated successfully");
            }else{
                // console.log(category)
                const response = await instance.post(`/categories`, category);
                dispatch({type: "ADD_CATEGORY", payload: response.data});
                alert("Category added successfully");
            }
            const {data: updateDate} = await instance.get(`/categories`);
            dispatch({type: "GET_CATEGORIES", payload: updateDate.data});
            nav("/admin/categories");
        }catch(error){
            console.log(error);
            alert("Failed to save category");
        }
    }

    return(
        <CategoryContext.Provider value={{state, dispatch, removeCategory, handleCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;