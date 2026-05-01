import { CircleChevronLeft, CircleChevronRight, Award, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';

const staffCategories = {
  LEADERSHIP: "Ban chủ nhiệm",
  MENTOR: "Mentor",
  DEPARTMENT: "Trưởng ban"
};

const staff = [
  {
    category: staffCategories.LEADERSHIP,
    name: "Nguyễn Vũ An",
    role: "Chủ nhiệm CLB",
    achievements: ["Sáng lập Labcom", "Giải nhất HOU Hackathon 2023"],
    image: "https://i.pravatar.cc/400?u=an",
    linkedin: "#",
    email: "an.nv@hou.edu.vn"
  },
  {
    category: staffCategories.LEADERSHIP,
    name: "Trần Thu Hà",
    role: "Phó chủ nhiệm",
    achievements: ["Quản lý 20+ nhân sự", "Chuyên gia Truyền thông"],
    image: "https://i.pravatar.cc/400?u=ha",
    linkedin: "#",
    email: "ha.tt@hou.edu.vn"
  },
  {
    category: staffCategories.MENTOR,
    name: "ThS. Hoàng Văn B",
    role: "Giảng viên - Mentor Tech",
    achievements: ["15 năm kinh nghiệm Software Engineering", "Phó khoa CNTT"],
    image: "https://i.pravatar.cc/400?u=hoang",
    linkedin: "#",
    email: "hoang.hv@hou.edu.vn"
  },
  {
    category: staffCategories.MENTOR,
    name: "Ông Lê Minh C",
    role: "CTO Startup Unicorn",
    achievements: ["Chuyên gia Cloud Computing", "Cố vấn khởi nghiệp"],
    image: "https://i.pravatar.cc/400?u=minh",
    linkedin: "#",
    email: "minh.lm@hou.edu.vn"
  },
  {
    category: staffCategories.DEPARTMENT,
    name: "Lê Minh Đức",
    role: "Trưởng ban Tech",
    achievements: ["Lead 5 dự án thực chiến", "Chứng chỉ AWS Solution Architect"],
    image: "https://i.pravatar.cc/400?u=duc",
    linkedin: "#",
    email: "duc.lm@hou.edu.vn"
  },
  {
    category: staffCategories.DEPARTMENT,
    name: "Phạm Quỳnh Anh",
    role: "Trưởng ban Truyền thông",
    achievements: ["Xây dựng kênh Social 10k followers", "Sáng tạo nội dung số"],
    image: "https://i.pravatar.cc/400?u=anh",
    linkedin: "#",
    email: "anh.pq@hou.edu.vn"
  }
];

export default function MentorSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="mentors" className="w-full py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-16 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <h2 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-4 italic">ĐỘI NGŨ DẪN DẮT</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] italic">
              Đồng hành cùng những <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Chuyên gia thực chiến</span>
            </h3>
            <p className="text-slate-400 text-lg md:text-xl italic max-w-2xl leading-relaxed">
              Labcom kết nối sinh viên với các chuyên gia, kỹ sư và nhà quản lý giàu kinh nghiệm từ các doanh nghiệp công nghệ hàng đầu.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="p-4 rounded-2xl border border-white/10 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <CircleChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-4 rounded-2xl border border-white/10 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <CircleChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar pb-12 px-4 sm:px-8 lg:px-16 snap-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {staff.map((person, index) => (
          <motion.div 
            key={person.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[320px] md:min-w-[420px] snap-center group"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 overflow-hidden hover:bg-white/[0.08] transition-all hover:border-blue-500/30 flex flex-col h-full shadow-2xl">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h4 className="text-3xl font-black text-white mb-2 tracking-tight italic">{person.name}</h4>
                <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-8 italic">{person.role}</p>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block mb-4 border-l-2 border-blue-500 pl-3">THÀNH TÍCH SỰ NGHIỆP</span>
                  <ul className="space-y-3">
                    {person.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Award className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                        <span className="text-slate-300 text-sm italic font-medium leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-8 border-t border-white/5">
                  <a href={person.linkedin} className="p-3 bg-white/5 rounded-2xl text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${person.email}`} className="p-3 bg-white/5 rounded-2xl text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

