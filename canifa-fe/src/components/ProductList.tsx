import { useContext } from "react";
import { ProductContext, ProductContextType } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { state, removeProduct } = useContext(
    ProductContext
  ) as ProductContextType;
  return (
    <>
      <h1 className="text-3xl font-semibold text-center">Danh sách sản phẩm</h1>
      <Link to="/admin/product-add" className="btn btn-primary">Add new product</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category?.title}</td>
              <td>{item.description}</td>
              <td>
                <div className="flex gap-2">
                  <Link
                    to={`/admin/product-edit/${item._id}`}
                    className="btn btn-warning"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeProduct(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
