"use client";
import { useState, useEffect } from 'react';
import { Heart, Users, Globe, Sparkles, ArrowRight, Play, Pause } from 'lucide-react';

export default function MessageSection() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    {
      id: 1,
      title: "Mỗi hành động nhỏ tạo nên sự thay đổi lớn",
      content: "Bạn có biết rằng chỉ cần 1 giờ tình nguyện của bạn có thể mang lại nụ cười cho 10 trẻ em? Chỉ cần một bữa ăn chia sẻ có thể no bụng một gia đình? Những điều nhỏ bé nhất mà bạn làm hôm nay sẽ tạo nên những thay đổi to lớn cho tương lai.",
      icon: Heart,
      gradient: "from-pink-500 via-red-500 to-orange-500",
      bgGradient: "from-pink-50 to-orange-50"
    },
    {
      id: 2,
      title: "Cộng đồng mạnh mẽ bắt đầu từ bạn",
      content: "Khi bạn quyết định đứng lên và hành động, bạn đã trở thành tia sáng đầu tiên trong bóng tối. Những người xung quanh sẽ nhìn thấy ánh sáng ấy và cùng nhau thắp lên ngọn lửa hy vọng. Một cộng đồng mạnh mẽ không bắt đầu từ hàng nghìn người, mà từ một con người như bạn.",
      icon: Users,
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      id: 3,
      title: "Tình yêu thương không có giới hạn",
      content: "Tình yêu thương giống như ánh sáng mặt trời - càng chia sẻ càng rộng lớn, càng cho đi càng nhận lại nhiều hơn. Mỗi khi bạn đưa tay giúp đỡ một người, bạn không chỉ thay đổi cuộc sống của họ mà còn làm cho thế giới này trở nên tươi đẹp hơn một chút.",
      icon: Globe,
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      bgGradient: "from-green-50 to-cyan-50"
    }
  ];

  // Auto-advance messages
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isPlaying, messages.length]);


  const currentMsg = messages[currentMessage];

  return (
    <section className={`w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br ${currentMsg.bgGradient} relative overflow-hidden transition-all duration-1000`}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>


      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
    

        {/* Main Message Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden mb-8 sm:mb-12">
          <div className={`h-2 bg-gradient-to-r ${currentMsg.gradient}`}></div>
          
          <div className="p-8 sm:p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight mb-6 sm:mb-8">
                <span className={`bg-gradient-to-r ${currentMsg.gradient} bg-clip-text text-transparent`}>
                  {currentMsg.title}
                </span>
              </h1>

              {/* Content */}
              <div className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto">
                {currentMsg.content}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <button className={`group bg-gradient-to-r ${currentMsg.gradient} hover:shadow-2xl text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2`}>
                  Bắt đầu hành trình
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Chia sẻ câu chuyện
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}