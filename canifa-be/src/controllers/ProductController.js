import Product from "../models/ProductModel.js";
import Category from "../models/CategoryModel.js"
export const createProduct = async (req, res, next) => {
  try {
    const data = await Product.create(req.body);
    const updateCategory = await Category.findByIdAndUpdate(
      req.body.category,
      {
        $push: { products: data._id},
      },
      {new: true}
    );
    if (data && updateCategory) {
      return res.status(201).json({
        success: true,
        data,
        message: "tao san pham thanh cong!",
      });
    }

  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req,res, next)=>{
    try{
        const data = await Product.find().populate("category");
        if(data){
            return res.status(200).json({
                success: true,
                data,
                message: "lay san pham thanh cong"
            });
        }
   
    }catch(error){
        next(error)
    }
};

export const updateProductById = async (req, res, next) =>{
  try{
    const data = await Product.findByIdAndUpdate(req.params.id ,req.body, {new: true});
    const updateCategory = await Category.findByIdAndUpdate(
      req.body.category,
      {
        $push: {products: data._id},
      },
      {new: true}
    );
    if (data && updateCategory) {
      return res.status(200).json({
        success: true,
        data,
        message: "update san pham thanh cong!",
      });
    }
  }catch (error) {
    next(error);
  }
}

export const removeProductById = async (req, res, next) =>{
  try{
    const data = await Product.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        success: true,
        data,
        message: "Remove san pham thanh cong!",
      });
    }
  }catch (error) {
    next(error);
  }
}

export const getProductById = async (req, res, next) =>{
  try{
    const data = await Product.findById(req.params.id);
    if (data) {
      return res.status(200).json({
        success: true,
        data,
        message: "tim san pham thanh cong!",
      });
    }
  }catch (error) {
    next(error);
  }
}