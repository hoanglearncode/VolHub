import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-900 text-white p-4 flex justify-between items-center w-full">
        <div className="grid md:grid-cols-4 gap-8 px-4 md:px-20 py-5">
          {/* Logo + Giới thiệu */}
          <div>
            <div className="flex items-center mb-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <img
                    className="h-10 w-10 rounded-xl object-cover shadow-md ring-2 ring-white group-hover:ring-blue-200 transition-all duration-300"
                    src="logo.svg"
                    alt="Volunteer Logo"
                  />
                </div>
                <div className="sm:block">
                  <div className="text-lg font-bold text-slate-200 group-hover:text-blue-600 transition-colors duration-200">
                    VolunteerHub
                  </div>
                  <div className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-200">
                    Kết nối BTC & Tình nguyện viên
                  </div>
                </div>
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              Nền tảng kết nối hàng đầu Việt Nam giữa Ban Tổ Chức và cộng đồng
              tình nguyện viên. Tạo cơ hội đóng góp, sẻ chia và lan tỏa giá trị
              nhân văn.
            </p>
            {/* Social */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* Twitter */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883...z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* Facebook */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77...z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* LinkedIn */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554...z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Cho Tình nguyện viên */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Dành Cho Tình Nguyện Viên</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Tìm Hoạt Động</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Đăng Ký Tham Gia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quản Lý Hồ Sơ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Câu Chuyện Tình Nguyện</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kinh Nghiệm & Blog</a></li>
            </ul>
          </div>

          {/* Cho Ban Tổ Chức */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Dành Cho Ban Tổ Chức</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Đăng Hoạt Động</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tìm Tình Nguyện Viên</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quản Lý Sự Kiện</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Thống Kê & Báo Cáo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gói Hỗ Trợ</a></li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Trung Tâm Trợ Giúp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều Khoản Sử Dụng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính Sách Bảo Mật</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên Hệ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Báo Cáo Sự Cố</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} VolunteerHub. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
