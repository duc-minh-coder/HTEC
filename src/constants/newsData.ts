export interface NewsItem {
  id: string;
  title: string;
  date: string;
  tag: string;
  image: string;
  color: string;
  content: string;
  author: string;
}

export const newsData: NewsItem[] = [
  {
    id: "ai-era-2024",
    title: "HTEC Talk #15: Kỷ nguyên AI và tương lai của lập trình viên",
    date: "25/05/2024",
    tag: "Sự kiện",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    color: "bg-purple-100 text-purple-700",
    author: "BCH HTEC",
    content: `Trong bối cảnh trí tuệ nhân tạo (AI) đang phát triển với tốc độ chóng mặt, HTEC Talk #15 đã mang đến những góc nhìn mới mẻ về tương lai của ngành lập trình. 

Sự kiện quy tụ các chuyên gia hàng đầu từ các tập đoàn công nghệ lớn để cùng thảo luận về việc làm sao sinh viên CNTT có thể thích nghi và tận dụng AI như một công cụ đắc lực thay vì lo sợ bị thay thế.

Các nội dung chính được thảo luận:
- Tầm quan trọng của tư duy giải quyết vấn đề so với kỹ năng viết code thuần túy.
- Cách ứng dụng GitHub Copilot và các LLMs vào quy trình phát triển phần mềm thực tế.
- Lộ trình học tập mới cho sinh viên năm nhất và năm hai.`,
  },
  {
    id: "recruitment-q1-2024",
    title: "Thông báo tuyển thành viên cho Labcom đợt 1 năm 2024",
    date: "12/05/2024",
    tag: "Tin tức",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    color: "bg-blue-100 text-blue-700",
    author: "Ban Nội dung",
    content: `CLB Công nghệ & Khởi nghiệp (HTEC) chính thức mở đơn tuyển thành viên đợt 1 năm 2024. Đây là cơ hội để các bạn sinh viên Khoa CNTT gia nhập môi trường học tập thực chiến và hiện thực hóa các ý tưởng công nghệ.

Chúng tôi tìm kiếm các ứng viên cho 3 mảng chính:
1. Technology Lab: Dành cho các bạn đam mê lập trình (Front-end, Back-end, Mobile).
2. Startup Hub: Dành cho các bạn muốn học về quản trị dự án, tư duy sản phẩm.
3. Media & Events: Dành cho các bạn có khả năng thiết kế, truyền thông.

Hạn đăng ký: 30/06/2024. Hãy chuẩn bị CV và tinh thần sẵn sàng bứt phá!`,
  },
  {
    id: "workshop-react-2024",
    title: "Workshop: Building Scalable Web Apps with React & Node.js",
    date: "05/05/2024",
    tag: "Workshop",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
    color: "bg-emerald-100 text-emerald-700",
    author: "Tech Team",
    content: `Buổi Workshop chuyên sâu về xây dựng ứng dụng web quy mô lớn đã thu hút hơn 80 sinh viên tham gia. Tại đây, các thành viên cốt cán của Labcom đã hướng dẫn trực tiếp quy trình từ thiết kế Database đến triển khai (Deployment).

Điểm nổi bật của buổi học:
- Thực hành Clean Architecture trong React.
- Tối ưu hóa hiệu suất với SSR và Caching.
- Cách quản lý State phức tạp trong ứng dụng thực tế.`,
  },
  {
    id: "fpt-visit-2024",
    title: "Chương trình tham quan doanh nghiệp FPT Software",
    date: "28/04/2024",
    tag: "Tin tức",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    color: "bg-orange-100 text-orange-700",
    author: "BCH HTEC",
    content: `Nằm trong chuỗi hoạt động hướng nghiệp, HTEC đã tổ chức chuyến thăm quan trụ sở FPT Software tại Hòa Lạc. Sinh viên đã có cơ hội trải nghiệm môi trường làm việc chuyên nghiệp và nghe chia sẻ từ các quản lý dự án.

Chuyến đi giúp các bạn:
- Hiểu rõ quy trình làm việc Agile/Scrum.
- Biết được các yêu cầu tuyển dụng thực tế của doanh nghiệp.
- Network trực tiếp với các Mentor giàu kinh nghiệm.`,
  },
];
