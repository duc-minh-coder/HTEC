"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { newsData } from "../../../constants/newsData";
import { Calendar, User, ArrowLeft, Share2, Tag } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function NewsDetailPage() {
  const params = useParams<{ id?: string | string[] }>();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const article = newsData.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Không tìm thấy bài viết
          </h2>
          <Link
            href="/"
            className="text-blue-600 hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-slate-50 pt-32 pb-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại bản tin</span>
          </Link>
          <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Tag className="w-3 h-3" />
            <span>{article.tag}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-500" />
              <span>{article.author}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="bg-white p-8 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-xl prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-600 text-lg break-words overflow-x-hidden">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </article>

        {/* Footer Next Steps */}
        <div className="mt-16 bg-blue-600 rounded-[2.5rem] p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <h3 className="text-2xl font-black text-white mb-4 relative z-10">
            Cùng chúng tôi tạo nên những đột phá mới!
          </h3>
          <p className="text-blue-100 mb-8 relative z-10 font-medium">
            Đăng ký trở thành một phần của HTEC ngay hôm nay.
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-lg relative z-10"
          >
            Đăng ký tham gia
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
