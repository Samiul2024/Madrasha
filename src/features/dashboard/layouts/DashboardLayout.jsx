import DashboardSidebar from "../../../components/dashboard/DashboardSidebar";

import {
  Outlet,
} from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardSidebar />

      <main
        className="
          flex-1
          min-h-screen
          bg-slate-100
          p-4
          md:p-8
        "
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
