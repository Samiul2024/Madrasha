import SEO from "../../seo/SEO";

import HeroSection from "../../components/home/HeroSection";
import AboutSection from "../../components/home/AboutSection";
import CoursesSection from "../../components/home/CoursesSection";
import NoticeSection from "../../components/home/NoticeSection";
import DonationSection from "../../components/home/DonationSection";
import TestimonialSection from "../../components/home/TestimonialSection";
import GalleryPreview from "../../components/home/GalleryPreview";


const HomePage = () => {
    return (
        <>
            <SEO
                title="Home"
                description="Darul Iman Islamiyah is a modern Islamic madrasa in Bangladesh offering Hifz, Nazera, Arabic language, and Islamic education."
                url="https://darulimanislamiyah.com"
            />

            <HeroSection />

            <AboutSection />

            <CoursesSection />

            <NoticeSection />

            <GalleryPreview />

            <DonationSection />

            <TestimonialSection />

            
        </>
    );
};

export default HomePage;
