
// type Props = {}

const Footer = () => {
  return (
    <>
    <section className="mt-16"></section>
    <footer className=" bg-red-700 mt-16">
      <section className="max-w-screen-2xl m-auto text-white grid grid-cols-3 px-[50px]">
        <div className="mt-4">
          <h2 className="font-semibold text-xl">ĐĂNG KÝ NHẬN BẢN TIN</h2>
          <p className="text-base">Cập nhật tin tức, sản phẩm, khuyến mại</p>
        </div>
        <div>
          <form action="" className="flex my-[30px]">
            <div className="w-4/5">
              <input
                className="w-full p-2 text-black outline-none"
                type="text"
                name=""
                id=""
                placeholder="Nhập email của bạn..."
              />
            </div>
            <div className="w-1/5">
              <button className="bg-red-900 p-2">Gửi ngay</button>
            </div>
          </form>
        </div>
      </section>
      <section className=" bg-white py-8">
        <div className="grid grid-cols-3 px-[50px] gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Chính sách</h3>
            <a className="mt-3" href="">Khiếu nại & Bảo hành</a>
            <a className="mt-2" href="">Hình thức thanh toán</a>
            <a className="mt-2" href="">Chính sách đổi trả</a>
            <a className="mt-2" href="">Điều khoản quy định</a>
            <a className="mt-2" href="">Chính sách bảo mật</a>
            <a className="mt-2" href="">Chính sách vận chuyển</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Tổng đài hỗ trợ</h3>
            <p className="mt-3">1900 1900</p>
            <p className="mt-2">1900 1900</p>
          </div>
          <div className="grid grid-cols-1">
            <h3 className="text-xl font-semibold">Vị trí</h3>
            <div className="w-full">
              <iframe className="h-full w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.626616381193!2d106.17891837446473!3d20.439441007760053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e7409dc5ac47%3A0xd450dd96302829ff!2zNjU5IFRyxrDhu51uZyBDaGluaCwgSOG6oSBMb25nLCBUUC4gTmFtIMSQ4buLbmgsIE5hbSDEkOG7i25oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1717922494030!5m2!1svi!2s"  loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p className="text-center text-white py-2 text-base">
          Siêu thị bếp Thanh Hiền số 659 Trường Chinh, thành phố Nam Định cảm ơn
          bạn đã ghé qua Shop
        </p>
      </section>
    </footer>
    </>
  )
}

export default Footer