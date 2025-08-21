"use client";
import { useState, useEffect } from 'react';

export default function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock data cho các đối tác (sử dụng placeholder logos)
  const partners = [
    {
      id: 1,
      name: "Ngân hàng Vietcombank",
      logo: "https://via.placeholder.com/200x100/0066CC/FFFFFF?text=VIETCOMBANK",
      category: "Tài chính"
    },
    {
      id: 2,
      name: "Tập đoàn Vingroup",
      logo: "https://via.placeholder.com/200x100/E31E24/FFFFFF?text=VINGROUP",
      category: "Tập đoàn"
    },
    {
      id: 3,
      name: "FPT Corporation",
      logo: "https://via.placeholder.com/200x100/FF6600/FFFFFF?text=FPT",
      category: "Công nghệ"
    },
    {
      id: 4,
      name: "Saigon Co.op",
      logo: "https://via.placeholder.com/200x100/00A651/FFFFFF?text=SAIGON+COOP",
      category: "Bán lẻ"
    },
    {
      id: 5,
      name: "Đại học Bách Khoa",
      logo: "https://via.placeholder.com/200x100/003366/FFFFFF?text=BK+HCMUT",
      category: "Giáo dục"
    },
    {
      id: 6,
      name: "Tổ chức Y tế Thế giới",
      logo: "https://via.placeholder.com/200x100/0099CC/FFFFFF?text=WHO+VN",
      category: "Y tế"
    },
    {
      id: 7,
      name: "UNICEF Việt Nam",
      logo: "https://via.placeholder.com/200x100/1CABE2/FFFFFF?text=UNICEF",
      category: "Phi lợi nhuận"
    },
    {
      id: 8,
      name: "Shopee Việt Nam",
      logo: "https://via.placeholder.com/200x100/EE4D2D/FFFFFF?text=SHOPEE",
      category: "Thương mại điện tử"
    },
    {
      id: 9,
      name: "Grab Vietnam",
      logo: "https://via.placeholder.com/200x100/00B14F/FFFFFF?text=GRAB",
      category: "Công nghệ"
    },
    {
      id: 10,
      name: "Coca-Cola Việt Nam",
      logo: "https://via.placeholder.com/200x100/ED1C24/FFFFFF?text=COCA+COLA",
      category: "Thực phẩm & Đồ uống"
    },
    {
      id: 11,
      name: "Samsung Vietnam",
      logo: "https://via.placeholder.com/200x100/1428A0/FFFFFF?text=SAMSUNG",
      category: "Điện tử"
    },
    {
      id: 12,
      name: "Unilever Vietnam",
      logo: "https://via.placeholder.com/200x100/0078D4/FFFFFF?text=UNILEVER",
      category: "Tiêu dùng"
    }
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 6));
    }, 4000);

    return () => clearInterval(timer);
  }, [partners.length]);

  const categories = [...new Set(partners.map(partner => partner.category))];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-100 rounded-3xl  to-blue-100/30 relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4">
            Đối tác tin cậy
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cùng với hàng trăm tổ chức uy tín, chúng tôi xây dựng cộng đồng tình nguyện bền vững
          </p>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
            {categories.slice(0, 6).map((category, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-700 rounded-full border border-gray-200 shadow-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Partners Grid - Desktop */}
        <div className="hidden sm:block mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(partners.length / 6) }).map((_, slideIndex) => (
                <div key={slideIndex} className="flex-none w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {partners.slice(slideIndex * 6, (slideIndex + 1) * 6).map((partner, index) => (
                      <div
                        key={partner.id}
                        className="group bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:scale-105 hover:border-blue-200"
                        style={{
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <div className="flex flex-col items-center space-y-3">
                          <div className="w-full h-16 sm:h-20 flex items-center justify-center p-2 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors duration-300">
                            <img 
                              src={partner.logo} 
                              alt={partner.name}
                              className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                          </div>
                          <div className="text-center">
                            <h3 className="font-semibold text-gray-800 text-xs sm:text-sm group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                              {partner.name}
                            </h3>
                            <span className="text-xs text-gray-500 mt-1 block">
                              {partner.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(partners.length / 6) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partners Scroll - Mobile */}
        <div className="sm:hidden">
          <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className="flex-none w-40 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 snap-center"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-full h-16 flex items-center justify-center p-2 bg-gray-50 rounded-xl">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-800 text-xs line-clamp-2">
                      {partner.name}
                    </h3>
                    <span className="text-xs text-gray-500 mt-1 block">
                      {partner.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">150+</div>
              <div className="text-blue-100 font-medium">Đối tác chiến lược</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">8</div>
              <div className="text-blue-100 font-medium">Lĩnh vực hợp tác</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">5+</div>
              <div className="text-blue-100 font-medium">Năm đồng hành</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg sm:text-xl text-blue-100 mb-4">
              Trở thành đối tác của chúng tôi để cùng tạo ra những giá trị tích cực cho cộng đồng
            </p>
            <button className="hover:animate-none animate-pulse bg-white hover:bg-gray-50 text-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Đăng ký hợp tác
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}