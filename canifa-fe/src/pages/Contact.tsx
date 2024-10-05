
const Contact = () => {
  return (
    <>
     <main>
        <section className="max-w-screen-2xl m-auto grid grid-cols-2 gap-8 p-4">
            <div className="w-full">
              <iframe className="h-full w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.626616381193!2d106.17891837446473!3d20.439441007760053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e7409dc5ac47%3A0xd450dd96302829ff!2zNjU5IFRyxrDhu51uZyBDaGluaCwgSOG6oSBMb25nLCBUUC4gTmFtIMSQ4buLbmgsIE5hbSDEkOG7i25oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1717922494030!5m2!1svi!2s"  loading="lazy"></iframe>
            </div>
            <div>
                <h4 className="text-xl font-semibold my-3">LIÊN HỆ</h4>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="form-label">Họ tên</label>
                        <input type="text" name="" id="" className="form-control mt-2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="form-label">Số điện thoại</label>
                        <input type="text" name="" id="" className="form-control mt-2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="form-label">Email</label>
                        <input type="text" name="" id="" className="form-control mt-2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="form-label">Nội dung</label>
                        <textarea name="" id="" className="form-control mt-2" />
                    </div>
                    <button className="btn btn-danger flex text-base" type="submit"><i className="bi bi-send-fill"></i><p>Gửi</p></button>
                </form>
            </div>
        </section>    
    </main> 
    </>
  )
}

export default Contact
