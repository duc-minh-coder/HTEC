import { ArrowRight, Sparkles, Code, Cpu, Lightbulb, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-6">
              <Sparkles className="w-3 h-3" />
              <span>CÂU LẠC BỘ CÔNG NGHỆ & KHỞI NGHIỆP HOU</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Nơi công nghệ <br />
              <span className="text-blue-600 italic">khởi nguồn</span> <br />
              sáng tạo
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Labcom được xây dựng với mục tiêu tạo ra một môi trường học tập và phát triển năng lực toàn diện cho sinh viên Khoa CNTT.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2 group"
              >
                Đăng ký tham gia
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#about"
                className="px-8 py-4 rounded-2xl font-bold text-lg text-slate-700 hover:bg-white hover:shadow-lg transition-all border border-slate-200 flex items-center justify-center cursor-pointer"
              >
                Tìm hiểu thêm
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Member"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
                  +120
                </div>
              </div>
              <div className="text-sm">
                <span className="block font-bold text-slate-900">Thành viên tích cực</span>
                <span className="text-slate-500 italic block">Gia nhập ngay hôm nay</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Collab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-12 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-bold text-slate-900 text-lg">Hơn 40+ Dự án</span>
                <span className="text-slate-500 text-sm italic">Đã được triển khai</span>
              </div>
            </div>

            <div className="absolute top-12 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 animate-float">
              <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-bold text-slate-900 text-lg">Tech & Innovation</span>
                <span className="text-slate-500 text-sm italic">Công nghệ dẫn đầu</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,151.74,124.64,222.89,104.83,284,87.8,318.52,65.7,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
