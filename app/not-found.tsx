import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6">
      <div className="text-center space-y-6">
        {/* Số 404 */}
        <h1 className="text-[120px] md:text-[160px] font-black tracking-tighter leading-none">
          404
        </h1>
        
        {/* Thông báo */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest">
            Page Not Found
          </h2>
          <p className="text-black/60 max-w-md mx-auto uppercase tracking-wider text-sm">
            Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
        </div>

        {/* Nút quay về */}
        <Link 
          href="/" 
          className="inline-block mt-8 px-8 py-3 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-all duration-300"
        >
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
}