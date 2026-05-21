const NoticeCard = ({ notice }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:border-emerald-200 transition">
      <span className="text-sm text-emerald-700 font-semibold">
        {notice.date}
      </span>

      <h3 className="text-xl font-bold mt-3 leading-snug">
        {notice.title}
      </h3>

      <button className="mt-5 text-emerald-700 font-semibold">
        Read More ?
      </button>
    </div>
  );
};

export default NoticeCard;
