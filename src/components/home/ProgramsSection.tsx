import { Code, Terminal, Users, Trophy, Rocket, ChevronRight, MessageSquare, Briefcase, Presentation } from 'lucide-react';
import { motion } from 'motion/react';
import { projectsData } from '../../constants/projectsData';
import { Link } from 'react-router-dom';

const programs = [
  {
    icon: Terminal,
    title: "Tech Talk",
    desc: "Chia sẻ kiến thức, xu hướng công nghệ từ các chuyên gia.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Rocket,
    title: "Startup Bootcamp",
    desc: "Chương trình huấn luyện giúp bạn xây dựng ý tưởng khởi nghiệp.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Code,
    title: "Hackathon",
    desc: "Sân chơi lập trình, giải quyết vấn đề thực tế trong thời gian ngắn.",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Users,
    title: "Mentor Day",
    desc: "Kết nối 1-1 với mentor để nhận định hướng và phát triển cá nhân.",
    color: "bg-emerald-100 text-emerald-600"
  }
];

const timeline = [
  { icon: MessageSquare, title: "Tech Talk", desc: "Chia sẻ kiến thức, xu hướng công nghệ từ các chuyên gia và đối tác uy tín." },
  { icon: Rocket, title: "Startup Bootcamp", desc: "Chương trình huấn luyện giúp bạn xây dựng ý tưởng khởi nghiệp vững chắc." },
  { icon: Code, title: "Hackathon", desc: "Sân chơi lập trình, giải quyết vấn đề thực tế trong thời gian ngắn cùng đội nhóm." },
  { icon: Users, title: "Mentor Day", desc: "Kết nối 1-1 với mentor để nhận định hướng và lộ trình phát triển cá nhân." },
  { icon: Presentation, title: "Demo Day", desc: "Trình bày dự án trước hội đồng tư vấn và cơ hội nhận đầu tư từ doanh nghiệp." }
];


export default function ProgramsSection() {
  return (
    <section id="activities" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4">CHƯƠNG TRÌNH & DỰ ÁN</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 italic">Hoạt động & Hoài bão</h3>
          <p className="text-slate-600 text-lg italic">
            Chúng tôi tạo ra các sân chơi chuyên nghiệp để sinh viên rèn luyện kỹ năng và tinh thần khởi nghiệp.
          </p>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden lg:block mb-32 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2" />
          <div className="relative flex justify-between">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center w-48 relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center text-blue-600 mb-6 shadow-xl shadow-blue-100">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2 text-center">{item.title}</h4>
                <p className="text-slate-400 text-xs italic text-center px-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="lg:hidden mb-24 space-y-8 pl-4 border-l-2 border-blue-600 border-dashed">
          {timeline.map((item, index) => (
            <div key={index} className="relative pb-8">
              <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="pl-6">
                <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm italic">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-black text-slate-900 italic">Dự án tiêu biểu</h3>
            <Link to="/projects" className="text-blue-600 font-bold flex items-center gap-2 hover:underline">
              Xem tất cả dự án
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all flex flex-col sm:flex-row cursor-pointer"
              >
                <Link to={`/projects/${project.id}`} className="flex flex-col sm:flex-row w-full h-full">
                  <div className="sm:w-2/5 relative overflow-hidden min-h-[250px]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="sm:w-3/5 p-8 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-3">{project.title}</h4>
                    <p className="text-slate-600 text-sm italic mb-6 flex-grow leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                      <div className="flex items-center gap-2">
                         <span className="text-blue-600 font-black text-xl">{project.members}</span>
                         <span className="text-slate-400 text-xs font-bold uppercase tracking-tighter">Thành viên tham dự</span>
                      </div>
                      <div className="p-3 bg-slate-900 text-white rounded-2xl group-hover:bg-blue-600 transition-all group-hover:rotate-45 duration-300">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
