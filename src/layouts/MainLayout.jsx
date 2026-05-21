import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import DeveloperFooter from "../components/common/DeveloperFooter";

import FloatingButtons from "../components/common/FloatingButtons";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <DeveloperFooter />

      <FloatingButtons />
    </div>
  );
};

export default MainLayout;
