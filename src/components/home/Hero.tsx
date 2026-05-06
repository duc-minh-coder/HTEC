"use client";

import { ArrowRight, Sparkles, Lightbulb, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 overflow-hidden bg-slate-50 mt-8 md:mt-0">
      {/* Background patterns - responsive sizing */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 flex-shrink-0" />
              <span>CÂU LẠC BỘ CÔNG NGHỆ & KHỞI NGHIỆP</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-4 sm:mb-6">
              Nơi công nghệ <br className="hidden xs:block" />
              <span className="text-blue-600 italic">khởi nguồn</span>{" "}
              <br className="hidden xs:block" />
              sáng tạo
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              HTEC là câu lạc bộ xây dựng môi trường học tập và phát triển năng
              lực toàn diện cho sinh viên Khoa CNTT.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link
                href="/register"
                className="btn-primary touch-target inline-flex items-center justify-center gap-2 group text-center"
              >
                Đăng ký tham gia
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#about"
                className="btn-secondary touch-target inline-flex items-center justify-center text-center"
              >
                Tìm hiểu thêm
              </a>
            </div>

            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-6 sm:gap-8">
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-slate-300 flex-shrink-0 flex items-center justify-center"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Member"
                      width={40}
                      height={40}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                ))}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0">
                  +120
                </div>
              </div>
              <div className="text-sm">
                <span className="block font-bold text-slate-900">
                  Thành viên tích cực
                </span>
                <span className="text-slate-500 italic text-xs">
                  Gia nhập ngay hôm nay
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hero image - hidden on small screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-[2rem] lg:rounded-[3rem] overflow-hidden rotate-3 shadow-2xl relative bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                alt="Collab"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-12 bg-white p-4 lg:p-6 rounded-2xl lg:rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 lg:gap-4 animate-bounce-slow">
              <div className="bg-orange-100 p-2 lg:p-3 rounded-xl lg:rounded-2xl text-orange-600 flex-shrink-0">
                <Lightbulb className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="hidden sm:block">
                <span className="block font-bold text-slate-900 text-sm lg:text-lg">
                  40+ Dự án
                </span>
                <span className="text-slate-500 text-xs lg:text-sm italic">
                  Đã triển khai
                </span>
              </div>
            </div>

            <div className="absolute top-12 -right-8 bg-white p-4 lg:p-6 rounded-2xl lg:rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 lg:gap-4 animate-float">
              <div className="bg-emerald-100 p-2 lg:p-3 rounded-xl lg:rounded-2xl text-emerald-600 flex-shrink-0">
                <Cpu className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="hidden sm:block">
                <span className="block font-bold text-slate-900 text-sm lg:text-lg">
                  Tech & Innovation
                </span>
                <span className="text-slate-500 text-xs lg:text-sm italic">
                  Công nghệ dẫn đầu
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-10 sm:h-12 md:h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,151.74,124.64,222.89,104.83,284,87.8,318.52,65.7,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
}
