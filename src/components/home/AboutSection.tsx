import {
  Lightbulb,
  Code,
  Target,
  Users,
  FlaskConical,
  Rocket,
  Briefcase,
  Trophy,
} from "lucide-react";
import { motion } from "motion/react";

const areas = [
  {
    icon: Code,
    title: "Học công nghệ thực chiến",
    desc: "Chúng tôi học bằng cách làm, áp dụng kiến thức vào dự án thực tế để phát triển kỹ năng và tư duy.",
    color: "bg-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Phát triển tư duy khởi nghiệp",
    desc: "Khơi nguồn ý tưởng, xây dựng mô hình kinh doanh và biến ý tưởng thành sản phẩm giá trị.",
    color: "bg-amber-500",
  },
  {
    icon: Target,
    title: "Kết nối doanh nghiệp",
    desc: "Giao lưu, hợp tác với chuyên gia và startup hàng đầu để mở rộng mạng lưới quan hệ công việc.",
    color: "bg-emerald-500",
  },
];

const activities = [
  {
    icon: FlaskConical,
    title: "Technology Lab",
    desc: "Nghiên cứu, học tập và ứng dụng các công nghệ mới nhất hiện nay.",
    color: "bg-blue-500",
  },
  {
    icon: Rocket,
    title: "Startup Incubation",
    desc: "Ươm mầm ý tưởng, hỗ trợ sinh viên khởi nghiệp và phát triển mô hình kinh doanh.",
    color: "bg-emerald-500",
  },
  {
    icon: Briefcase,
    title: "Project-Based Learning",
    desc: "Thực hành qua các dự án thực tế, giúp nâng cao kỹ năng chuyên môn và làm việc nhóm.",
    color: "bg-orange-500",
  },
  {
    icon: Trophy,
    title: "Events & Competitions",
    desc: "Tham gia các cuộc thi, sự kiện công nghệ để học hỏi, giao lưu và khẳng định bản thân.",
    color: "bg-purple-500",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <div className="mb-8">
              <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs underline decoration-blue-600 underline-offset-8">
                VỀ CHÚNG TÔI
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-8 mb-8 italic">
                Giới thiệu về HTEC
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed italic">
                <p>
                  HTEC là câu lạc bộ học thuật trực thuộc Trường Đại học Mở Hà
                  Nội, nơi quy tụ những sinh viên đam mê công nghệ, khởi nghiệp
                  và không ngừng học hỏi.
                </p>
                <p>
                  Chúng tôi không chỉ học lý thuyết, mà còn cùng nhau xây dựng
                  các dự án, tham gia các cuộc thi và kết nối với mạng lưới
                  chuyên gia trong ngành.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <span className="block text-4xl font-black text-blue-600 mb-1">
                  120+
                </span>
                <span className="text-slate-500 text-sm font-bold italic uppercase tracking-wider">
                  Thành viên
                </span>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <span className="block text-4xl font-black text-blue-600 mb-1">
                  40+
                </span>
                <span className="text-slate-500 text-sm font-bold italic uppercase tracking-wider">
                  Dự án
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-6 relative">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-50 rounded-full -z-10" />
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`${area.color} p-4 rounded-2xl text-white group-hover:rotate-6 transition-transform`}
                  >
                    <area.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                      {area.title}
                    </h4>
                    <p className="text-slate-500 text-sm italic">{area.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lĩnh vực hoạt động */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-black text-slate-900 italic uppercase tracking-widest border-b-4 border-blue-600 inline-block pb-2">
              LĨNH VỰC HOẠT ĐỘNG
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((act, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center flex flex-col items-center group"
              >
                <div
                  className={`${act.color} p-5 rounded-[2rem] text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-current/20`}
                >
                  <act.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">
                  {act.title}
                </h4>
                <p className="text-slate-500 text-sm italic leading-relaxed">
                  {act.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
