"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Search, Bell, User, ChevronDown } from "lucide-react";

export default function ClientNavBar() {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const userMenuRef = useRef<HTMLDivElement | null>(null);
  const [isAuther, setIsAuther] = useState(false);
  const [user, setUser] = useState({ name: "Tình nguyện viên", avatar: "/avatar.jpg" });

  const navItems = [
    { href: "/", title: "Trang Chủ" },
    { href: "/event", title: "Sự Kiện" },
    { href: "/volunteer", title: "Tình nguyện" },
    { href: "/contests", title: "Về Chúng Tôi" },
    { href: "/scholarship", title: "Học bổng" },
    { href: "/about", title: "Về Chúng Tôi" },
    { href: "/contact", title: "Liên Hệ" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!mobileRef.current) return;
      if (target && !mobileRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", onDocClick);
    return () => {
      document.removeEventListener("click", onDocClick);
    };
  }, []);

  // Close user menu on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!userMenuRef.current) return;
      if (target && !userMenuRef.current.contains(target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("click", onDocClick);
    return () => {
      document.removeEventListener("click", onDocClick);
    };
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMenuOpen(false);
    setUserMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
            : "bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <img 
                    className="h-10 w-10 rounded-xl object-cover shadow-md ring-2 ring-white group-hover:ring-blue-200 transition-all duration-300" 
                    src="banner.jpg"
                    alt="Volunteer Logo"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="sm:block">
                  <div className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                    Volunteer
                  </div>
                  <div className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-200">
                    Kết nối BTC & Tình nguyện viên
                  </div>
                </div>
              </Link>
            </div>

            {/* Center: Navigation Items (Desktop) */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive(item.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  {item.title}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-200 ${
                      isActive(item.href)
                        ? "w-6"
                        : "w-0 group-hover:w-4"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Right: User Actions */}
            <div className="hidden md:flex items-center gap-4">
              {isAuther ? (
                <div className="flex items-center gap-3">
                  
                  {/* Notifications */}
                  <Link 
                    href="/notifications" 
                    className="relative p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </Link>
                  
                  {/* User Menu */}
                  <div className="relative" ref={userMenuRef}>
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">
                        {user.name}
                      </span>
                      <ChevronDown 
                        size={16} 
                        className={`text-slate-500 transition-transform duration-200 ${
                          userMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    {/* User Dropdown */}
                    <div
                      className={`absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 transition-all duration-200 origin-top-right ${
                        userMenuOpen
                          ? "opacity-100 scale-100 visible"
                          : "opacity-0 scale-95 invisible"
                      }`}
                    >
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <User size={16} />
                        Trang cá nhân
                      </Link>
                      <hr className="my-2" />
                      <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    href="/login"
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-lg transition-all duration-200"
                  >
                    Đăng ký
                  </Link>
                  <Link
                    href="/login"
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    Đăng nhập
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden" ref={mobileRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
                className="p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                type="button"
              >
                <div className="relative w-5 h-5">
                  <span
                    className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${
                      menuOpen ? "rotate-45 top-2" : "top-1"
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${
                      menuOpen ? "opacity-0" : "top-2"
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${
                      menuOpen ? "-rotate-45 top-2" : "top-3"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              
              {/* Mobile User Actions */}
              {isAuther ? (
                <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                      {user.name.charAt(0)}
                    </div>
                    {user.name}
                  </Link>
                  <Link
                    href="/notifications"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Bell size={18} />
                    Thông báo
                  </Link>
                </div>
              ) : (
                <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                  <Link
                    href="/login"
                    className="block px-4 py-3 text-sm font-medium text-center text-slate-600 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Đăng ký
                  </Link>
                  <Link
                    href="/login"
                    className="block px-4 py-3 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors"
                  >
                    Đăng nhập
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}