"use client";

import { Users, FileText, Calendar, Briefcase, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Users, value: "560+", label: "Thành viên", color: "text-blue-600" },
  { icon: FileText, value: "120+", label: "Dự án đã triển khai", color: "text-emerald-600" },
  { icon: Calendar, value: "85+", label: "Workshop & Event", color: "text-purple-600" },
  { icon: Briefcase, value: "40+", label: "Doanh nghiệp đối tác", color: "text-orange-600" },
  { icon: Trophy, value: "15+", label: "Cuộc thi đã tham gia", color: "text-indigo-600" }
];

export default function StatsSection() {
  return (
    <section className="bg-slate-900 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-blue-600)_0%,_transparent_70%)] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
           <h3 className="text-white font-black uppercase tracking-[0.3em] text-xs italic opacity-50">CON SỐ ẤN TƯỢNG</h3>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="bg-white/5 p-4 rounded-2xl mb-4 border border-white/10 group-hover:bg-white/10 transition-colors">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <span className="block text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
