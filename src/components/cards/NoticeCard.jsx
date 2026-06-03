import { Link } from "react-router-dom";

const NoticeCard = ({ notice }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border flex flex-col border-slate-100 hover:border-emerald-200 transition">
      <span className="text-sm text-emerald-700 font-semibold">
        {notice.date}
      </span>

      <h3 className="text-xl font-bold mt-3 leading-snug">
        {notice.title}
      </h3>

      <Link 
      className="bg-emerald-500 hover:bg-emerald-800 text-white py-1 px-2 justify-center items-center  rounded-xl text-center font-semibold transition"
        to={`/notices/${notice.slug}`}
      >
        Read More
      </Link>
    </div>
  );
};

export default NoticeCard;
