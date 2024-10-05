import { Link } from "react-router-dom"
import MenuCategories from "../components/MenuCategories"

const Products = () => {
  return (
    <>
      <main className="max-w-screen-2xl m-auto grid grid-cols-5 gap-8">
            <nav className="col-span-1">
               <MenuCategories /> 
            </nav>
            <section className="col-span-4 ">
               <div className="grid grid-cols-4 gap-3">
               <div className="border p-2 rounded-md">
                    <Link to="">
                    <div className="overflow-hidden w-full">
                    <img className="hover:scale-125 duration-150" src="https://s-housing.vn/wp-content/uploads/2022/04/hinh-anh-bep-dep-8.jpg" alt="" />
                    </div>
                    </Link>
                    <div className="mt-2 text-center">
                        <h4 className="text-xl font-semibold">Product 01</h4>
                        <p className="text-base text-gray-600">Lò nướng Malloca EB - 8B25 Mặt kính màu đen phối inox chịu lực tốt</p>
                        <div className="flex gap-2 justify-center text-base my-2">
                            <p className="text-gray-600 line-through">1000000 VNĐ</p><p className="text-red-600 font-semibold">900000 VNĐ</p>
                        </div>
                        <div><Link to="" className="btn btn-danger w-full">Mua ngay</Link></div>
                    </div>
                </div>
                <div className="border p-2 rounded-md">
                    <Link to="">
                    <div className="overflow-hidden w-full">
                    <img className="hover:scale-125 duration-150" src="https://s-housing.vn/wp-content/uploads/2022/04/hinh-anh-bep-dep-8.jpg" alt="" />
                    </div>
                    </Link>
                    <div className="mt-2 text-center">
                        <h4 className="text-xl font-semibold">Product 01</h4>
                        <p className="text-base text-gray-600">Lò nướng Malloca EB - 8B25 Mặt kính màu đen phối inox chịu lực tốt</p>
                        <div className="flex gap-2 justify-center text-base my-2">
                            <p className="text-gray-600 line-through">1000000 VNĐ</p><p className="text-red-600 font-semibold">900000 VNĐ</p>
                        </div>
                        <div><Link to="" className="btn btn-danger w-full">Mua ngay</Link></div>
                    </div>
                </div>
                <div className="border p-2 rounded-md">
                    <Link to="">
                    <div className="overflow-hidden w-full">
                    <img className="hover:scale-125 duration-150" src="https://s-housing.vn/wp-content/uploads/2022/04/hinh-anh-bep-dep-8.jpg" alt="" />
                    </div>
                    </Link>
                    <div className="mt-2 text-center">
                        <h4 className="text-xl font-semibold">Product 01</h4>
                        <p className="text-base text-gray-600">Lò nướng Malloca EB - 8B25 Mặt kính màu đen phối inox chịu lực tốt</p>
                        <div className="flex gap-2 justify-center text-base my-2">
                            <p className="text-gray-600 line-through">1000000 VNĐ</p><p className="text-red-600 font-semibold">900000 VNĐ</p>
                        </div>
                        <div><Link to="" className="btn btn-danger w-full">Mua ngay</Link></div>
                    </div>
                </div>
               </div>
               <div className="text-center my-4">
               <Link to="" className="btn btn-danger">Xem thêm</Link>
               </div>
            </section>
      </main>
    </>
  )
}

export default Products
