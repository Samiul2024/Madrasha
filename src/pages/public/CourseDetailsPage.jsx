import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import toast from "react-hot-toast";

import Container from "../../components/ui/Container";

import {
  getSingleCourse,
} from "../../services/course/courseService";

const CourseDetailsPage = () => {

  const { id } =
    useParams();

  const [course,setCourse] =
    useState(null);

  const [loading,setLoading] =
    useState(true);

  useEffect(() => {

    const fetchCourse =
      async () => {

        try {

          const data =
            await getSingleCourse(
              id
            );

          setCourse(data);

        } catch {

          toast.error(
            "Course not found"
          );

        } finally {

          setLoading(false);

        }
      };

    fetchCourse();

  }, [id]);

  if (loading) {

    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >
        Loading...
      </div>
    );
  }

  if (!course) {

    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >
        Course Not Found
      </div>
    );
  }

  return (
    <main
      className="
        py-16
        md:py-24
      "
    >

      <Container>

        <div
          className="
            bg-white
            rounded-3xl
            shadow-xl
            overflow-hidden
          "
        >

          <div
            className="
              bg-emerald-700
              text-white
              p-8
              md:p-12
            "
          >
            <h1
              className="
                text-4xl
                font-bold
              "
            >
              {course.title}
            </h1>

            <p
              className="
                mt-4
                text-emerald-100
              "
            >
              {course.description}
            </p>
          </div>

          <div className="p-8">

            <div
              className="
                grid
                md:grid-cols-2
                gap-6
                mb-10
              "
            >

              <div
                className="
                  bg-slate-50
                  rounded-2xl
                  p-6
                "
              >
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Duration
                </p>

                <h3
                  className="
                    text-xl
                    font-semibold
                  "
                >
                  {course.duration}
                </h3>
              </div>

              <div
                className="
                  bg-slate-50
                  rounded-2xl
                  p-6
                "
              >
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Monthly Fee
                </p>

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-emerald-700
                  "
                >
                  ? {course.fee}
                </h3>
              </div>

            </div>

            <h2
              className="
                text-2xl
                font-bold
                mb-5
              "
            >
              Program Features
            </h2>

            <div
              className="
                grid
                md:grid-cols-2
                gap-4
                mb-12
              "
            >
              {course.features?.map(
                (
                  feature,
                  index
                ) => (
                  <div
                    key={index}
                    className="
                      bg-emerald-50
                      border
                      border-emerald-100
                      rounded-xl
                      p-4
                    "
                  >
                    ? {feature}
                  </div>
                )
              )}
            </div>

            <div
              className="
                flex
                flex-col
                md:flex-row
                gap-4
              "
            >

              <Link
                to="/admission"
                className="
                  bg-emerald-700
                  hover:bg-emerald-800
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  text-center
                "
              >
                Apply Now
              </Link>

              <Link
                to="/courses"
                className="
                  border
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  text-center
                "
              >
                Back To Courses
              </Link>

            </div>

          </div>

        </div>

      </Container>

    </main>
  );
};

export default CourseDetailsPage;
