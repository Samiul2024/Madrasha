import { Outlet } from "react-router-dom";

import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardTopbar from "../components/dashboard/DashboardTopbar";
import MobileDashboardSidebar from "../components/dashboard/MobileDashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <DashboardSidebar />

      <div className="flex-1">
        <MobileDashboardSidebar />

        <DashboardTopbar />

        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
