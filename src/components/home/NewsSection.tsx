import { Calendar, ArrowRight, ChevronRight, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { newsData } from "../../constants/newsData";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["Tất cả", "Sự kiện", "Tin tức", "Workshop"];

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredNews = newsData
    .filter(
      (item) => activeCategory === "Tất cả" || item.tag === activeCategory,
    )
    .slice(0, 3); // Only show top 3 on landing page

  return (
    <section
      id="news"
      className="w-full py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative text background */}
      <div className="absolute top-10 -right-20 text-[15rem] font-black text-slate-100 select-none pointer-events-none italic leading-none opacity-50">
        NEWS
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-3xl">
            <h2 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4 italic">
              BẢN TIN CÂU LẠC BỘ
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 italic leading-[0.9]">
              Tin tức & <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 underline decoration-blue-600/30">
                Sự kiện mới
              </span>
            </h3>
            <p className="text-slate-500 text-xl italic max-w-xl leading-relaxed">
              Cập nhật những hoạt động bùng nổ, các dự án thực chiến và chuyển
              động công nghệ tại cộng đồng HTEC.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-sm font-black transition-all border-2 ${
                  activeCategory === cat
                    ? "bg-slate-900 border-slate-900 text-white shadow-2xl shadow-slate-900/20"
                    : "border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item, index) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] transition-all h-full flex flex-col"
              >
                <Link to={`/news/${item.id}`} className="flex flex-col h-full">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-8 left-8">
                      <span
                        className={`px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl backdrop-blur-xl ${item.color}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-8 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <User className="w-4 h-4 text-blue-600" />
                        <span>{item.author}</span>
                      </div>
                    </div>

                    <h4 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors leading-[1.2] line-clamp-2 italic">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm italic leading-relaxed mb-10 flex-grow line-clamp-3">
                      {item.content}
                    </p>

                    <div className="pt-8 border-t border-slate-50 mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-3 text-slate-900 font-black text-xs uppercase tracking-widest group/btn italic">
                        Khám phá ngay
                        <span className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white group-hover/btn:-rotate-45 transition-all duration-300">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-24 text-center">
          <Link
            to="/news"
            className="px-12 py-5 bg-slate-900 text-white rounded-[2rem] font-black italic hover:bg-blue-600 transition-all inline-flex items-center gap-4 mx-auto group shadow-2xl shadow-slate-900/20"
          >
            Tất cả bài viết
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
