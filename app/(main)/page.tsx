"use client";

import Image from "next/image";
import Link from "next/link";

// Import Swiper React components và styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function page() {
  const services = [
    { name: "Full Ceremony", image: "/dich vu 1.jpg" },
    { name: "Highlight", image: "/dich vu 3.jpg" },
    { name: "Teaser", image: "/dich vu 2.jpg" },
    { name: "Chỉnh Sửa Theo Style Riêng", image: "/dich vu 5.jpg" },
    { name: "Same-Day Edit", image: "/dich vu 7.jpg" },
    { name: "Reel Đọc", image: "/dich vu 6.jpg" },
  ];

  return (
    <main className="w-full bg-white">
      {/* SECTION HERO */}
      <section className="relative w-full min-h-screen flex items-center justify-end px-6 lg:px-20 font-sans overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/homepage.jpg"
            alt="slogan studio"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
            quality={90}
            className="object-cover object-center w-full h-full transition-transform duration-700"
          />
        </div>
      </section>

      {/* SECTION DẢI LED CHẠY CHỮ */}
      <section className="w-full bg-[#000000] py-6 overflow-hidden border-y border-white relative flex items-center">
        <style>{`
          @keyframes marquee-led {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-led-text {
            display: flex;
            width: max-content;
            animation: marquee-led 25s linear infinite;
          }
          
          .services-swiper .swiper-button-prev,
          .services-swiper .swiper-button-next {
            display: none !important;
          }
        `}</style>

        <div className="animate-led-text flex items-center gap-16 text-white font-black text-2xl md:text-4xl tracking-widest uppercase italic whitespace-nowrap">
          <span>Dung Phim Studio</span>
          <span className="text-white">—</span>
          <span>Dung Phim Studio</span>
          <span className="text-white">—</span>
          <span>Dung Phim Studio</span>
          <span className="text-white">—</span>
          <span>Dung Phim Studio</span>
          <span className="text-white">—</span>

          {/* Nhân đôi chuỗi chữ để tạo vòng lặp nối tiếp mượt mà, không bị trống khung hình */}
          <span>Dung Phim Studio</span>
          <span className="text-white">—</span>
          <span>Dung Phim Studio</span>
          <span className="text-white">—</span>
          <span>Dung Phim Studio</span>
          <span className="text-white">—</span>
          <span>Dung Phim Studio</span>
          <span className="text-white">—</span>
        </div>
      </section>

      {/* -------------------- SECTION: SERVICES -------------------- */}
      <section>
        <div className="relative py-20 px-10 md:px-20 lg:px-32 bg-white">
          <div className="flex flex-col items-center justify-center mb-12 relative">
            <h2 className="md:text-5xl lg:text-6xl font-bold text-lg uppercase tracking-wide text-black">
              DỊCH VỤ
            </h2>

            {/* ĐỂU NHAU: Đồng bộ cả 2 nút Swiper thành hình tròn, kích thước 40x40px (w-10 h-10) và hover điền nền đen hoàn hảo */}
            <div className="flex items-center gap-3 mt-4 md:absolute md:right-0 md:mt-0">
              {/* Mũi tên TRƯỚC (Prev) */}
              <button className="swiper-button-prev-custom w-10 h-10 border border-black/20 rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 19l-7-7 7-7" /></svg>
              </button>
              {/* Mũi tên SAU (Next) */}
              <button className="swiper-button-next-custom w-10 h-10 border border-black/20 rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                {/* Card Dịch vụ */}
                <div className="border border-black/10 rounded-sm overflow-hidden group hover:border-black transition-all duration-300">
                  <div className="relative aspect-video bg-[#1a1a1a]">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="px-6 py-5 bg-white text-center border-t border-black/10">
                    <span className="inline-block px-6 py-2 border border-black/10 rounded-sm text-sm font-bold uppercase tracking-widest text-black group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                      {service.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-16 flex justify-center">
            <Link
              href="/services"
              className="group relative px-12 py-4 bg-white border-2 border-black text-black font-bold uppercase tracking-wide hover:text-white transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Khám phá dịch vụ</span>
              <div className="absolute inset-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------- SECTION: PRODUCTS -------------------- */}
      <section className="py-16 bg-black overflow-hidden ">
        <div className="flex flex-col items-center justify-center mb-12 relative">
          <h2 className="md:text-5xl lg:text-6xl font-bold text-lg uppercase tracking-wide text-white">
            SẢN PHẨM
          </h2>
        </div>

        {/* Khung dải ảnh chuyển động */}
        <div className="relative flex overflow-hidden bg-black py-6">
          <style dangerouslySetInnerHTML={{
            __html: `
        @keyframes slide { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-track { display: flex; width: max-content; animation: slide 25s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}} />

          <div className="marquee-track gap-4 px-2">
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, index) => (
              <div key={index} className="relative w-95 md:w-135 aspect-video shrink-0 overflow-hidden border border-white/10 group">
                <Image
                  src={`/san pham ${num}.jpg`}
                  alt={`Wedding ${num}`}
                  fill
                  sizes="(max-width: 768px) 380px, 540px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/products"
            className="group relative px-12 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wide hover:text-black transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Xem Tất Cả</span>
            <div className="absolute inset-0 h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>
      </section>
    </main>
  )
}