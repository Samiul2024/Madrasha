import { Link } from "react-router-dom";

const NoticeCard = ({ notice }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:border-emerald-200 transition">
      <span className="text-sm text-emerald-700 font-semibold">
        {notice.date}
      </span>

      <h3 className="text-xl font-bold mt-3 leading-snug">
        {notice.title}
      </h3>

      <Link
        to={`/notices/${notice.slug}`}
      >
        Read More
      </Link>
    </div>
  );
};

export default NoticeCard;
