"use client";
import { useState } from 'react';
import { ChevronRight, Users, Calendar, MapPin, Heart, Star, ArrowRight, Play } from 'lucide-react';

export default function PlatformExploreSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock data cho các sự kiện nổi bật
  const featuredEvents = [
    {
      id: 1,
      title: "Tình nguyện dạy học cho trẻ em vùng cao",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Sapa, Lào Cai",
      participants: 24,
      date: "15/12/2024",
      category: "Giáo dục",
      rating: 4.8,
      description: "Chương trình giáo dục miễn phí cho trẻ em dân tộc thiểu số"
    },
    {
      id: 2,
      title: "Làm sạch bãi biển cùng cộng đồng",
      image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Vũng Tàu",
      participants: 156,
      date: "22/12/2024",
      category: "Môi trường",
      rating: 4.9,
      description: "Hoạt động bảo vệ môi trường biển và tuyên truyền ý thức cộng đồng"
    },
    {
      id: 3,
      title: "Chăm sóc người già tại viện dư양lão",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "TP.HCM",
      participants: 32,
      date: "28/12/2024",
      category: "Y tế",
      rating: 4.7,
      description: "Mang niềm vui và sự quan tâm đến những người cao tuổi"
    },
    {
      id: 4,
      title: "Xây dựng nhà cho hộ nghèo",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "An Giang",
      participants: 45,
      date: "05/01/2025",
      category: "Xã hội",
      rating: 4.8,
      description: "Cùng nhau xây dựng mái ấm cho những gia đình khó khăn"
    }
  ];

  const stats = [
    { label: "Sự kiện đã tổ chức", value: "1,250+", icon: Calendar },
    { label: "Tình nguyện viên", value: "15,000+", icon: Users },
    { label: "Tỉnh thành", value: "63", icon: MapPin },
    { label: "Giờ tình nguyện", value: "50,000+", icon: Heart }
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 border rounded-2xl bg-gradient-to-br from-white via-blue-50/10 to-indigo-50/50 shadow-xl flex flex-col items-start relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100/40 to-pink-100/40 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-12">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Khám phá nền tảng của chúng tôi
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Tham gia vào cộng đồng tình nguyện lớn nhất Việt Nam với hàng nghìn hoạt động ý nghĩa
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 min-w-fit">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Events Grid */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Hoạt động nổi bật</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="p-2 rounded-full bg-white shadow-md border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 rotate-180" />
              </button>
              <button 
                onClick={() => setCurrentSlide(Math.min(featuredEvents.length - 2, currentSlide + 1))}
                disabled={currentSlide >= featuredEvents.length - 2}
                className="p-2 rounded-full bg-white shadow-md border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6 mb-4"
              style={{ transform: `translateX(-${currentSlide * (100 / 2)}%)` }}
            >
              {featuredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 h-full ${
                    hoveredCard === index ? 'shadow-2xl scale-105 border-blue-200' : ''
                  }`}>
                    
                    {/* Image */}
                    <div className="relative overflow-hidden h-48 sm:h-56">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          hoveredCard === index ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-400 text-white text-xs font-semibold rounded-full">
                          {event.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-semibold text-gray-700">{event.rating}</span>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 font-semibold hover:bg-white transition-colors duration-200">
                          <Play className="w-4 h-4" />
                          Xem chi tiết
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-green-600" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4 text-purple-600" />
                          {event.participants} người tham gia
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-3 px-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]">
                        Đăng ký ngay
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 sm:p-8 rounded-3xl text-white shadow-2xl mt-2">
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Sẵn sàng tạo ra sự khác biệt?</h3>
            <p className="text-blue-100 text-lg">Tham gia cộng đồng tình nguyện và lan tỏa yêu thương</p>
          </div>
          <button className="group bg-white hover:bg-gray-50 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            Khám phá ngay
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}