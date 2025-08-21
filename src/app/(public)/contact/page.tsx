"use client";

import React, { useState } from "react";
import { JSX } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Heart,
  Users,
  HelpCircle,
  Building,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

/** --- Types --- */
type Category = "general" | "volunteer" | "organizer" | "partnership" | "support";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: Category;
  message: string;
  isVolunteer: boolean;
  isOrganizer: boolean;
}

type SubmitStatus = "success" | "error" | null;

type IconComponent = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

interface CategoryItem {
  value: Category;
  label: string;
  icon: IconComponent;
}

interface ContactInfoItem {
  icon: IconComponent;
  title: string;
  content: string;
  subContent?: string;
  color?: string;
  bgColor?: string;
}

interface SocialLink {
  icon: IconComponent;
  name: string;
  url: string;
  color?: string;
}

/** --- Component --- */
export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "general",
    message: "",
    isVolunteer: false,
    isOrganizer: false,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const categories: CategoryItem[] = [
    { value: "general", label: "Câu hỏi chung", icon: HelpCircle },
    { value: "volunteer", label: "Đăng ký tình nguyện viên", icon: Users },
    { value: "organizer", label: "Đăng ký tổ chức sự kiện", icon: Building },
    { value: "partnership", label: "Hợp tác đối tác", icon: Heart },
    { value: "support", label: "Hỗ trợ kỹ thuật", icon: MessageCircle },
  ];

  const contactInfo: ContactInfoItem[] = [
    {
      icon: Phone,
      title: "Điện thoại",
      content: "+84 28 1234 5678",
      subContent: "Thứ 2 - Thứ 6, 8:00 - 17:30",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@tinhnguyen.vn",
      subContent: "Phản hồi trong 24h",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "123 Nguyễn Huệ, Quận 1",
      subContent: "TP. Hồ Chí Minh, Việt Nam",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 6: 8:00 - 17:30",
      subContent: "Thứ 7: 8:00 - 12:00",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const socialLinks: SocialLink[] = [
    { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-600" },
    { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-sky-500" },
    { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-600" },
    { icon: Youtube, name: "YouTube", url: "#", color: "hover:text-red-600" },
  ];

  /** --- Validation --- */
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ tên";
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9+\-\s()]{9,}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }
    if (!formData.subject.trim()) newErrors.subject = "Vui lòng nhập tiêu đề";
    if (!formData.message.trim()) newErrors.message = "Vui lòng nhập nội dung";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /** --- Handlers --- */
  const handleInputChange = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const resetForm = () =>
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "general",
      message: "",
      isVolunteer: false,
      isOrganizer: false,
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitStatus(null);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1400));

      // success
      setSubmitStatus("success");
      resetForm();
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // clear status after a while
      setTimeout(() => setSubmitStatus(null), 4500);
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/20 to-pink-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sẵn sàng hỗ trợ bạn trong hành trình tình nguyện. Hãy để lại thông tin, chúng tôi sẽ phản hồi sớm nhất!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sm:p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Gửi tin nhắn</h2>
                <p className="text-blue-100">Chúng tôi rất mong nhận được phản hồi từ bạn</p>
              </div>

              <div className="p-6 sm:p-8">
                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3"
                    role="status"
                    aria-live="polite"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800">Tin nhắn đã được gửi thành công! Chúng tôi sẽ phản hồi sớm.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-800">Có lỗi xảy ra. Vui lòng thử lại sau.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`w-full px-4 py-3 rounded-2xl border ${
                          errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                        placeholder="Nhập họ và tên của bạn"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "error-name" : undefined}
                      />
                      {errors.name && (
                        <p id="error-name" className="mt-1 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`w-full px-4 py-3 rounded-2xl border ${
                          errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                        placeholder="email@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "error-email" : undefined}
                      />
                      {errors.email && (
                        <p id="error-email" className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`w-full px-4 py-3 rounded-2xl border ${
                          errors.phone ? "border-red-300 bg-red-50" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                        placeholder="0123 456 789"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "error-phone" : undefined}
                      />
                      {errors.phone && (
                        <p id="error-phone" className="mt-1 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Category */}
                    <div>
                      <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                        Chủ đề
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={(e) => handleInputChange("category", e.target.value as Category)}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      >
                        {categories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tiêu đề <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        errors.subject ? "border-red-300 bg-red-50" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      placeholder="Tóm tắt nội dung tin nhắn"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "error-subject" : undefined}
                    />
                    {errors.subject && (
                      <p id="error-subject" className="mt-1 text-sm text-red-600">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nội dung <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        errors.message ? "border-red-300 bg-red-50" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none`}
                      placeholder="Mô tả chi tiết câu hỏi hoặc yêu cầu của bạn..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "error-message" : undefined}
                    />
                    {errors.message && (
                      <p id="error-message" className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Checkboxes */}
                  <div className="mb-6 space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isVolunteer}
                        onChange={(e) => handleInputChange("isVolunteer", e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Tôi muốn đăng ký làm tình nguyện viên</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isOrganizer}
                        onChange={(e) => handleInputChange("isOrganizer", e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Tôi muốn tổ chức sự kiện tình nguyện</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Gửi tin nhắn
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <aside className="space-y-6" aria-label="Contact information and social">
            {/* Contact Information Cards */}
            {contactInfo.map((info, index) => {
              const InfoIcon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${info.bgColor ?? "bg-gray-100"} p-3 rounded-xl`}>
                      <InfoIcon className={`w-6 h-6 ${info.color ?? "text-gray-700"}`} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-1">{info.title}</h3>
                      <p className="text-gray-700 font-medium mb-1">{info.content}</p>
                      {info.subContent && <p className="text-gray-500 text-sm">{info.subContent}</p>}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-4">Theo dõi chúng tôi</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const SocIcon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 ${social.color ?? ""} transform hover:scale-110`}
                      aria-label={social.name}
                    >
                      <SocIcon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
              <p className="text-gray-600 text-sm mt-4">Cập nhật những hoạt động mới nhất và câu chuyện truyền cảm hứng</p>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Tại sao chọn chúng tôi?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">Phản hồi trong 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">15,000+ tình nguyện viên</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">1,200+ sự kiện thành công</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">98% đánh giá tích cực</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
