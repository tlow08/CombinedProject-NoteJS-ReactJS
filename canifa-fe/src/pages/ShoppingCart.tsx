const ShoppingCart = () => {
  return (
    <>
      <main className="max-w-screen-2xl m-auto grid grid-cols-5 gap-8">
        <section className="col-span-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Ảnh sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sản phẩm 01</td>
                <td>
                  <img
                    className="w-[100px]"
                    src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-95.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <input className="border" type="number" placeholder="2" />
                </td>
                <td>1000000000 VNĐ</td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn btn-danger">Xóa</button>
                    <button className="btn btn-warning">Cập nhật</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="col-span-2">
            <h1 className="text-3xl font-semibold">Tổng</h1>
            <div className="flex justify-between mt-3">
                <h3 className="text-xl font-semibold">Giá</h3>
                <p className="text-xl text-red-600 font-bold">1000000 VNĐ</p>
            </div>        
            <div className="flex justify-between mt-3">
                <h3 className="text-xl font-semibold">Mã giảm giá</h3>
                <input type="text text-xl text-red-600 font-bold" className="border" />
            </div>
            <div className="flex justify-between mt-3">
                <h3 className="text-xl font-semibold">Phí vân chuyển</h3>
                <p className="text-xl text-red-600 font-bold">100000 VNĐ</p>
            </div>
            <button className="btn btn-danger w-full my-3 text-xl">Thanh toán</button>
        </section>
      </main>
    </>
  );
};

export default ShoppingCart;
