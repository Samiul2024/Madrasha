import { NavLink } from "react-router-dom";

const dashboardLinks = [
  {
    name: "Overview",
    path: "/dashboard",
  },

  {
    name: "Courses",
    path: "/dashboard/courses",
  },

  {
    name: "Admissions",
    path: "/dashboard/admissions",
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
  return (
    <aside className="w-72 bg-slate-950 text-white min-h-screen p-6 hidden lg:block">
      <h2 className="text-3xl font-bold text-emerald-400">
        Darul Iman
      </h2>

      <nav className="mt-10 space-y-2">
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
    </aside>
  );
};

export default DashboardSidebar;
