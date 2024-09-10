const News = () => {
  return (
    <>
      <main className="max-w-screen-xl m-auto">
        <h2 className=" font-semibold text-2xl my-8">TIN TỨC</h2>
        <section className="grid grid-cols-1 gap-8">
          <div className="flex gap-8">
            <div className="overflow-hidden h-[200px] w-[300px]">
            <img
                className="h-full w-full hover:scale-110 duration-75"
              src="https://hoangphucphoto.com/wp-content/uploads/2024/06/anh-bep-thumb.jpeg"
              alt=""
            />
            </div>
            <div>
                <h3 className="text-xl font-semibold hover:text-red-600">Hướng dẫn chọn bếp an toàn khi mua bếp</h3>
                <p className="text-base text-justify mt-3">Những tiêu chí quan trọng bạn cần biết khi mua bếp từ nhập khẩu để đảm bảo mua bếp từ chính hãng, chất lượng, an toàn, tránh mua phải hàng giả, hàng nhái</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="overflow-hidden h-[200px] w-[300px]">
            <img
                className="h-full w-full hover:scale-110 duration-75"
              src="https://hoangphucphoto.com/wp-content/uploads/2024/06/anh-bep-thumb.jpeg"
              alt=""
            />
            </div>
            <div>
                <h3 className="text-xl font-semibold hover:text-red-600">Hướng dẫn chọn bếp an toàn khi mua bếp</h3>
                <p className="text-base text-justify mt-3">Những tiêu chí quan trọng bạn cần biết khi mua bếp từ nhập khẩu để đảm bảo mua bếp từ chính hãng, chất lượng, an toàn, tránh mua phải hàng giả, hàng nhái</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="overflow-hidden h-[200px] w-[300px]">
            <img
                className="h-full w-full hover:scale-110 duration-75"
              src="https://hoangphucphoto.com/wp-content/uploads/2024/06/anh-bep-thumb.jpeg"
              alt=""
            />
            </div>
            <div>
                <h3 className="text-xl font-semibold hover:text-red-600">Hướng dẫn chọn bếp an toàn khi mua bếp</h3>
                <p className="text-base text-justify mt-3">Những tiêu chí quan trọng bạn cần biết khi mua bếp từ nhập khẩu để đảm bảo mua bếp từ chính hãng, chất lượng, an toàn, tránh mua phải hàng giả, hàng nhái</p>
            </div>
          </div>
          <div className="m-auto ">
          <h4 className="text-base text-white bg-red-600 p-2 rounded-md">Xem thêm</h4>
          </div>
        </section>
        
      </main>
    </>
  );
};

export default News;
