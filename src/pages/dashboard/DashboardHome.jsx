import DashboardCard from "../../components/dashboard/DashboardCard";

const DashboardHome = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Students"
          value="1,240"
        />

        <DashboardCard
          title="Active Courses"
          value="12"
        />

        <DashboardCard
          title="Pending Admissions"
          value="28"
        />

        <DashboardCard
          title="Monthly Donations"
          value="? 85K"
        />
      </div>
    </div>
  );
};

export default DashboardHome;
