"use client";
import React, { useState } from 'react';
import { Heart, Users, Globe, Award, Target, Lightbulb, Shield, Handshake } from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { number: '50,000+', label: 'Tình nguyện viên', icon: Users },
    { number: '2,000+', label: 'Dự án hoàn thành', icon: Award },
    { number: '100+', label: 'Tổ chức đối tác', icon: Handshake },
    { number: '30+', label: 'Thành phố tham gia', icon: Globe }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Yêu thương',
      description: 'Lan tỏa tình yêu thương và sự quan tâm đến cộng đồng thông qua các hoạt động tình nguyện ý nghĩa.'
    },
    {
      icon: Shield,
      title: 'Minh bạch',
      description: 'Đảm bảo tính minh bạch trong mọi hoạt động, từ việc quản lý dự án đến sử dụng nguồn lực.'
    },
    {
      icon: Users,
      title: 'Đoàn kết',
      description: 'Xây dựng cộng đồng tình nguyện viên đoàn kết, hỗ trợ lẫn nhau trong mọi hoạt động.'
    },
    {
      icon: Target,
      title: 'Hiệu quả',
      description: 'Tối ưu hóa tác động tích cực đến cộng đồng thông qua các dự án được thiết kế chu đáo.'
    }
  ];

  const team = [
    {
      name: 'Nguyễn Văn An',
      role: 'Founder & CEO',
      description: 'Với 10 năm kinh nghiệm trong lĩnh vực xã hội, anh An đã khởi xướng nhiều dự án tình nguyện ý nghĩa.',
      avatar: '🧑‍💼'
    },
    {
      name: 'Trần Thị Bình',
      role: 'Giám đốc Chương trình',
      description: 'Chuyên gia trong việc phát triển và quản lý các chương trình tình nguyện quy mô lớn.',
      avatar: '👩‍💼'
    },
    {
      name: 'Lê Minh Cường',
      role: 'Trưởng phòng Công nghệ',
      description: 'Đảm bảo nền tảng công nghệ hoạt động ổn định và liên tục cải tiến trải nghiệm người dùng.',
      avatar: '👨‍💻'
    },
    {
      name: 'Phạm Thu Dung',
      role: 'Giám đốc Truyền thông',
      description: 'Chuyên gia trong việc xây dựng thương hiệu và lan tỏa thông điệp tích cực của tổ chức.',
      avatar: '👩‍🎨'
    }
  ];

  const tabContent = {
    mission: {
      title: 'Sứ mệnh của chúng tôi',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chúng tôi tin rằng mỗi người đều có khả năng tạo ra sự thay đổi tích cực trong cộng đồng. 
            Sứ mệnh của chúng tôi là kết nối những trái tim nhân ái với những cơ hội tình nguyện ý nghĩa, 
            tạo ra một mạng lưới tình nguyện viên mạnh mẽ và bền vững.
          </p>
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-900 mb-3">Mục tiêu 2025</h4>
            <ul className="space-y-2 text-blue-800">
              <li>• Kết nối 100,000 tình nguyện viên trên toàn quốc</li>
              <li>• Triển khai 5,000 dự án tình nguyện</li>
              <li>• Hỗ trợ 500 tổ chức xã hội</li>
              <li>• Tạo ra 1 triệu giờ tình nguyện</li>
            </ul>
          </div>
        </div>
      )
    },
    story: {
      title: 'Câu chuyện của chúng tôi',
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                2020
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Khởi đầu</h4>
                <p className="text-gray-600">Nền tảng được thành lập với mục tiêu kết nối tình nguyện viên và các tổ chức xã hội.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                2021
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phát triển</h4>
                <p className="text-gray-600">Mở rộng ra 10 tỉnh thành với hơn 5,000 tình nguyện viên tham gia.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                2022
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Mở rộng</h4>
                <p className="text-gray-600">Ra mắt ứng dụng di động và hệ thống quản lý dự án thông minh.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                2023
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Thành công</h4>
                <p className="text-gray-600">Đạt 25,000 tình nguyện viên và hoàn thành 1,000 dự án cộng đồng.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                2024
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Đột phá</h4>
                <p className="text-gray-600">Vượt mốc 50,000 tình nguyện viên và trở thành nền tảng tình nguyện hàng đầu Việt Nam.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    team: {
      title: 'Đội ngũ lãnh đạo',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{member.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Về chúng tôi</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Nền tảng kết nối tình nguyện viên hàng đầu Việt Nam, nơi những trái tim nhân ái 
            gặp gỡ những cơ hội tạo ra sự thay đổi tích cực cho cộng đồng.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động của chúng tôi trong hành trình xây dựng cộng đồng tình nguyện
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all group">
                  <div className="text-green-500 mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detailed Info Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-6">
                <nav className="space-y-2">
                  {Object.entries(tabContent).map(([key, tab]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        activeTab === key
                          ? 'bg-green-500 text-white shadow-md'
                          : 'text-gray-600 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {tabContent[activeTab].title}
                </h2>
                {tabContent[activeTab].content}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Tham gia cùng chúng tôi</h2>
          <p className="text-xl opacity-90 mb-8">
            Hãy trở thành một phần của cộng đồng tình nguyện viên năng động và tạo ra những thay đổi tích cực
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Đăng ký tình nguyện viên
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;