const CourseCard = ({
  course,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-all duration-300">
      <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-2xl font-bold">
        ?
      </div>

      <h3 className="text-2xl font-bold mt-6">
        {course.title}
      </h3>

      <p className="mt-4 text-slate-600 leading-relaxed">
        {course.description}
      </p>

      <div className="mt-6 space-y-2">
        {course.features.map(
          (feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-slate-700"
            >
              <span className="text-emerald-700">
                ?
              </span>

              <span>
                {feature}
              </span>
            </div>
          )
        )}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Duration
          </p>

          <h4 className="font-semibold">
            {course.duration}
          </h4>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Monthly Fee
          </p>

          <h4 className="font-semibold text-emerald-700">
            {course.fee}
          </h4>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <a
          href={course.noticeRoute || "/notices"}
          target="_blank"
          rel="noreferrer"
          className="bg-slate-900 hover:bg-black text-white py-3 rounded-xl text-center font-semibold transition"
        >
          View Admission Notice
        </a>

        <a
          href={`/courses/${course._id}`}
          className="bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl text-center font-semibold transition"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
