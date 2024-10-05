import { Link } from "react-router-dom";
// import MenuCategories from "../components/MenuCategories";

const Home = () => {
  return (
    <>
        {/* <nav className="col-span-1">
          <MenuCategories />
        </nav> */}
        <div className="w-full">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://bephoanggia.com/images/banners/banner-bom-tan-3-ngay-vang.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://bephoanggia.com/images/banners/banner-khuyen-mai-70.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://bephoanggia.com/images/banners/banner-bom-tan-3-ngay-vang.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      
      <section className="container max-w-screen-2xl m-auto mt-5 grid grid-cols-3 gap-8">
        <div className="flex gap-4 p-4 border-2 border-red-700 rounded-lg ">
          <div className="h-[120px] w-[120px] flex justify-center items-center overflow-hidden rounded-full">
            <img
              className="w-full h-full object-cover"
              src="https://pms.edu.vn/wp-content/uploads/2023/12/su-menh-tam-nhin-la-gi-.jpg"
              alt="Image"
            />
          </div>

          <div>
            <h3 className="text-lg text-red-700 font-semibold">Khẩu hiệu</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              possimus.
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-4 border-2 border-red-700 rounded-lg ">
          <div className="h-[120px] w-[120px] flex justify-center items-center overflow-hidden rounded-full">
            <img
              className="w-full h-full object-cover"
              src="https://pms.edu.vn/wp-content/uploads/2023/12/su-menh-tam-nhin-la-gi-.jpg"
              alt="Image"
            />
          </div>

          <div>
            <h3 className="text-lg text-red-700 font-semibold">Tầm nhìn</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              possimus.
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-4 border-2 border-red-700 rounded-lg ">
          <div className="h-[120px] w-[120px] flex justify-center items-center overflow-hidden rounded-full">
            <img
              className="w-full h-full object-cover"
              src="https://pms.edu.vn/wp-content/uploads/2023/12/su-menh-tam-nhin-la-gi-.jpg"
              alt="Image"
            />
          </div>

          <div>
            <h3 className="text-lg text-red-700 font-semibold">Xứ mệnh</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              possimus.
            </p>
          </div>
        </div>
      </section>
      <section className="container max-w-screen-2xl m-auto mt-5">
        <div className="flex justify-between">
          <h1 className="text-2xl text-red-700 font-semibold">Sản phẩm mới</h1>
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
      <section className="container max-w-screen-2xl m-auto mt-5">
        <div className="flex justify-between">
          <h1 className="text-2xl text-red-700 font-semibold">Sản phẩm bán chạy</h1>
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
      <section className="container max-w-screen-2xl m-auto mt-5 grid grid-cols-2 gap-3">
        <div className="overflow-hidden">
        <img className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" src="https://i0.wp.com/topnoithat.com/wp-content/uploads/2022/05/khong-gian-ben-trong-cua-hang-bep-euro.jpg?resize=850%2C567&ssl=1" alt="" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <img className="object-cover transform transition-transform duration-300 hover:scale-95" src="https://bepnamanh.com/images/2018/nam-web/anh-cua-hang.png" alt="" />
          <img className="object-cover transform transition-transform duration-300 hover:scale-95"  src="https://bepnamanh.com/images/2018/nam-web/anh-cua-hang.png" alt="" />
          <img className="object-cover transform transition-transform duration-300 hover:scale-95"  src="https://bepnamanh.com/images/2018/nam-web/anh-cua-hang.png" alt="" />
          <img className="object-cover transform transition-transform duration-300 hover:scale-95"  src="https://bepnamanh.com/images/2018/nam-web/anh-cua-hang.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
