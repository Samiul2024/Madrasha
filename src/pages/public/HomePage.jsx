import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import SEO from "../../seo/SEO";

import HeroSection from "../../components/home/HeroSection";
import AboutSection from "../../components/home/AboutSection";
import CoursesSection from "../../components/home/CoursesSection";
import NoticeSection from "../../components/home/NoticeSection";
import DonationSection from "../../components/home/DonationSection";
import TestimonialSection from "../../components/home/TestimonialSection";
import GalleryPreview from "../../components/home/GalleryPreview";

import {
    getCourses,
} from "../../services/course/courseService";

import {
    getNotices,
} from "../../services/notice/noticeService";

const HomePage = () => {

    const {
        data: courses = [],
        isLoading: coursesLoading,
        error: coursesError,
    } = useQuery({
        queryKey: ["courses"],
        queryFn: getCourses,
        select: (data) =>
            data.slice(0, 3),
        staleTime:
            1000 * 60 * 5, // 5 min
    });

    const {
        data: notices = [],
        isLoading: noticesLoading,
        error: noticesError,
    } = useQuery({
        queryKey: ["notices"],
        queryFn: getNotices,
        select: (data) =>
            data.slice(0, 4),
        staleTime:
            1000 * 60 * 2, // 2 min
    });

    useEffect(() => {

        if (
            coursesError ||
            noticesError
        ) {

            toast.error(
                "Failed to load homepage"
            );

        }

    }, [
        coursesError,
        noticesError,
    ]);

    const loading =
        coursesLoading ||
        noticesLoading;

    return (
        <>
            <SEO
                title="Home"
                description="Darul Iman Islamiyah is a modern Islamic madrasa in Bangladesh offering Hifz, Nazera, Arabic language, and Islamic education."
                url="https://darulimanislamiyah.vercel.app"
            />

            <HeroSection />

            <AboutSection />

            <CoursesSection
                courses={courses}
                loading={loading}
            />

            <NoticeSection
                notices={notices}
                loading={loading}
            />

            <GalleryPreview />

            <DonationSection />

            <TestimonialSection />
        </>
    );
};

export default HomePage;