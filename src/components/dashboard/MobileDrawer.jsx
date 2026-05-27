import {
  X,
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

const MobileDrawer = ({
  open,
  setOpen,
}) => {

  const logout =
    useAuthStore(
      (state) => state.logout
    );

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() =>
          setOpen(false)
        }
        className={`
          fixed
          inset-0
          bg-black/40
          z-40
          transition-all
          duration-300
          lg:hidden
          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* DRAWER */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-72
          bg-emerald-950
          text-white
          z-50
          p-6
          flex
          flex-col
          transition-transform
          duration-300
          lg:hidden
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* TOP */}
        <div
          className="
            flex
            items-center
            justify-between
            mb-10
          "
        >
          <div>
            <h2
              className="
                text-2xl
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
              Admin Panel
            </p>
          </div>

          <button
            onClick={() =>
              setOpen(false)
            }
          >
            <X size={24} />
          </button>
        </div>

        {/* LINKS */}
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
                onClick={() =>
                  setOpen(false)
                }
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

        {/* LOGOUT */}
        <button
          onClick={logout}
          className="
            mt-auto
            bg-red-500
            hover:bg-red-600
            transition
            px-4
            py-3
            mb-10
            rounded-xl
            flex
            items-center
            gap-3
          "
        >
          <LogOut size={20} />

          Logout
        </button>
      </aside>
    </>
  );
};

export default MobileDrawer;
