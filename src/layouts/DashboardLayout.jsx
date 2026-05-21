import { Outlet } from "react-router-dom";

import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardTopbar from "../components/dashboard/DashboardTopbar";

const DashboardLayout = () => {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <DashboardSidebar />

      <div className="flex-1">
        <DashboardTopbar />

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
