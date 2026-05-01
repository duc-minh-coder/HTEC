import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Building,
  Rocket,
  Layers,
} from "lucide-react";

export default function ClubInfo() {
  const roadmap = [
    { title: "LC Community", desc: "Giai đoạn cộng đồng mở..." },
    { title: "LC Academy", desc: "Giai đoạn đào tạo và tuyển chọn..." },
    { title: "LC Research & LC Studio", desc: "Giai đoạn chuyên sâu..." },
  ];

  const opportunities = [
    "Được định hướng bởi mentor",
    "Tiếp cận quy trình thực tế",
    "Xây dựng network",
    "Trải nghiệm môi trường làm việc",
    "Tham gia phát triển sản phẩm",
  ];

  const commitments = [
    "Chủ động học tập",
    "Tuân thủ quy định",
    "Trách nhiệm làm việc nhóm",
    "Sẵn sàng học hỏi",
    "Duy trì sự nghiêm túc",
  ];

  return (
    <div className="space-y-12">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black tracking-widest mb-4">
          <Sparkles className="w-3 h-3" />
          <span>JOIN THE COMMUNITY</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8 italic">
          Đăng ký tham gia CLB Công nghệ & Khởi nghiệp HOU ( HTEC )
        </h1>
        <div className="space-y-6 text-slate-600 leading-relaxed italic text-lg pr-4">
          <p>
            CLB Công nghệ & Khởi nghiệp (Labcom) được xây dựng với mục tiêu tạo
            ra một môi trường học tập và phát triển năng lực toàn diện cho sinh
            viên Khoa CNTT. Tại đây, sinh viên không chỉ tiếp thu kiến thức mà
            còn được tham gia trực tiếp vào các hoạt động thực hành, nghiên cứu
            và phát triển sản phẩm công nghệ.
          </p>
          <p>
            CLB định hướng giúp sinh viên xây dựng lộ trình phát triển rõ ràng,
            từng bước hình thành tư duy nghề nghiệp, nâng cao kỹ năng làm việc
            và sẵn sàng tham gia vào thị trường lao động.
          </p>
          <p>
            Một điểm nổi bật của CLB là chương trình đào tạo và hướng dẫn được
            triển khai với sự tham gia trực tiếp của các chuyên gia, kỹ sư và
            nhà quản lý đến từ các doanh nghiệp công nghệ.
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-6">
          <Layers className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-900">
            Lộ trình phân tầng:
          </h2>
        </div>
        <div className="grid gap-4">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                {index + 1}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-500 italic">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Cơ hội của bạn:
            </h2>
          </div>
          <ul className="space-y-4">
            {opportunities.map((item, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-slate-600 font-medium italic">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-slate-900">Cam kết:</h2>
          </div>
          <ul className="space-y-4">
            {commitments.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 group bg-orange-50/50 p-2 -mx-2 rounded-lg"
              >
                <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-semibold italic text-sm">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <p className="relative z-10 text-lg font-medium leading-relaxed italic">
          👉 CLB không chỉ là nơi học tập, mà là môi trường để bạn phát triển,
          trải nghiệm và chuẩn bị cho tương lai nghề nghiệp một cách thực tế và
          bền vững.
        </p>
      </div>
    </div>
  );
}
