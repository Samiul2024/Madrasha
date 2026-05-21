import { Routes, Route } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import HomePage from "../../pages/public/HomePage";
import AboutPage from "../../pages/public/AboutPage";
import CoursesPage from "../../pages/public/CoursesPage";
import AdmissionPage from "../../pages/public/AdmissionPage";
import NoticesPage from "../../pages/public/NoticesPage";
import GalleryPage from "../../pages/public/GalleryPage";
import DonationPage from "../../pages/public/DonationPage";
import ContactPage from "../../pages/public/ContactPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="about" element={<AboutPage />} />

        <Route path="courses" element={<CoursesPage />} />

        <Route path="admission" element={<AdmissionPage />} />

        <Route path="notices" element={<NoticesPage />} />

        <Route path="gallery" element={<GalleryPage />} />

        <Route path="donation" element={<DonationPage />} />

        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
