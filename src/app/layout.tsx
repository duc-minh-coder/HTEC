import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
  title: "HTEC - Câu lạc bộ công nghệ & khởi nghiệp",
  description:
    "Câu lạc bộ học thuật trực thuộc Trường Đại học Mở Hà Nội, nơi quy tụ những sinh viên đam mê công nghệ, khởi nghiệp và không ngừng học hỏi.",
  keywords: "HTEC, câu lạc bộ, công nghệ, khởi nghiệp",
  authors: [{ name: "HTEC" }],
  openGraph: {
    title: "HTEC - Câu lạc bộ công nghệ & khởi nghiệp",
    description: "Câu lạc bộ học thuật trực thuộc Trường Đại học Mở Hà Nội",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head />
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
