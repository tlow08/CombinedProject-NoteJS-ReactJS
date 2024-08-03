import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { InCategory } from "../interfaces/Category";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema } from "../utils/validation";
import instance from "../api";
import { useContext, useEffect } from "react";
import { CategoryContext, CategoryContextType } from "../contexts/CategoryContext";

const CategoryForm = () => {
  const {handleCategory} = useContext(CategoryContext) as CategoryContextType;
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InCategory>({
    resolver: zodResolver(categorySchema),
  });

  useEffect(()=>{
    if (id) {
      console.log("Fetching category with id:", id); // Log the id
      (async () => {
        try {
          const { data } = await instance.get(`/categories/${id}`);
          console.log("Fetched data:", data.data); // Log fetched data
          reset(data.data);
        } catch (error) {
          console.error("Failed to fetch category:", error);
        }
      })();
    }
  },[id, reset]);

  const onSubmit = (data: InCategory) => {
    if (id) {
      const { _id, ...updateData } = data; // Remove _id for update
      handleCategory({ ...updateData, _id: id });
    } else {
      handleCategory(data);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{id ? "Edit Category" : "Add Category"}</h1>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" {...register("title", { required: true })} />
        {errors.title && <p className="text-danger">{errors.title.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" className="form-control" {...register("description")} />
      </div>
      <button className="btn btn-primary">{id ? "Update Category" : "Add Category"}</button>
    </form>
  );
};

export default CategoryForm;
