import {
  useState,
} from "react";

import {
  Outlet,
} from "react-router-dom";

import DashboardSidebar from "../../../components/dashboard/DashboardSidebar";

import DashboardHeader from "../../../components/dashboard/DashboardHeader";

import MobileDrawer from "../../../components/dashboard/MobileDrawer";

const DashboardLayout = () => {

  const [open, setOpen] =
    useState(false);

  return (
    <div
      className="
        min-h-screen
        bg-slate-100
        flex
      "
    >
      {/* DESKTOP SIDEBAR */}
      <DashboardSidebar />

      {/* MOBILE DRAWER */}
      <MobileDrawer
        open={open}
        setOpen={setOpen}
      />

      {/* CONTENT */}
      <div
        className="
          flex-1
          flex
          flex-col
          min-h-screen
        "
      >
        <DashboardHeader
          setOpen={setOpen}
        />

        <main
          className="
            flex-1
            p-4
            md:p-6
            lg:p-8
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
