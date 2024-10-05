import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <>
      <main className="">
        <div className="bg-gray-100">
          <section className="max-w-screen-xl m-auto  grid grid-cols-2 gap-8 py-8">
            <div className="my-4 mx-auto ">
              <img
                src="https://bephoanggia.com/images/thumbs/Malloca_EB-8BC40.jpg"
                alt=""
              />
            </div>
            <div className="bg-white p-3 rounded-md">
              <h2 className="text-3xl font-semibold mt-3">Product 02</h2>
              <p className="my-2 text-base text-gray-600">
                Sản phẩm mới ra mắt chất lượng tốt giá thành rẻ
              </p>
              <div className="flex gap-2 items-center text-base my-2">
                <p className="text-gray-600 line-through">1000000 VNĐ</p>
                <p className="text-red-600 text-2xl font-semibold">
                  900000 VNĐ
                </p>
              </div>
              <div className="text-yellow-400 flex gap-1">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <p className="text-black">5.0</p>
                <p className="text-black">(1 danh gia)</p>
              </div>
              <div className="flex gap-8 text-base my-2">
                <p>
                  Thuong hieu : <span className="font-semibold">Fandi</span>
                </p>
                <p>
                  Tinh trang :{" "}
                  <span className="text-green-400 font-semibold">Con hang</span>
                </p>
              </div>
              <Link to="">
                <button className="btn btn-danger text-xl w-full my-3">
                  Dat mua ngay
                </button>
              </Link>
            </div>
          </section>
        </div>

        <section className="max-w-screen-2xl m-auto pt-8">
          <h3 className="text-2xl font-semibold hover:text-red-700 mt-3">
            Mô tả sản phẩm
          </h3>
          <p className="text-base text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            illum.
          </p>
          <h3 className="text-2xl font-semibold hover:text-red-700 mt-3">
            Thông số kỹ thuật
          </h3>
          <p className="text-base text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            illum.
          </p>
          <h3 className="text-2xl font-semibold hover:text-red-700 mt-3">
            Bình luận đánh giá
          </h3>
          <div className="flex gap-3 mt-4 items-center">
            <div>
              <img
                className="w-[100px] h-[100px] rounded-full"
                src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-95.jpg"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Name 01</h4>
              <div className="text-yellow-400 flex gap-1 my-1">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <div className="text-base text-justify">
                <p>Sản phẩm chất lượng cao</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container max-w-screen-2xl m-auto mt-5">
        <div className="flex justify-between">
          <h1 className="text-2xl text-red-700 font-semibold">Sản phẩm cùng loại</h1>
          <Link
            to=""
            className="text-bg bg-red-600 text-white hover:bg-red-700 p-2 rounded-md"
          >
            Xem thêm
          </Link>
        </div>
        <div className="mx-2 grid grid-cols-6 gap-3 py-3">
          <div className="border p-2 rounded-md border-red-600">
            <div className="overflow-hidden">
              <img
                className="transform transition-transform duration-300 hover:scale-110"
                src="https://bephoanggia.com/images/thumbs/Malloca_EB-8BC40.jpg"
                alt=""
              />
            </div>
            <div className="my-2">
              <h3 className="text-xl font-semibold">product 01</h3>
              <div className="flex gap-3 text-base">
                <p className="line-through text-gray-600">100000 VND</p>
                <p className="text-red-500 font-semibold">200000 VND</p>
              </div>
              <div className="mt-2"><Link to="" className="btn btn-danger w-full">Mua ngay</Link></div>
            </div>
          </div>
          <div className="border p-2 rounded-md border-red-600">
            <div className="overflow-hidden">
              <img
                className="transform transition-transform duration-300 hover:scale-110"
                src="https://bephoanggia.com/images/thumbs/Malloca_EB-8BC40.jpg"
                alt=""
              />
            </div>
            <div className="my-2">
              <h3 className="text-xl font-semibold">product 01</h3>
              <div className="flex gap-3 text-base">
                <p className="line-through text-gray-600">100000 VND</p>
                <p className="text-red-500 font-semibold">200000 VND</p>
              </div>
              <div className="mt-2"><Link to="" className="btn btn-danger w-full">Mua ngay</Link></div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
};

export default Detail;
