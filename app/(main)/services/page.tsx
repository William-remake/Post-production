import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const products = [
    { 
      name: "Teaser", 
      image: "/dich vu 2.jpg",
      desc: "Thước phim ngắn cô đọng, tạo điểm nhấn và thu hút người xem ngay từ những giây đầu tiên." 
    },
    { 
      name: "Highlight", 
      image: "/dich vu 3.jpg",
      desc: "Tóm tắt trọn vẹn những khoảnh khắc cảm xúc nhất của ngày cưới một cách nghệ thuật." 
    },
    { 
      name: "Full Ceremony", 
      image: "/dich vu 1.jpg",
      desc: "Lưu trữ đầy đủ tiến trình ngày cưới, lời thề nguyện và các nghi thức truyền thống." 
    },
    { 
      name: "Reel Dọc", 
      image: "/dich vu 6.jpg",
      desc: "Định dạng tối ưu cho TikTok, Facebook Reels và Instagram Shorts theo xu hướng hiện đại." 
    },
    { 
      name: "Same-Day Edit", 
      image: "/dich vu 7.jpg",
      desc: "Dựng phim siêu tốc ngay tại sự kiện để trình chiếu trực tiếp trên sân khấu tiệc cưới." 
    },
    { 
      name: "Chỉnh Sửa Theo Style Riêng", 
      image: "/dich vu 5.jpg",
      desc: "Hậu kỳ, phân màu (Color Grading) cá nhân hóa hoàn toàn theo phong cách và thương hiệu riêng của bạn." 
    }
  ];

  return (
    <main className="w-full min-h-screen bg-white text-black py-32 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="border-b border-black/10 pb-12 mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-3">Dịch vụ hậu kỳ</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-black">
            MÔ HÌNH DỊCH VỤ
          </h1>
        </div>

        {/* DANH MỤC SẢN PHẨM HẬU KỲ */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-widest text-black border-l-2 border-black pl-4 sticky top-24">
                SẢN PHẨM HẬU KỲ
              </h2>
              <p className="text-sm text-black/60 mt-4 pr-6 leading-relaxed">
                Cam kết đáp ứng đa dạng các định dạng dựng phim cưới hiện đại với quy trình tối ưu và kỹ thuật xử lý chuyên sâu.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {products.map((product, idx) => (
                <div 
                  key={idx} 
                  /* ĐÃ ĐỔI HOVER: Chuyển thành hover:bg-neutral-100 (màu xám nhẹ) */
                  className="group relative border border-black/10 p-8 flex flex-col gap-6 hover:bg-neutral-100 transition-all duration-300"
                >
                  {/* Khung chứa ảnh tỉ lệ cinematic 16:9 - Kích thước tự động to theo khung card */}
                  <div className="relative w-full aspect-video overflow-hidden bg-zinc-100 border border-black/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Phần thông tin chữ - ĐÃ TĂNG SIZE CHỮ TO HƠN */}
                  <div className="flex flex-col gap-3">
                    <div>
                      {/* TĂNG SIZE: Từ text-xl lên text-2xl md:text-3xl */}
                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-black">
                        {product.name}
                      </h3>
                    </div>
                    {/* TĂNG SIZE: Từ text-xs lên text-sm md:text-base và giữ độ tương phản tốt trên nền xám */}
                    <p className="text-sm md:text-base text-black/70 leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BUTTON */}
        <div className="mt-28 flex justify-center border-t border-black/10 pt-16">
          <Link
            href="/contact"
            className="group relative px-12 py-4 bg-transparent border-2 border-black text-black font-bold uppercase tracking-wide hover:text-white transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Liên Hệ Đặt Lịch Hậu Kỳ</span>
            <div className="absolute inset-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>

      </div>
    </main>
  );
}