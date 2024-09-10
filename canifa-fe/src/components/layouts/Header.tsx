import { useContext } from "react";
import { AuthContext, AuthContextType } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(AuthContext) as AuthContextType;

  return (
    <header>
      <section className="container max-w-screen-2xl my-3 grid grid-cols-5 gap-8">
        <div className="col-span-1 flex items-center">
          <img
            className="max-w-[250px] h-auto"
            src="https://bephoanggia.com/public/frontend/images/logo.png"
            alt=""
          />
        </div>

        <div className="col-span-4 grid grid-cols-7">
          <div className="col-span-4  flex items-center justify-center">
            <form action="" className="w-full  flex items-center justify-center gap-2 ">
              <input className="border-r-0 border py-2 pl-3 outline-none placeholder:text-[13px] placeholder:text-gray-500 rounded-md w-[400px]" type="text" placeholder="Hôm nay bạn tìm gì..." />
              <button className="bg-red-600 hover:bg-red-700 p-2 rounded-md text-white">
                <div className="flex">
                <i className="bi bi-search"></i>
                <p>Tìm kiếm</p>
                </div>
              </button>
            </form>
          </div>
          <div className="col-span-1 flex items-center justify-end">
            <i className="bi bi-geo-alt-fill text-[36px] text-red-700"></i>
            <div className="mx-2">
              <p className="text-sm text-gray-500">Hệ thống</p>
              <p className="text-[15px] font-semibold">Cửa hàng</p>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-end">
          <i className="bi bi-telephone-fill text-[36px] text-red-700"></i>
            <div className="mx-2">
              <p className="text-sm text-gray-500">Hệ thống</p>
              <p className="text-[15px] font-semibold text-red-700">Cửa hàng</p>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-end">
          <i className="bi bi-cart-check-fill text-[36px] text-red-700"></i>
            <div className="mx-2">
              <p className="text-sm text-gray-500">Hệ thống</p>
              <p className="text-[15px] font-semibold text-red-700">Cửa hàng</p>
            </div>
          </div>
        </div>
       
      </section>
      <nav className="bg-red-700">
        <div className="container max-w-screen-2xl text-xl font-semibold text-white flex justify-between py-2 ">
        <ul className="flex gap-8 ">
          <li><Link to="/"><i className="bi bi-house-door-fill hover:text-yellow-400"></i></Link></li>
          <li><Link to="/news" className="hover:text-yellow-400">TIN TỨC</Link></li>
          <li><Link to="/promotion" className="hover:text-yellow-400">KHUYẾN MẠI</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">LIÊN HỆ</Link></li>
          <li><Link to="/product" className="hover:text-yellow-400">SẢN PHẨM</Link></li>
        </ul>
        <div className="flex gap-8">
          <Link to="/"><i className="bi bi-person-fill hover:text-yellow-400"></i></Link>
          <Link to="/"><i className="bi bi-bell-fill hover:text-yellow-400"></i></Link>
        </div>
        </div>
      </nav>
      <ul className="flex gap-8">
        <li>
          <Link to="/">Home</Link>
        </li>

        {user ? (
          <>
            <li>
              <p>Welcome, {user?.email}</p>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
            {user.role === "admin" && (
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            )}
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
