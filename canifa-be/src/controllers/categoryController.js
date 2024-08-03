import slugify from "slugify";
import Category from "../models/CategoryModel.js";
import Product from "../models/ProductModel.js";
export const createCategory = async (req, res, next) =>{
    try{
        const slug = slugify(req.body.title, {
            replacement: "-",
            lower: true,
            strict: true,
            locale: "vi",
            trim: true,
        });
        console.log(slug);
        const data =  await Category.create({...req.body, slug});
        if(data){
            return res.status(201).json({
                success: true,
                data,
                message: "Tao danh muc thanh cong!",
            });
        }
    }catch(error){
        next(error);
    }
}

export const updateCategoryById = async (req, res, next) => {
    try{
        const data = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(data){
            return res.status(200).json({
                success: true,
                data,
                message: "Update danh muc thanh cong!",
            })
        }
    }catch(error){
        next(error);
    }
}

export const removeCategoryById = async (req, res, next) => {
    try{
        const data = await Category.findByIdAndDelete(req.params.id);
        if (data) {
            return res.status(200).json({
                success: true,
                message: "Xóa danh mục thành công!",
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Không tìm thấy danh mục!",
            });
        }
    }catch(error){
        next(error);
    }
}

export const getCategoryById = async (req, res, next) => {
    try{
        const data = await Category.findById(req.params.id).populate("products");
        if(data){
            return res.status(200).json({
                success: true,
                data,
                message: "Tim danh muc thanh cong!",
            });
        }
    }catch(error){
        next(error);
    }
}

export const getAllCategories = async (req, res, next) => {
    try{
        const data = await Category.find();
        if(data){
            return res.status(200).json({
                success: true,
                data,
                message: "lay danh muc thanh cong!",
            });
        }
    }catch(error){
        next(error);
    }
};