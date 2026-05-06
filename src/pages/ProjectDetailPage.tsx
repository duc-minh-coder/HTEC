"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { projectsData } from "../constants/projectsData";
import { ArrowLeft, Users, Rocket, Share2, Globe, Github } from "lucide-react";
import { useEffect } from "react";

export default function ProjectDetailPage() {
  const params = useParams<{ id?: string | string[] }>();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Không tìm thấy dự án
          </h2>
          <Link
            href="/projects"
            className="text-blue-600 font-bold hover:underline"
          >
            Quay lại danh sách
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section
        className={`relative h-[60vh] flex items-end pb-20 overflow-hidden bg-gradient-to-br ${project.color || "from-blue-600 to-indigo-600"}`}
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-bold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay lại dự án
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-black uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white italic leading-none mb-4">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 italic">
                Tổng quan dự án
              </h3>
              <p className="text-slate-600 text-xl italic leading-relaxed">
                {project.details || project.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                <Users className="w-10 h-10 text-blue-600 mb-6" />
                <h4 className="text-xl font-black text-slate-900 mb-2">
                  Đội ngũ tham gia
                </h4>
                <p className="text-slate-500 italic">
                  Dự án có sự góp mặt của {project.members} thành viên tài năng,
                  cùng nhau xây dựng giải pháp đột phá.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                <Rocket className="w-10 h-10 text-blue-600 mb-6" />
                <h4 className="text-xl font-black text-slate-900 mb-2">
                  Trạng thái
                </h4>
                <p className="text-slate-500 italic">
                  Dự án đang trong giai đoạn triển khai thực tế và tiếp tục phát
                  triển các tính năng mở rộng.
                </p>
              </div>
            </div>

            <div className="rounded-[3rem] overflow-hidden border-4 border-slate-100 shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto aspect-video object-cover"
              />
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl sticky top-32">
              <h4 className="text-2xl font-black italic mb-8">
                Thông tin chi tiết
              </h4>

              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="text-white/50 font-bold uppercase tracking-widest text-[10px]">
                    Ngày trình làng
                  </span>
                  <span className="font-black italic">12.05.2024</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="text-white/50 font-bold uppercase tracking-widest text-[10px]">
                    Mentor dẫn dắt
                  </span>
                  <span className="font-black italic">Đặng Ngọc Minh</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="text-white/50 font-bold uppercase tracking-widest text-[10px]">
                    Quy mô dự án
                  </span>
                  <span className="font-black italic">
                    {project.members} Thành viên
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all font-black text-sm uppercase tracking-widest">
                  <Github className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center gap-2 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all font-black text-sm uppercase tracking-widest">
                  <Globe className="w-5 h-5" />
                </button>
              </div>

              <button className="w-full mt-6 flex items-center justify-center gap-3 p-5 bg-blue-600 rounded-3xl hover:bg-blue-500 transition-all font-black text-base uppercase tracking-widest italic shadow-xl shadow-blue-600/20">
                Chia sẻ dự án
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
