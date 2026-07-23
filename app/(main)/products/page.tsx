import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  // Chia 17 ảnh sản phẩm thành 3 nhóm dữ liệu
  const row1 = [1, 2, 3, 4, 5, 6];
  const row2 = [7, 8, 9, 10, 11, 12];
  const row3 = [13, 14, 15, 16, 17, 1];

  return (
    <main className="w-full min-h-screen bg-white text-black py-32 px-10 overflow-hidden">
      
      {/* CSS Keyframes cho Marquee 2 Hướng */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 35s linear infinite;
        }
        
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 35s linear infinite;
        }

        /* Tạm dừng chuyển động khi hover vào bất kỳ hàng nào */
        .marquee-row:hover .animate-marquee-left,
        .marquee-row:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto mb-20">
        {/* HEADER SECTION */}
        <div className="border-b border-black/10 pb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-3">Products</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-black">
            TẤT CẢ SẢN PHẨM
          </h1>
        </div>
      </div>

      {/* 3 HÀNG SẢN PHẨM CHẠY LIÊN TỤC */}
      <div className="flex flex-col gap-6 w-full">
        
        {/* HÀNG 1: Chạy từ Phải sang Trái */}
        <div className="marquee-row relative w-full overflow-hidden bg-white py-2">
          <div className="animate-marquee-left gap-6">
            {[...row1, ...row1, ...row1, ...row1].map((num, idx) => (
              <div 
                key={`r1-${idx}`} 
                className="relative w-80 md:w-120 aspect-video shrink-0 overflow-hidden border border-black/10 group hover:border-black transition-all duration-300"
              >
                <Image
                  src={`/san pham ${num}.jpg`}
                  alt={`Sản phẩm ${num}`}
                  fill
                  sizes="(max-width: 768px) 320px, 480px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* HÀNG 2: Chạy từ Trái sang Phải (Đổi hướng) */}
        <div className="marquee-row relative w-full overflow-hidden bg-white py-2">
          <div className="animate-marquee-right gap-6">
            {[...row2, ...row2, ...row2, ...row2].map((num, idx) => (
              <div 
                key={`r2-${idx}`} 
                className="relative w-80 md:w-120 aspect-video shrink-0 overflow-hidden border border-black/10 group hover:border-black transition-all duration-300"
              >
                <Image
                  src={`/san pham ${num}.jpg`}
                  alt={`Sản phẩm ${num}`}
                  fill
                  sizes="(max-width: 768px) 320px, 480px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* HÀNG 3: Chạy từ Phải sang Trái */}
        <div className="marquee-row relative w-full overflow-hidden bg-white py-2">
          <div className="animate-marquee-left gap-6">
            {[...row3, ...row3, ...row3, ...row3].map((num, idx) => (
              <div 
                key={`r3-${idx}`} 
                className="relative w-80 md:w-120 aspect-video shrink-0 overflow-hidden border border-black/10 group hover:border-black transition-all duration-300"
              >
                <Image
                  src={`/san pham ${num}.jpg`}
                  alt={`Sản phẩm ${num}`}
                  fill
                  sizes="(max-width: 768px) 320px, 480px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CTA BUTTON */}
      <div className="max-w-7xl mx-auto mt-28 flex justify-center border-t border-black/10 pt-16">
        <Link
          href="/contact"
          className="group relative px-12 py-4 bg-transparent border-2 border-black text-black font-bold uppercase tracking-wide hover:text-white transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">Bắt đầu dự án ngay</span>
          <div className="absolute inset-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
        </Link>
      </div>

    </main>
  );
}