import { Routes, Route } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import DashboardLayout from "../../layouts/DashboardLayout";

import ProtectedRoute from "../../routes/ProtectedRoute";

import HomePage from "../../pages/public/HomePage";
import AboutPage from "../../pages/public/AboutPage";
import CoursesPage from "../../pages/public/CoursesPage";
import AdmissionPage from "../../pages/public/AdmissionPage";
import NoticesPage from "../../pages/public/NoticesPage";
import GalleryPage from "../../pages/public/GalleryPage";
import DonationPage from "../../pages/public/DonationPage";
import ContactPage from '../../pages/public/ContactPage';

import HifzNoticePage from '../../pages/public/notices/HifzNoticePage';
import BoyoskoNoticePage from '../../pages/public/notices/BoyoskoNoticePage';

import LoginPage from "../../features/auth/pages/LoginPage";

import DashboardHome from "../../pages/dashboard/DashboardHome";
import AdmissionsPage from "../../pages/dashboard/AdmissionsPage";

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

        <Route path="contact" element={<ContactPage />} />`n`n        <Route path="notices/hifz-admission" element={<HifzNoticePage />} />`n`n        <Route path="notices/boyosko-admission" element={<BoyoskoNoticePage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<DashboardHome />}
        />

        <Route
          path="admissions"
          element={<AdmissionsPage />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
