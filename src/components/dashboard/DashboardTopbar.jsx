import toast from "react-hot-toast";

import useAuthStore from "../../store/authStore";

const DashboardTopbar = () => {
  const user =
    useAuthStore((state) => state.user);

  const logout =
    useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");
  };

  return (
    <div className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">
          Dashboard Overview
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome back,
          {" "}
          {user?.name || "Admin"}
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardTopbar;
