import { Routes, Route } from "react-router-dom";

/* =========================
   LAYOUTS
========================= */
import MainLayout from "../../layouts/MainLayout";

import DashboardLayout from "../../features/dashboard/layouts/DashboardLayout";
import ProtectedRoute from "../../features/auth/ProtectedRoute";

/* =========================
   PUBLIC PAGES
========================= */
import HomePage from "../../pages/public/HomePage";
import AboutPage from "../../pages/public/AboutPage";
import CoursesPage from "../../pages/public/CoursesPage";
import AdmissionPage from "../../pages/public/AdmissionPage";
import NoticesPage from "../../pages/public/NoticesPage";
import GalleryPage from "../../pages/public/GalleryPage";
import DonationPage from "../../pages/public/DonationPage";
import ContactPage from "../../pages/public/ContactPage";

/* =========================
   DASHBOARD PAGES
========================= */
import AdminLoginPage from "../../features/dashboard/pages/AdminLoginPage";
import DashboardHomePage from "../../features/dashboard/pages/DashboardHomePage";
import CourseManagementPage from "../../features/dashboard/pages/courses/CourseManagementPage"; import NoticeManagementPage from "../../features/dashboard/pages/notices/NoticeManagementPage"; import CreateCoursePage from "../../features/dashboard/pages/courses/CreateCoursePage";
import EditCoursePage from "../../features/dashboard/pages/courses/EditCoursePage";
import NoticeDetailsPage from "../../pages/public/NoticeDetailsPage";

const AppRouter = () => {
  return (
    <Routes>

      {/* =========================
          PUBLIC WEBSITE ROUTES
      ========================= */}
      <Route path="/" element={<MainLayout />}>
        {/* HOME */}
        <Route index element={<HomePage />} />

        {/* OTHER PUBLIC PAGES */}
        <Route path="about" element={<AboutPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="admission" element={<AdmissionPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="donation" element={<DonationPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      {/* =========================
          ADMIN AUTH
      ========================= */}
      <Route path="/admin/login" element={<AdminLoginPage />} />

      {/* =========================
          PROTECTED DASHBOARD
      ========================= */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* DASHBOARD HOME */}
        <Route index element={<DashboardHomePage />} />
        <Route path="courses" element={<CourseManagementPage />} />
        <Route path="courses/create" element={<CreateCoursePage />} />
        <Route path="courses/edit/:id" element={<EditCoursePage />} />
        <Route path="notices" element={<NoticeManagementPage />} />

        {/* ADD MORE DASHBOARD ROUTES HERE */}

        {/* Example:
        <Route path="students" element={<StudentsPage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route path="settings" element={<SettingsPage />} />
        */}
      </Route>

    </Routes>
  );
};

export default AppRouter;
