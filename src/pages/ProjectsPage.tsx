import { motion } from "motion/react";
import { ChevronRight, Users, Rocket, Search } from "lucide-react";
import { projectsData } from "../constants/projectsData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 italic leading-tight">
              Dự án <br />{" "}
              <span className="text-blue-600 underline underline-offset-8 decoration-blue-200">
                Sáng tạo HTEC
              </span>
            </h1>
            <p className="text-slate-500 text-xl italic leading-relaxed">
              Những ý tưởng đột phá được hiện thực hóa bởi cộng đồng sinh viên
              tài năng và nhiệt huyết.
            </p>
          </div>
        </header>

        {/* Search */}
        <div className="mb-16 relative max-w-xl group">
          <input
            type="text"
            placeholder="Tìm kiếm dự án (tên, công nghệ, mô tả)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-5 bg-white border-2 border-slate-100 rounded-3xl focus:outline-none focus:border-blue-600 transition-all font-medium italic shadow-sm group-hover:shadow-md"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all h-full flex flex-col"
            >
              <Link
                to={`/projects/${project.id}`}
                className="block h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight italic">
                    {project.title}
                  </h4>
                  <p className="text-slate-500 text-sm italic leading-relaxed mb-8 flex-grow line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 font-black text-lg">
                        {project.members}
                      </span>
                      <span className="text-slate-400 text-[10px] font-bold uppercase tracking-tight">
                        Thành viên
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-all group-hover:rotate-45">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <div className="bg-slate-100 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-slate-400">
              <Rocket className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-2">
              Chưa thấy dự án phù hợp
            </h3>
            <p className="text-slate-500 italic text-lg">
              Thử lại với các từ khóa khác xem sao bạn nhé!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
