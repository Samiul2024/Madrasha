import { useEffect, useState } from "react";

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

    const [courses, setCourses] =
        useState([]);

    const [notices, setNotices] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const fetchHomeData =
            async () => {

                try {

                    const [
                        courseData,
                        noticeData,
                    ] = await Promise.all([
                        getCourses(),
                        getNotices(),
                    ]);

                    setCourses(
                        courseData.slice(
                            0,
                            3
                        )
                    );

                    setNotices(
                        noticeData.slice(
                            0,
                            4
                        )
                    );

                } catch (error) {

                    toast.error(
                        "Failed to load homepage"
                    );

                } finally {

                    setLoading(false);

                }
            };

        fetchHomeData();

    }, []);

    if (loading) {

        return (
            <div
                className="
                    min-h-screen
                    flex
                    items-center
                    justify-center
                "
            >
                <p>
                    Loading...
                </p>
            </div>
        );
    }

    return (
        <>
            <SEO
                title="Home"
                description="Darul Iman Islamiyah is a modern Islamic madrasa in Bangladesh offering Hifz, Nazera, Arabic language, and Islamic education."
                url="https://darulimanislamiyah.com"
            />

            <HeroSection />

            <AboutSection />

            <CoursesSection
                courses={courses}
            />

            <NoticeSection
                notices={notices}
            />

            <GalleryPreview />

            <DonationSection />

            <TestimonialSection />
        </>
    );
};

export default HomePage;