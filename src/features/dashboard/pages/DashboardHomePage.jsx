const DashboardHomePage =
  () => {
    return (
      <div>
        <h1
          className="
            text-3xl
            font-bold
            mb-4
          "
        >
          Dashboard Overview
        </h1>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-5
          "
        >
          <div
            className="
              bg-white
              rounded-2xl
              p-6
              shadow
            "
          >
            <h2
              className="
                text-slate-500
              "
            >
              Total Courses
            </h2>

            <p
              className="
                text-4xl
                font-bold
                mt-3
              "
            >
              2
            </p>
          </div>
        </div>
      </div>
    );
  };

export default DashboardHomePage;
