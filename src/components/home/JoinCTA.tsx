import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function JoinCTA() {
  return (
    <section className="container-wide py-24">
      <div className="relative bg-blue-600 rounded-[3rem] overflow-hidden px-8 lg:px-20 py-16 lg:py-24 text-center">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/50 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight italic">
            Sẵn sàng bứt phá để trở thành <br /> "Chiến binh" Công nghệ?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-12 font-medium opacity-90 leading-relaxed italic">
            Gia nhập cộng đồng HTEC ngay hôm nay để bắt đầu lộ trình phát triển
            kỹ năng, kiến thức và tư duy đột phá.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3 group"
            >
              Đăng ký ngay
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="mt-8 text-blue-200 text-sm font-bold tracking-widest uppercase italic bg-blue-700/50 inline-block px-4 py-1 rounded-full border border-blue-400/30">
            Hạn chót đăng ký đợt này: 30/06/2024
          </p>
        </div>
      </div>
    </section>
  );
}
