"use client";
import { useState } from 'react';
import { Heart, Users, Calendar, MapPin, Clock, Star, Send, Share2, BookmarkPlus, MessageCircle, Building2, Award, Target, TrendingUp, CheckCircle, Phone, Mail, Globe } from 'lucide-react';

export default function PartnerPage() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    phone: '',
    email: '',
    website: '',
    organizationType: '',
    description: '',
    partnershipGoals: '',
    resources: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong vòng 24-48h.');
    setShowPartnerForm(false);
    setFormData({
      organizationName: '',
      contactPerson: '',
      phone: '',
      email: '',
      website: '',
      organizationType: '',
      description: '',
      partnershipGoals: '',
      resources: ''
    });
  };

  const partnerships = [
    {
      id: 1,
      title: "Chương trình Đối tác Chiến lược 2025",
      organization: "ConnectVolunteer Partnership Team",
      date: "Khai mở liên tục",
      type: "Đối tác chiến lược",
      location: "Toàn quốc",
      currentPartners: 127,
      targetPartners: 200,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      urgent: true,
      description: "Tham gia mạng lưới đối tác chiến lược của ConnectVolunteer để mở rộng tác động xã hội và kết nối với hàng nghìn tình nguyện viên tại Việt Nam.",
      benefits: [
        "Tiếp cận 50,000+ tình nguyện viên đã xác thực",
        "Hỗ trợ marketing và truyền thông miễn phí",
        "Đào tạo quản lý tình nguyện viên chuyên nghiệp",
        "Báo cáo tác động chi tiết và phân tích dữ liệu",
        "Ưu tiên hiển thị trên nền tảng"
      ],
      requirements: [
        "Tổ chức phi lợi nhuận hoặc doanh nghiệp xã hội",
        "Có ít nhất 2 năm kinh nghiệm hoạt động",
        "Cam kết tổ chức tối thiểu 6 sự kiện/năm",
        "Tuân thủ các tiêu chuẩn đạo đức và minh bạch"
      ],
      contact: "Ms. Hương - Partnership Director",
      phone: "0901-234-567",
      email: "partnership@connectvolunteer.vn"
    },
    {
      id: 2,
      title: "Đối tác Doanh nghiệp - CSR Program",
      organization: "ConnectVolunteer Corporate Relations",
      date: "Đăng ký mở",
      type: "Đối tác doanh nghiệp",
      location: "TP.HCM, Hà Nội, Đà Nẵng",
      currentPartners: 43,
      targetPartners: 100,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      urgent: false,
      description: "Chương trình dành cho các doanh nghiệp muốn thực hiện trách nhiệm xã hội thông qua các hoạt động tình nguyện có tổ chức và tác động cao.",
      benefits: [
        "Tư vấn chiến lược CSR và team building",
        "Thiết kế chương trình tình nguyện riêng",
        "Quản lý và điều phối toàn bộ hoạt động",
        "Báo cáo tác động và giá trị thương hiệu",
        "Chứng nhận đối tác bền vững"
      ],
      requirements: [
        "Doanh nghiệp đã thành lập và hoạt động ổn định",
        "Có ngân sách dành cho hoạt động CSR",
        "Cam kết dài hạn tối thiểu 1 năm",
        "Đội ngũ nhân sự tham gia tích cực"
      ],
      contact: "Mr. Tuấn - Corporate Relations Manager",
      phone: "0987-654-321",
      email: "corporate@connectvolunteer.vn"
    }
  ];

  const successStories = [
    {
      partner: "Tập đoàn FPT",
      project: "Chương trình Công nghệ vì Cộng đồng",
      volunteers: 2500,
      impact: "50 trường học được hỗ trợ",
      duration: "18 tháng"
    },
    {
      partner: "Vinamilk",
      project: "Quỹ sữa Vươn cao Việt Nam",
      volunteers: 1200,
      impact: "100,000 trẻ em được thụ hưởng",
      duration: "24 tháng"
    },
    {
      partner: "Grab Vietnam",
      project: "An toàn giao thông cộng đồng",
      volunteers: 800,
      impact: "300,000 người được tuyên truyền",
      duration: "12 tháng"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50">

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">170+</div>
              <div className="text-sm text-gray-600">Đối tác</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">50K+</div>
              <div className="text-sm text-gray-600">Tình nguyện viên</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">2.5M+</div>
              <div className="text-sm text-gray-600">Người thụ hưởng</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">1,200+</div>
              <div className="text-sm text-gray-600">Dự án</div>
            </div>
          </div>
        </div>

        {partnerships.map((partnership, index) => (
          <div key={partnership.id} className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Partnership Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-600">{partnership.organization}</h2>
                    <p className="text-xs text-gray-500">3 giờ trước</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {partnership.urgent && (
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-xs font-medium rounded-full animate-pulse">
                      MỚI MỞ
                    </span>
                  )}
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {partnership.type}
                  </span>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-3">{partnership.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-emerald-500" />
                  <span>{partnership.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>{partnership.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                  <span>{partnership.currentPartners}/{partnership.targetPartners} đối tác</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{partnership.description}</p>
            </div>

            {/* Partnership Image */}
            <div className="relative">
              <img 
                src={partnership.image} 
                alt={partnership.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                  {Math.round((partnership.currentPartners/partnership.targetPartners)*100)}% hoàn thành
                </div>
              </div>
            </div>

            {/* Partnership Details */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-5 h-5 text-yellow-500 mr-2" />
                    Quyền lợi đối tác:
                  </h3>
                  <ul className="space-y-2">
                    {partnership.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className="w-5 h-5 text-blue-500 mr-2" />
                    Yêu cầu đối tác:
                  </h3>
                  <ul className="space-y-2">
                    {partnership.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Star className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">Liên hệ hợp tác:</p>
                    <p className="text-sm text-gray-600 mb-1">{partnership.contact}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Phone className="w-3 h-3" />
                        <span>{partnership.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Mail className="w-3 h-3" />
                        <span>{partnership.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Tiến độ tuyển đối tác</span>
                  <span>{partnership.currentPartners}/{partnership.targetPartners}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(partnership.currentPartners/partnership.targetPartners)*100}%` }}
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
                      bookmarked ? 'bg-emerald-100 text-emerald-600' : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <BookmarkPlus className="w-5 h-5" />
                  </button>
                  
                  <button 
                    onClick={() => setShowPartnerForm(!showPartnerForm)}
                    className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2 rounded-xl hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 font-medium flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Đăng ký đối tác</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Partnership Form */}
            {showPartnerForm && (
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-t p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Building2 className="w-5 h-5 text-emerald-600 mr-2" />
                  Đăng ký trở thành đối tác
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="organizationName"
                      placeholder="Tên tổ chức/doanh nghiệp *"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="contactPerson"
                      placeholder="Người liên hệ *"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Số điện thoại *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="url"
                      name="website"
                      placeholder="Website tổ chức"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                    <select
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Loại hình tổ chức *</option>
                      <option value="ngo">Tổ chức phi lợi nhuận</option>
                      <option value="corporate">Doanh nghiệp</option>
                      <option value="social-enterprise">Doanh nghiệp xã hội</option>
                      <option value="government">Cơ quan nhà nước</option>
                      <option value="education">Tổ chức giáo dục</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                  <textarea
                    name="description"
                    placeholder="Mô tả về tổ chức và lĩnh vực hoạt động *"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <textarea
                    name="partnershipGoals"
                    placeholder="Mục tiêu hợp tác và kỳ vọng *"
                    value={formData.partnershipGoals}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <textarea
                    name="resources"
                    placeholder="Nguồn lực có thể đóng góp (ngân sách, nhân lực, chuyên môn...)"
                    value={formData.resources}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 font-medium flex items-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Gửi đơn đăng ký</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPartnerForm(false)}
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

        {/* Success Stories Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-6 h-6 text-yellow-500 mr-2" />
            Câu chuyện thành công
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{story.partner}</h3>
                <p className="text-sm text-gray-600 mb-3">{story.project}</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Users className="w-3 h-3" />
                    <span>{story.volunteers} tình nguyện viên</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-3 h-3" />
                    <span>{story.impact}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{story.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}