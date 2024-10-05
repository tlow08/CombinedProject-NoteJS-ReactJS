import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const LayoutAdmin: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  // console.log(user);
  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <header className="flex items-center justify-between p-2 bg-red-700 text-yellow-500">
        <div>
          <h3 className="text-xl font-semibold">
            Chào mừng {user.email} quay trở lại
          </h3>
        </div>
        <div>
          <Link to="/" className="btn btn-warning">
            Thoát
          </Link>
        </div>
      </header>
      <div className="row mt-3">
        <div className="col-2">
          <div>
			<div className="flex justify-center">
				<img className="w-[120px] rounded-full" src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-84.jpg" alt="" />
			</div>
			<div className="text-center">
				<h4 className="text-base font-semibold mt-2">{user.email}</h4>
			</div>
		</div>
          <div className="text-[18px]">
            <ul className="p-3">
              <li className="bg-red-700 text-white p-2 rounded-md hover:bg-red-800 mt-2">
                <Link className="w-full h-full" to="/admin">Bảng điểu khiển</Link>
              </li>
              <li className="bg-red-700 text-white p-2 rounded-md hover:bg-red-800 mt-2">
                <Link  className="w-full h-full"  to="/admin/users">Tài khoản</Link>
              </li>
              <li className="bg-red-700 text-white p-2 rounded-md hover:bg-red-800 mt-2">
                <Link className="w-full h-full"  to="/admin/categories">Danh mục</Link>
              </li>
              <li className="bg-red-700 text-white p-2 rounded-md hover:bg-red-800 mt-2">
                <Link className="w-full h-full"  to="/admin/products">Sản phẩm</Link>
              </li>
              <li className="bg-red-700 text-white p-2 rounded-md hover:bg-red-800 mt-2">
                <Link className="w-full h-full"  to="/admin/brands">Thương hiệu</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-10">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
