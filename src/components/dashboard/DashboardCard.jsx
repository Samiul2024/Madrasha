const DashboardCard = ({
  title,
  value,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
      <p className="text-slate-500">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-4 text-emerald-700">
        {value}
      </h2>
    </div>
  );
};

export default DashboardCard;
