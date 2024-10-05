import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext, CategoryContextType } from "../contexts/CategoryContext";

const CategoryList = () => {

    const {state, removeCategory} = useContext(CategoryContext) as CategoryContextType;

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">Danh sách danh mục sản phẩm</h1>
      <Link to="/admin/category-add" className="btn btn-primary mb-3">Add New Category</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.categories.map((item )=> (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <Link to={`/admin/category-edit/${item._id}`} className="btn btn-warning me-2">Edit</Link>
                <button onClick={() => removeCategory(item._id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
