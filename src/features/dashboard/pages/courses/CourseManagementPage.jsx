import {
  useEffect,
  useState,
} from "react";

import apiClient from "../../../../services/api/apiClient";

import toast from "react-hot-toast";

const CourseManagementPage =
  () => {
    const [courses, setCourses] =
      useState([]);

    const [loading, setLoading] =
      useState(true);

    const fetchCourses =
      async () => {
        try {
          const { data } =
            await apiClient.get(
              "/courses"
            );

          setCourses(
            data.courses
          );
        } catch (error) {
          toast.error(
            "Failed to load courses"
          );
        } finally {
          setLoading(false);
        }
      };

    useEffect(() => {
      fetchCourses();
    }, []);

    const handleDelete =
      async (id) => {
        try {
          await apiClient.delete(
            `/courses/${id}`
          );

          toast.success(
            "Course deleted"
          );

          fetchCourses();
        } catch (error) {
          toast.error(
            "Delete failed"
          );
        }
      };

    if (loading) {
      return (
        <p>
          Loading courses...
        </p>
      );
    }

    return (
      <div>
        <div
          className="
            flex
            justify-between
            items-center
            mb-6
          "
        >
          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Course Management
          </h1>
        </div>

        <div
          className="
            bg-white
            rounded-2xl
            shadow
            overflow-hidden
          "
        >
          <table
            className="
              w-full
            "
          >
            <thead
              className="
                bg-slate-100
              "
            >
              <tr>
                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4 text-left">
                  Duration
                </th>

                <th className="p-4 text-left">
                  Fee
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {courses.map(
                (course) => (
                  <tr
                    key={
                      course._id
                    }
                    className="
                      border-t
                    "
                  >
                    <td className="p-4">
                      {
                        course.title
                      }
                    </td>

                    <td className="p-4">
                      {
                        course.duration
                      }
                    </td>

                    <td className="p-4">
                      {
                        course.fee
                      }
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          handleDelete(
                            course._id
                          )
                        }
                        className="
                          bg-red-500
                          text-white
                          px-4
                          py-2
                          rounded-lg
                        "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default CourseManagementPage;
