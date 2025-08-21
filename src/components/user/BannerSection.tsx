"use client";
import { useState } from 'react';
import { Search, Calendar, Users } from 'lucide-react';

export default function BannerSection({ userRole }: { userRole: 'volunteer' | 'organizer' }) {
  const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80');
  const [activeTab, setActiveTab] = useState('events');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <section className="w-full text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 rounded-2xl border border-gray-200 shadow-lg bg-gray-800 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
      {/* Background Image */}
      <div className='w-full h-full absolute top-0 left-0 z-10 rounded-2xl overflow-hidden'>
        <img 
          src={imageUrl} 
          alt="Banner Background" 
          className="w-full h-full object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/30"></div>
      </div>

      {/* Content */}
      <div className='relative z-20 w-full h-full flex flex-col justify-center items-center min-h-[350px] sm:min-h-[450px] lg:min-h-[550px]'>
        <div className='flex flex-col w-full max-w-6xl mx-auto justify-center px-4 sm:px-8 lg:px-20 gap-6 lg:gap-8'>
          
          {/* Title */}
          <div className="text-center lg:text-left">
            <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg leading-tight'>
              Kết nối với chúng tôi
            </h1>
            <p className='text-lg sm:text-xl lg:text-2xl font-light text-blue-100 mt-2 drop-shadow-md'>
              Hành trình tình nguyện mới bắt đầu!
            </p>
          </div>

          {/* Search Section */}
          <div className='flex flex-col w-full max-w-4xl mx-auto lg:mx-0 gap-4 bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20'>
            
            {/* Tab Buttons */}
            <div className='flex w-full max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-full p-1 border border-white/30'>
              <button 
                onClick={() => setActiveTab('events')}
                className={`flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTab === 'events' 
                    ? 'bg-white text-blue-600 shadow-lg' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span className="hidden xs:inline">Tìm sự kiện</span>
                <span className="xs:hidden">Sự kiện</span>
              </button>
              <button 
                onClick={() => setActiveTab('volunteers')}
                className={`flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTab === 'volunteers' 
                    ? 'bg-white text-blue-600 shadow-lg' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Users className="w-4 h-4" />
                <span className="hidden xs:inline">Tìm tình nguyện viên</span>
                <span className="xs:hidden">TNV</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={activeTab === 'events' ? 'Tìm kiếm sự kiện...' : 'Tìm kiếm tình nguyện viên...'}
                  className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-2xl bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-300 text-sm sm:text-base"
                />
              </div>
              
              {/* Date Picker */}
              <div className="relative">
                <input 
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full sm:w-auto px-4 py-3 sm:py-4 rounded-2xl bg-white/90 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-300 text-sm sm:text-base min-w-[140px]"
                />
              </div>
              
              {/* Search Button */}
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-2xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base whitespace-nowrap">
                Tìm kiếm
              </button>
            </div>

            {/* Popular Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
              <span className="text-xs sm:text-sm text-blue-100 font-medium md:mt-1">Phổ biến:</span>
              {(activeTab === 'events' ? ['Giáo dục', 'Môi trường', 'Y tế', 'Trẻ em'] : ['Sinh viên', 'Chuyên nghiệp', 'Kinh nghiệm', 'Kỹ năng']).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-xs sm:text-sm text-white border border-white/30 hover:border-white/50 transition-all duration-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}