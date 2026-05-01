import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Tag as TagIcon,
} from "lucide-react";
import { newsData } from "../constants/newsData";
import { Link } from "react-router-dom";

const categories = ["Tất cả", "Sự kiện", "Tin tức", "Workshop"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsData.filter((item) => {
    const matchesCategory =
      activeCategory === "Tất cả" || item.tag === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 italic leading-tight">
              Trung tâm <br />{" "}
              <span className="text-blue-600 underline underline-offset-8 decoration-blue-200">
                Thông tin HTEC
              </span>
            </h1>
            <p className="text-slate-500 text-xl italic leading-relaxed">
              Khám phá những tin tức mới nhất về công nghệ, khởi nghiệp và các
              hoạt động sôi nổi từ cộng đồng sinh viên HOU.
            </p>
          </div>
        </header>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-sm font-black transition-all border-2 ${
                  activeCategory === cat
                    ? "bg-slate-900 border-slate-900 text-white shadow-xl"
                    : "border-slate-200 text-slate-400 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 group">
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-medium italic shadow-sm group-hover:shadow-md"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item, index) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all h-full flex flex-col"
              >
                <Link
                  to={`/news/${item.id}`}
                  className="block h-full flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span
                        className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md ${item.color}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-6 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-blue-600" />
                        <span>{item.author}</span>
                      </div>
                    </div>

                    <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight italic line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm italic leading-relaxed mb-8 flex-grow line-clamp-3">
                      {item.content}
                    </p>

                    <div className="pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                        <span>Đọc tiếp bài viết</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredNews.length === 0 && (
          <div className="py-24 text-center">
            <div className="bg-slate-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-400">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              Không tìm thấy bài viết nào
            </h3>
            <p className="text-slate-500 italic">
              Thử thay đổi từ khóa hoặc bộ lọc của bạn.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
