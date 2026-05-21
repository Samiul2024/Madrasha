import { NavLink } from "react-router-dom";

import toast from "react-hot-toast";

import useAuthStore from "../../store/authStore";

const dashboardLinks = [
  {
    name: "Overview",
    path: "/dashboard",
  },

  {
    name: "Admissions",
    path: "/dashboard/admissions",
  },

  {
    name: "Courses",
    path: "/dashboard/courses",
  },

  {
    name: "Notices",
    path: "/dashboard/notices",
  },

  {
    name: "Gallery",
    path: "/dashboard/gallery",
  },

  {
    name: "Donations",
    path: "/dashboard/donations",
  },
];

const DashboardSidebar = () => {
  const logout =
    useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();

    toast.success(
      "Logged out successfully"
    );
  };

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-slate-950 text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold text-emerald-400">
        Darul Iman
      </h2>

      <nav className="mt-10 space-y-2 flex-1">
        {dashboardLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "block bg-emerald-700 px-5 py-3 rounded-xl"
                : "block hover:bg-slate-800 px-5 py-3 rounded-xl transition"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 py-3 rounded-xl transition"
      >
        Logout
      </button>
    </aside>
  );
};

export default DashboardSidebar;
