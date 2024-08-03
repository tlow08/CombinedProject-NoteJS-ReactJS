import { useContext, useEffect, useState } from "react"
import { ProductContext, ProductContextType } from "../contexts/ProductContext"
import { InCategory } from "../interfaces/Category";
import { useParams } from "react-router-dom";
import { InProduct } from './../interfaces/Product';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../utils/validation";
import instance from "../api";


const ProductForm = () => {
    const {handleProduct} = useContext(ProductContext) as ProductContextType;
    const [categories, setCategories] = useState<InCategory[]>([]);
    const { id }= useParams();
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm<InProduct>({
        resolver: zodResolver(productSchema),
    });

    useEffect(() => {
        if (id) {
          (async () => {
            const { data } = await instance.get(`/products/${id}`);
            reset(data.data);
          })();
        }
      }, [id, reset]);
      
    useEffect(()=>{
        (async ()=>{
            const {data} = await instance.get(`/categories`);
            console.log(data);
            setCategories(data.data);
        })()
    }, []);

    const onSubmit = (data: InProduct) =>{
        if(id){
            const {_id, ...updateData} = data;
            handleProduct({...updateData, _id: id});
        }else{
            handleProduct(data);
        }
    }
  return (
    <>
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>{id ? "Edit product" : "Add product"}</h1>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" id="" className="form-control" {...register("title", {required: true})} />
            {errors.title && <p className="text-danger">{errors.title.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number"  id="" className="form-control" {...register("price", {valueAsNumber:true, required: true })} />
            {errors.price && <p className="text-danger">{errors.price.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" {...register("description")} />
        </div>
        <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
            <select {...register("category")} className="form-control">
                {categories.map((category)=>(
                    <option key={category._id} value={category._id}>
                        {category.title}
                    </option>
                ))}
            </select>
        </div>
        <div className="mb-3">
            <button className="btn btn-primary">
                {id ? "Edit product" : "Add product"}
            </button>
        </div>
    </form>
    </>
  )
}

export default ProductForm