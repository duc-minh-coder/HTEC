import { Mail, Facebook, Github, Linkedin, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <div className="w-5 h-5 bg-white rounded-sm" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                HTEC
              </span>
            </div>
            <p className="max-w-md mb-8 text-slate-400 leading-relaxed">
              Cộng đồng sinh viên đam mê công nghệ, khởi nghiệp và đổi mới sáng
              tạo. Nơi kết nối tri thức và hiện thực hóa những ý tưởng đột phá.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Liên kết</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="hover:text-white transition-colors"
                >
                  Hoạt động
                </a>
              </li>
              <li>
                <a
                  href="#mentors"
                  className="hover:text-white transition-colors"
                >
                  Đội ngũ
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white transition-colors">
                  Tin tức
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>96 Định Công, Thanh Xuân, Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <a
                  href="mailto:contact@hou.edu.vn"
                  className="hover:text-white"
                >
                  contact@hou.edu.vn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-blue-500" />
                <a href="#" className="hover:text-white">
                  hou.edu.vn/hoc-lieu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs">
          <p>
            © {new Date().getFullYear()} HTEC - HOU Technology &
            Entrepreneurship Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
