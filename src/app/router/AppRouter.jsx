import { Routes, Route } from "react-router-dom";

import HomePage from "../../pages/public/HomePage";
import AboutPage from "../../pages/public/AboutPage";
import CoursesPage from "../../pages/public/CoursesPage";
import AdmissionPage from "../../pages/public/AdmissionPage";
import NoticesPage from "../../pages/public/NoticesPage";
import GalleryPage from "../../pages/public/GalleryPage";
import ContactPage from "../../pages/public/ContactPage";
import DonationPage from "../../pages/public/DonationPage";

import AdminLoginPage from "../../features/dashboard/pages/AdminLoginPage";
import DashboardHomePage from "../../features/dashboard/pages/DashboardHomePage";

import DashboardLayout from "../../features/dashboard/layouts/DashboardLayout";
import ProtectedRoute from "../../features/auth/ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/admission" element={<AdmissionPage />} />
      <Route path="/notices" element={<NoticesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/donation" element={<DonationPage />} />

      {/* ADMIN LOGIN */}
      <Route path="/admin/login" element={<AdminLoginPage />} />

      {/* DASHBOARD (PROTECTED) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHomePage />} />
      </Route>

    </Routes>
  );
};

export default AppRouter;
