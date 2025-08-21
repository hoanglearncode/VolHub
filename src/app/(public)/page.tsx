"use client";

import BannerSection from "@/components/user/BannerSection";
import MessageSection from "@/components/user/MessageSection";
import PartnersSection from "@/components/user/PartnersSection";
import PlatformExploreSection from "@/components/user/PlatformExploreSection";
import VolunteerFeedbackSection from "@/components/user/VolunteerFeedbackSection";

export default function Home () {
    return (
        <div className="w-full min-h-screen bg-white md:px-20 px-4 py-8 flex flex-col gap-3 md:gap-10">
            {/* hệ thống banner */}
            <BannerSection userRole="volunteer" />
            {/* Khám phá nền tảng của chúng tôi */}
            <PlatformExploreSection />

            <PartnersSection />
            {/* Feedback từ tình nguyện viên */}
            <VolunteerFeedbackSection />
            <MessageSection />
        </div>
    )
}