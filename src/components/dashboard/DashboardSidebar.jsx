import {
  LayoutDashboard,
  BookOpen,
  FileText,
  GraduationCap,
  Image,
  LogOut,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

import useAuthStore from "../../features/auth/authStore";

const links = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "Courses",
    path: "/dashboard/courses",
    icon: BookOpen,
  },

  {
    title: "Notices",
    path: "/dashboard/notices",
    icon: FileText,
  },

  {
    title: "Admissions",
    path: "/dashboard/admissions",
    icon: GraduationCap,
  },

  {
    title: "Gallery",
    path: "/dashboard/gallery",
    icon: Image,
  },
];

const DashboardSidebar = () => {

  const logout =
    useAuthStore(
      (state) => state.logout
    );

  return (
    <aside
      className="
        hidden
        lg:flex
        w-72
        min-h-screen
        bg-emerald-950
        text-white
        p-6
        flex-col
        sticky
        top-0
      "
    >
      <div className="mb-10">
        <h2
          className="
            text-3xl
            font-bold
          "
        >
          Darul Iman
        </h2>

        <p
          className="
            text-sm
            text-emerald-200
          "
        >
          Admin Dashboard
        </p>
      </div>

      <nav
        className="
          flex
          flex-col
          gap-3
        "
      >
        {links.map((link) => {

          const Icon =
            link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({
                isActive,
              }) =>
                `
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  transition
                  ${
                    isActive
                      ? "bg-emerald-700"
                      : "hover:bg-emerald-800"
                  }
                `
              }
            >
              <Icon size={20} />

              {link.title}
            </NavLink>
          );
        })}
      </nav>

      <button
        onClick={logout}
        className="
          mt-auto
          flex
          items-center
          gap-3
          px-4
          py-3
          p-6 mb-10
          rounded-xl
          bg-red-500
          hover:bg-red-600
          transition
        "
      >
        <LogOut size={20} />

        Logout
      </button>
      
    </aside>
  );
};

export default DashboardSidebar;
