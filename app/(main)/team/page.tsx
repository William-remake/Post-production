import Link from "next/link";
import Image from "next/image";

export default function TeamPage() {
  const teamImages = [
    { id: 1, src: "/team 1.jpg", alt: "Ekip sản xuất Dung Phim Studio 1" },
    { id: 2, src: "/team 2.jpg", alt: "Ekip sản xuất Dung Phim Studio 2" },
    { id: 3, src: "/team 3.jpg", alt: "Ekip sản xuất Dung Phim Studio 3" },
    { id: 4, src: "/team 4.jpg", alt: "Ekip sản xuất Dung Phim Studio 4" },
    { id: 5, src: "/team 5.jpg", alt: "Ekip sản xuất Dung Phim Studio 5" },
    { id: 6, src: "/team 6.jpg", alt: "Ekip sản xuất Dung Phim Studio 6" },
    { id: 7, src: "/team 7.jpg", alt: "Ekip sản xuất Dung Phim Studio 8" },
    { id: 8, src: "/team 8.jpg", alt: "Ekip sản xuất Dung Phim Studio 8" },
    { id: 9, src: "/team 9.jpg", alt: "Ekip sản xuất Dung Phim Studio 9" },
  ];

  return (
    <main className="w-full min-h-screen bg-white text-black py-32 px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION & SLOGAN */}
        <div className="border-b border-black/10 pb-12 mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-3">Con người & Ekip</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-black mb-8">
            ĐỘI NGŨ CỦA CHÚNG TÔI
          </h1>

          {/* SLOGAN CỦA TEAM */}
          <div className="max-w-4xl">
            <blockquote className="text-xl md:text-2xl font-medium text-black/80 border-l-2 border-black pl-6 py-2 leading-relaxed">
              Những người đứng sau ống kính, lặng lẽ ghi lại trọn vẹn những khoảnh khắc vô giá và biến từng câu chuyện tình yêu thành tác phẩm điện ảnh.
            </blockquote>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamImages.map((team) => (
            <div 
              key={team.id} 
              className="relative w-full aspect-video border border-black/10 bg-zinc-100 overflow-hidden"
            >
              <Image
                src={team.src}
                alt={team.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </section>

        <div className="mt-28 flex justify-center border-t border-black/10 pt-16">
          <Link
            href="/contact"
            className="group relative px-12 py-4 bg-transparent border-2 border-black text-black font-bold uppercase tracking-wide hover:text-white transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Liên Hệ ngay</span>
            <div className="absolute inset-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>

      </div>
    </main>
  );
}