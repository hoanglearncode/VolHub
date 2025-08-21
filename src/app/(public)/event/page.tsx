"use client";
import { useState } from 'react';
import { Heart, Users, Calendar, MapPin, Clock, Star, Send, Share2, BookmarkPlus, MessageCircle } from 'lucide-react';

export default function VolunteerRecruitmentPage() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    motivation: ''
  });

  const handleInputChange = () => {
  };

  const handleSubmit = () => {}

  const events = [
    {
      id: 1,
      title: "Hỗ trợ trẻ em khuyết tật học tập",
      organization: "Trung tâm Hỗ trợ Giáo dục Đặc biệt",
      date: "15/09/2025",
      time: "8:00 - 17:00",
      location: "Quận 1, TP.HCM",
      participants: 25,
      maxParticipants: 50,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      urgent: true,
      description: "Chúng tôi đang tìm kiếm các tình nguyện viên nhiệt huyết để hỗ trợ các em nhỏ khuyết tật trong việc học tập và phát triển kỹ năng sống.",
      requirements: ["Yêu thương trẻ em", "Kiên nhẫn", "Có kinh nghiệm làm việc với trẻ em (ưu tiên)"],
      benefits: ["Được đào tạo miễn phí", "Chứng nhận tình nguyện viên", "Bữa ăn và đồ uống"],
      contact: "Ms. Linh - 0901234567"
    },
    {
      id: 2,
      title: "Dọn dẹp môi trường biển",
      organization: "Nhóm Bảo vệ Môi trường Xanh",
      date: "22/09/2025",
      time: "6:00 - 11:00",
      location: "Bãi biển Vũng Tàu",
      participants: 120,
      maxParticipants: 200,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      urgent: false,
      description: "Tham gia hoạt động dọn dẹp rác thải trên bãi biển, góp phần bảo vệ môi trường biển và nâng cao ý thức cộng đồng.",
      requirements: ["Sức khỏe tốt", "Tinh thần trách nhiệm cao", "Mang theo găng tay và nón"],
      benefits: ["Xe đưa đón miễn phí", "Bữa sáng và nước uống", "Áo thun kỷ niệm"],
      contact: "Mr. Hùng - 0987654321"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      <div className="max-w-4xl mx-auto px-4 py-8">
        {events.map((event, index) => (
          <div key={event.id} className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Event Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-600">{event.organization}</h2>
                    <p className="text-xs text-gray-500">2 giờ trước</p>
                  </div>
                </div>
                {event.urgent && (
                  <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full animate-pulse">
                    URGENT
                  </span>
                )}
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-500" />
                  <span>{event.participants}/{event.maxParticipants} người</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{event.description}</p>
            </div>

            {/* Event Image */}
            <div className="relative">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                  {Math.round((event.participants/event.maxParticipants)*100)}% đã đăng ký
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Yêu cầu:</h3>
                  <ul className="space-y-1">
                    {event.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quyền lợi:</h3>
                  <ul className="space-y-1">
                    {event.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Heart className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Liên hệ:</strong> {event.contact}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Tiến độ đăng ký</span>
                  <span>{event.participants}/{event.maxParticipants}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(event.participants/event.maxParticipants)*100}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                      liked ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                    <span className="text-sm">Thích</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-gray-100 text-gray-600 transition-all">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">Bình luận</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-gray-100 text-gray-600 transition-all">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm">Chia sẻ</span>
                  </button>
                </div>

                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`p-2 rounded-xl transition-all ${
                      bookmarked ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <BookmarkPlus className="w-5 h-5" />
                  </button>
                  
                  <button 
                    onClick={() => setShowApplyForm(!showApplyForm)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Đăng ký ngay</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Application Form */}
            {showApplyForm && (
              <div className="bg-gray-50 border-t p-6">
                <h3 className="text-lg font-semibold mb-4">Đăng ký tham gia</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Họ và tên *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Số điện thoại *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    name="experience"
                    placeholder="Kinh nghiệm tình nguyện (nếu có)"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    name="motivation"
                    placeholder="Lý do muốn tham gia *"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 font-medium"
                    >
                      Gửi đơn đăng ký
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowApplyForm(false)}
                      className="bg-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-400 transition-all duration-300"
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}