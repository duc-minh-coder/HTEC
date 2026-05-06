"use client";

import { useForm } from "react-hook-form";
import { Upload, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  email: string;
  fullName: string;
  studentId: string;
  phone: string;
  year: string;
  goal: string[];
  experience: string[];
  contribution: string;
  cv?: FileList;
};

export default function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goals = [
    "Định hướng nghề nghiệp",
    "Học thêm kỹ năng chuyên môn",
    "Tham gia dự án thực tế",
    "Mở rộng mối quan hệ (network)",
    "Tham gia sự kiện / hoạt động",
    "Khởi nghiệp",
    "Khác",
  ];

  const experiences = [
    "Chưa có kinh nghiệm",
    "Có làm project cá nhân",
    "Có tham gia CLB khác",
    "Có kinh nghiệm freelance / thực tập",
    "Có tham gia cuộc thi (OLP, Hackathon, AI,…)",
    "Khác",
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl text-center"
      >
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
          Đã gửi đơn thành công!
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-sm mx-auto font-medium">
          Cảm ơn bạn đã quan tâm. Ban chủ nhiệm CLB sẽ sớm liên hệ với bạn qua
          thông tin Zalo/Email đã cung cấp.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all"
        >
          Trở về trang chủ
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] border border-slate-100 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600" />

      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
        Đơn đăng ký
      </h2>
      <p className="text-sm sm:text-base text-slate-500 mb-8 sm:mb-10 font-medium italic">
        Hãy điền thông tin của bạn để gia nhập Labcom
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 sm:space-y-8"
      >
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-black text-slate-700 uppercase tracking-widest pl-1">
              Họ và tên *
            </label>
            <input
              {...register("fullName", { required: true })}
              className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl focus:outline-none transition-all ${errors.fullName ? "border-red-300 focus:border-red-500" : "border-transparent focus:border-blue-600 focus:bg-white"}`}
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">
              Mã sinh viên *
            </label>
            <input
              {...register("studentId", { required: true })}
              className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl focus:outline-none transition-all ${errors.studentId ? "border-red-300 focus:border-red-500" : "border-transparent focus:border-blue-600 focus:bg-white"}`}
              placeholder="e.g. 2101XXXX"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">
              Email liên hệ *
            </label>
            <input
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl focus:outline-none transition-all ${errors.email ? "border-red-300 focus:border-red-500" : "border-transparent focus:border-blue-600 focus:bg-white"}`}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">
              Số điện thoại (Zalo) *
            </label>
            <input
              type="tel"
              {...register("phone", { required: true })}
              className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl focus:outline-none transition-all ${errors.phone ? "border-red-300 focus:border-red-500" : "border-transparent focus:border-blue-600 focus:bg-white"}`}
              placeholder="09xx xxx xxx"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">
            Bạn là sinh viên năm mấy? *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Một", "Hai", "Ba", "Bốn"].map((year) => (
              <label key={year} className="relative cursor-pointer group">
                <input
                  type="radio"
                  value={year}
                  {...register("year", { required: true })}
                  className="peer sr-only"
                />
                <div className="p-4 text-center bg-slate-50 border-2 border-transparent rounded-2xl font-bold text-slate-600 peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-600 group-hover:bg-slate-100 transition-all">
                  Năm {year}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">
            Mục tiêu tham gia? *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {goals.map((goal) => (
              <label
                key={goal}
                className="flex items-center gap-3 p-4 bg-slate-50 border-2 border-transparent rounded-2xl cursor-pointer hover:bg-slate-100 transition-all has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50"
              >
                <input
                  type="checkbox"
                  value={goal}
                  {...register("goal")}
                  className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-semibold text-slate-700 italic">
                  {goal}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">
            Kinh nghiệm liên quan? *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {experiences.map((exp) => (
              <label
                key={exp}
                className="flex items-center gap-3 p-4 bg-slate-50 border-2 border-transparent rounded-2xl cursor-pointer hover:bg-slate-100 transition-all has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50"
              >
                <input
                  type="checkbox"
                  value={exp}
                  {...register("experience")}
                  className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-semibold text-slate-700 italic">
                  {exp}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">
            Bạn sẽ đóng góp gì cho CLB? *
          </label>
          <textarea
            {...register("contribution", { required: true })}
            rows={4}
            className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl focus:outline-none transition-all resize-none ${errors.contribution ? "border-red-300 focus:border-red-500" : "border-transparent focus:border-blue-600 focus:bg-white"}`}
            placeholder="Chia sẻ ngắn gọn vể dự định của bạn..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">
            Tải lên CV (PDF, tối đa 100MB)
          </label>
          <div className="relative group">
            <input
              type="file"
              accept=".pdf"
              {...register("cv")}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="flex flex-col items-center justify-center p-10 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] group-hover:bg-blue-50 group-hover:border-blue-300 transition-all">
              <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm font-bold text-slate-500">
                Kéo thả hoặc nhấn để tải lên
              </span>
              <span className="text-[10px] text-slate-400 mt-2 italic font-medium">
                Chỉ chấp nhận file PDF
              </span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-5 rounded-[2rem] font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 active:scale-[0.98]"
        >
          Gửi đơn đăng ký
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
