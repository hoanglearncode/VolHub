"use client";

import React, { useState } from "react";
import { CheckCircle, Lock, Mail, ArrowRight, User, Phone } from "lucide-react";
import Link from "next/link";

// Định nghĩa type cho dữ liệu form
type FormData = {
  fullName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  isAgree: boolean;
};

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    isAgree: false,
  });

  // Hàm xử lý input có type an toàn
  function handleInputChange<K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  // Submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // tránh reload trang
    console.log("Register:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 lg:bg-white p-4 lg:p-8">
      <div className="w-full max-w-md bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-none p-6 lg:p-8">
        {/* Mobile Logo */}
        <div className="text-center pb-8 lg:pb-10 lg:hidden">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <img src="/logo.svg" alt="logo" className="rounded-full" />
          </div>
        </div>

        {/* Form Header */}
        <div className="text-center pb-6 lg:pb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 pb-2 lg:pb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Đăng ký
          </h1>
          <span className="text-gray-600 text-base lg:text-lg">
            Bắt đầu hành trình tình nguyện của bạn ngay hôm nay!
          </span>
        </div>

        {/* Form Container */}
        <div className="bg-gray-50 rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-none p-6 lg:p-5">
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
            {/* Full Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block font-semibold text-gray-800 text-sm"
              >
                Họ và tên
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-700 lg:w-5 lg:h-5" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  placeholder="Nhập họ và tên của bạn..."
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className="text-gray-700 w-full pl-10 lg:pl-12 pr-4 py-3 border border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Username Field */}
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block font-semibold text-gray-800 text-sm"
              >
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-700 lg:w-5 lg:h-5" />
                </div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  placeholder="Nhập username của bạn..."
                  onChange={(e) =>
                    handleInputChange("username", e.target.value)
                  }
                  className="text-gray-700 w-full pl-10 lg:pl-12 pr-4 py-3 border border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block font-semibold text-gray-800 text-sm"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-700 lg:w-5 lg:h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  placeholder="Nhập email của bạn..."
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="text-gray-700 w-full pl-10 lg:pl-12 pr-4 py-3 border border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block font-semibold text-gray-800 text-sm"
              >
                Số điện thoại
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
                  <Phone size={18} className="text-gray-700 lg:w-5 lg:h-5" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  placeholder="Nhập số điện thoại của bạn..."
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="text-gray-700 w-full pl-10 lg:pl-12 pr-4 py-3 border border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block font-semibold text-gray-800 text-sm"
              >
                Mật khẩu
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-700 lg:w-5 lg:h-5" />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  placeholder="Nhập mật khẩu của bạn..."
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="text-gray-700 w-full pl-10 lg:pl-12 pr-4 py-3 border border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="block font-semibold text-gray-800 text-sm"
              >
                Xác nhận mật khẩu
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-700 lg:w-5 lg:h-5" />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="Nhập lại mật khẩu của bạn..."
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  className="text-gray-700 w-full pl-10 lg:pl-12 pr-4 py-3 border border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-2 pt-2">
              <input
                type="checkbox"
                name="isAgree"
                id="agree"
                checked={formData.isAgree}
                onChange={(e) =>
                  handleInputChange("isAgree", e.target.checked)
                }
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                required
              />
              <label
                htmlFor="agree"
                className="text-sm text-gray-600 cursor-pointer mt-0.5"
              >
                Tôi đồng ý với{" "}
                <Link
                  href="/terms"
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
                >
                  Điều khoản sử dụng
                </Link>{" "}
                và{" "}
                <Link
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
                >
                  Chính sách bảo mật
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl lg:rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl mt-6"
            >
              Đăng ký
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 lg:mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 lg:border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Hoặc đăng ký với
                </span>
              </div>
            </div>

            {/* Social Register Buttons */}
            <div className="mt-4 lg:mt-6 grid grid-cols-2 gap-3">
              <Link
                href="/register-google"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Google
              </Link>
              <Link
                href="/register-facebook"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Facebook
              </Link>
            </div>
          </div>

          {/* Login Link */}
          <div className="mt-6 lg:mt-8 text-center">
            <span className="text-gray-600 text-sm lg:text-base">
              Bạn đã có tài khoản?{" "}
            </span>
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm lg:text-base hover:underline transition-colors"
            >
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
