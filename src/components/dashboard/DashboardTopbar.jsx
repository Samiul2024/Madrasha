const DashboardTopbar = () => {
  return (
    <div className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">
          Dashboard Overview
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome back, Admin
        </p>
      </div>

      <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl">
        Logout
      </button>
    </div>
  );
};

export default DashboardTopbar;
