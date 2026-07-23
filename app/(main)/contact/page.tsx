import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined, 
  FacebookOutlined 
} from "@ant-design/icons";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-white text-black py-32 px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="border-b border-black/10 pb-12 mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-black">
            LIÊN HỆ
          </h1>
        </div>

        {/* MAIN CONTENT: 2 CỘT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* CỘT TRÁI: THÔNG TIN LIÊN HỆ */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black border-l-2 border-black pl-4 mb-6">
                DỰNG PHIM CƯỚI TODAY
              </h2>
              <p className="text-sm md:text-base text-black/70 leading-relaxed mb-8">
                Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn để tạo nên những thước phim cưới mang đậm dấu ấn cá nhân. Hãy liên hệ qua các kênh dưới đây hoặc ghé thăm studio của chúng tôi.
              </p>
            </div>

            <div className="flex flex-col gap-8 border-t border-black/10 pt-8">
              {/* SỐ ĐIỆN THOẠI */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center shrink-0 mt-1 text-base">
                  <PhoneOutlined />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/50 mb-1">Hotline / Zalo</p>
                  <a href="https://zalo.me/0967283950" className="text-lg md:text-xl font-bold hover:underline">
                    0967.283.950
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center shrink-0 mt-1 text-base">
                  <MailOutlined />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/50 mb-1">Email tư vấn & Đặt lịch</p>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=panumasdigital@gmail.com" className="text-lg md:text-xl font-bold hover:underline">
                    panumasdigital@gmail.com
                  </a>
                </div>
              </div>

              {/* ĐỊA CHỈ */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center shrink-0 mt-1 text-base">
                  <EnvironmentOutlined />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/50 mb-1">Địa chỉ Studio</p>
                  <p className="text-lg md:text-xl font-bold leading-snug">
                    657/16 Đ. Phú Lợi, Phú Lợi, Hồ Chí Minh 75000, Việt Nam
                  </p>
                </div>
              </div>
            </div>

            {/* MẠNG XÃ HỘI */}
            <div className="border-t border-black/10 pt-8">
              <p className="text-xs uppercase tracking-widest text-black/50 mb-4">Kênh truyền thông</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.facebook.com/share/1KE35fFUps/?mibextid=wwXIfr" className="px-6 py-2.5 border border-black/20 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all inline-flex items-center gap-2">
                  <FacebookOutlined />
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: GOOGLE MAPS */}
          <div className="w-full h-112.5 lg:h-145 border border-black/10 relative overflow-hidden bg-zinc-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.647893936364!2d106.69069671139546!3d10.989927489127028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1de8fd73705%3A0x4ca3f880cb96c9c!2sCTY%20TNHH%20Truy%E1%BB%81n%20Th%C3%B4ng%20Panumas%20Digital!5e0!3m2!1svi!2s!4v1784794425077!5m2!1svi!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            />
          </div>

        </div>

      </div>
    </main>
  );
}