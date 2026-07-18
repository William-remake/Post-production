import Image from "next/image";
import { CameraOutlined, VideoCameraOutlined } from "@ant-design/icons";

export default function page()
{
    return (
    <main className="w-full min-h-screen bg-black text-white grid grid-cols-1 lg:grid-cols-2">
      
      {/* Thêm relative và overflow-hidden để định vị các icon không bị tràn */}
      <section className="relative flex flex-col justify-center items-center text-center px-8 py-16 md:px-16 lg:px-24 bg-black overflow-hidden">
        
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes cinematicBlink {
              0%, 100% { opacity: 0.08; }
              50% { opacity: 0.45; }
            }
            .blink-delay-1 { animation: cinematicBlink 2.5s infinite ease-in-out; }
            .blink-delay-2 { animation: cinematicBlink 3s infinite ease-in-out; animation-delay: 0.6s; }
            .blink-delay-3 { animation: cinematicBlink 2.2s infinite ease-in-out; animation-delay: 1.2s; }
            .blink-delay-4 { animation: cinematicBlink 2.8s infinite ease-in-out; animation-delay: 1.8s; }
          `
        }} />

        <CameraOutlined className="absolute top-16 left-12 text-2xl text-white blink-delay-1 pointer-events-none hidden md:block" />
        <VideoCameraOutlined className="absolute bottom-20 left-16 text-3xl text-white blink-delay-2 pointer-events-none hidden md:block" />
        <VideoCameraOutlined className="absolute top-24 right-16 text-2xl text-white blink-delay-3 pointer-events-none hidden md:block" />
        <CameraOutlined className="absolute bottom-28 right-12 text-3xl text-white blink-delay-4 pointer-events-none hidden md:block" />

        <div className="max-w-2xl flex flex-col items-center z-10">
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white mb-8">
            VỀ CHÚNG TÔI
          </h1>

          <div className="space-y-6 text-sm md:text-[15px] font-light leading-relaxed text-white/80">
            <p>
              <strong className="text-white font-bold">Dựng Phim Cưới Today</strong> là studio hậu kỳ chuyên cung cấp dịch vụ chỉnh sửa video cưới, đồng hành cùng các studio, đội quay phim, freelancer và wedding planner trong việc tạo nên những thước phim cảm xúc và chỉn chu. 
              Với quy trình làm việc chuyên nghiệp, đội ngũ giàu kinh nghiệm và khả năng tùy chỉnh theo phong cách riêng của từng khách hàng, chúng tôi cam kết mang đến sản phẩm chất lượng cao, đúng tiến độ và góp phần nâng tầm giá trị cho mỗi dự án cưới.
            </p>

            <p>
              Chúng tôi tin rằng một video cưới đẹp không chỉ đến từ những khung hình được ghi lại, mà còn được hoàn thiện qua quá trình hậu kỳ đầy tâm huyết. 
              Vì vậy, mỗi sản phẩm đều được chăm chút tỉ mỉ từ màu sắc, âm thanh, nhịp dựng đến từng hiệu ứng nhỏ, nhằm truyền tải trọn vẹn cảm xúc và câu chuyện của từng cặp đôi.
            </p>

            <p>
              Bên cạnh chất lượng sản phẩm, chúng tôi luôn đặt sự hợp tác lâu dài với đối tác lên hàng đầu. 
              Quy trình làm việc rõ ràng, thời gian bàn giao đúng cam kết và khả năng đáp ứng linh hoạt theo yêu cầu giúp khách hàng yên tâm tập trung vào khâu quay phim và chăm sóc khách hàng, trong khi phần hậu kỳ được chúng tôi đảm nhận một cách chuyên nghiệp.
            </p>

            <p className="pt-4 text-white font-medium text-base tracking-wide border-t border-white/5 w-full">
              Đồng hành cùng studio phát triển.
            </p>
          </div>

        </div>
      </section>

      <section className="relative w-full min-h-100 lg:min-h-screen bg-[#111111]">
        <Image
          src="/about.jpg" 
          alt="Không gian làm việc hậu kỳ studio"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </section>
    </main>
  );
}