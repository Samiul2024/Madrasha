import {
  useEffect,
  useState,
} from "react";

import apiClient from "../../../../services/api/apiClient";

import toast from "react-hot-toast";

import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaTimes,
} from "react-icons/fa";

import DeleteConfirmModal from "../../../../components/ui/DeleteConfirmModal";

const initialForm = {
  title: "",
  slug: "",
  duration: "",
  fee: "",
  description: "",
};

const CourseManagementPage = () => {
  const [courses, setCourses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [deleteId, setDeleteId] =
    useState(null);

  const [deleteLoading, setDeleteLoading] =
    useState(false);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [editingCourse, setEditingCourse] =
    useState(null);

  const [formData, setFormData] =
    useState(initialForm);

  const fetchCourses =
    async () => {
      try {
        setLoading(true);

        const { data } =
          await apiClient.get(
            "/courses"
          );

        setCourses(
          data.courses || []
        );
      } catch {
        toast.error(
          "Failed to load courses"
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchCourses();

    setDeleteId(null);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const openCreateModal =
    () => {
      setEditingCourse(null);

      setFormData(
        initialForm
      );

      setIsModalOpen(true);
    };

  const openEditModal =
    (course) => {
      setEditingCourse(course);

      setFormData({
        title:
          course.title || "",

        slug:
          course.slug || "",

        duration:
          course.duration || "",

        fee:
          course.fee || "",

        description:
          course.description ||
          "",
      });

      setIsModalOpen(true);
    };

  const closeModal =
    () => {
      setIsModalOpen(false);

      setEditingCourse(null);

      setFormData(
        initialForm
      );
    };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      setDeleteLoading(true);

      try {
        if (
          editingCourse
        ) {
          await apiClient.put(
            `/courses/${editingCourse._id}`,
            formData
          );

          toast.success(
            "Course updated"
          );
        } else {
          await apiClient.post(
            "/courses",
            formData
          );

          toast.success(
            "Course created"
          );
        }

        closeModal();

        fetchCourses();

        setDeleteId(null);
      } catch {
        toast.error(
          "Operation failed"
        );
      } finally {
        setDeleteLoading(false);
      }
    };

  const handleDelete =
    async (id) => {
      if (!id) return;

      setDeleteLoading(true);

      try {
        await apiClient.delete(
          `/courses/${id}`
        );

        toast.success(
          "Course deleted"
        );

        fetchCourses();

        setDeleteId(null);
      } catch {
        toast.error(
          "Delete failed"
        );
      } finally {
        setDeleteLoading(false);
      }
    };

  if (loading) {
    return (
      <div
        className="
          flex
          items-center
          justify-center
          h-[300px]
        "
      >
        <p
          className="
            text-slate-500
          "
        >
          Loading courses...
        </p>
      </div>
    );
  }

  return (
    <>
      <div>
        {/* HEADER */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-4
            mb-6
          "
        >
          <div>
            <h1
              className="
                text-2xl
                md:text-3xl
                font-bold
                text-slate-800
              "
            >
              Course
              Management
            </h1>

            <p
              className="
                text-slate-500
                mt-1
              "
            >
              Manage madrasa
              courses
            </p>
          </div>

          <button
            onClick={
              openCreateModal
            }
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              px-5
              py-3
              rounded-2xl
              shadow-lg
              transition
            "
          >
            <FaPlus />

            Add Course
          </button>
        </div>

        {/* MOBILE CARDS */}

        <div
          className="
            grid
            gap-4
            md:hidden
          "
        >
          {courses.map(
            (course) => (
              <div
                key={
                  course._id
                }
                className="
                  bg-white
                  rounded-2xl
                  shadow-sm
                  border
                  p-5
                "
              >
                <div
                  className="
                    mb-3
                  "
                >
                  <h2
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    {
                      course.title
                    }
                  </h2>

                  <p
                    className="
                      text-sm
                      text-slate-500
                    "
                  >
                    {
                      course.duration
                    }
                  </p>
                </div>

                <div
                  className="
                    text-emerald-700
                    font-semibold
                    mb-4
                  "
                >
                  ৳
                  {
                    course.fee
                  }
                </div>

                <div
                  className="
                    flex
                    gap-3
                  "
                >
                  <button
                    onClick={() =>
                      openEditModal(
                        course
                      )
                    }
                    className="
                      flex-1
                      bg-blue-500
                      hover:bg-blue-600
                      text-white
                      py-2
                      rounded-xl
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      setDeleteId(
                        course._id
                      )
                    }
                    className="
                      flex-1
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      py-2
                      rounded-xl
                    "
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>

        {/* DESKTOP TABLE */}

        <div
          className="
            hidden
            md:block
            bg-white
            rounded-2xl
            shadow-sm
            overflow-hidden
            border
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
                <th className="p-5 text-left">
                  Course
                </th>

                <th className="p-5 text-left">
                  Duration
                </th>

                <th className="p-5 text-left">
                  Fee
                </th>

                <th className="p-5 text-left">
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
                    <td className="p-5">
                      <div>
                        <h3
                          className="
                            font-semibold
                          "
                        >
                          {
                            course.title
                          }
                        </h3>

                        <p
                          className="
                            text-sm
                            text-slate-500
                          "
                        >
                          {
                            course.slug
                          }
                        </p>
                      </div>
                    </td>

                    <td className="p-5">
                      {
                        course.duration
                      }
                    </td>

                    <td className="p-5">
                      ৳
                      {
                        course.fee
                      }
                    </td>

                    <td className="p-5">
                      <div
                        className="
                          flex
                          gap-3
                        "
                      >
                        <button
                          onClick={() =>
                            openEditModal(
                              course
                            )
                          }
                          className="
                            inline-flex
                            items-center
                            gap-2
                            bg-blue-500
                            hover:bg-blue-600
                            text-white
                            px-4
                            py-2
                            rounded-xl
                          "
                        >
                          <FaEdit />

                          Edit
                        </button>

                        <button
                          onClick={() =>
                            setDeleteId(
                              course._id
                            )
                          }
                          className="
                            inline-flex
                            items-center
                            gap-2
                            bg-red-500
                            hover:bg-red-600
                            text-white
                            px-4
                            py-2
                            rounded-xl
                          "
                        >
                          <FaTrash />

                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* MODAL */}

        {isModalOpen && (
          <div
            className="
              fixed
              inset-0
              bg-black/40
              z-50
              flex
              items-center
              justify-center
              p-4
            "
          >
            <div
              className="
                bg-white
                rounded-3xl
                shadow-2xl
                w-full
                max-w-2xl
                p-6
                relative
                max-h-[90vh]
                overflow-y-auto
              "
            >
              <button
                onClick={
                  closeModal
                }
                className="
                  absolute
                  top-5
                  right-5
                  text-slate-500
                "
              >
                <FaTimes />
              </button>

              <h2
                className="
                  text-2xl
                  font-bold
                  mb-6
                "
              >
                {editingCourse
                  ? "Edit Course"
                  : "Add Course"}
              </h2>

              <form
                onSubmit={
                  handleSubmit
                }
                className="
                  grid
                  gap-4
                "
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Course Title"
                  value={
                    formData.title
                  }
                  onChange={
                    handleChange
                  }
                  className="
                    border
                    rounded-xl
                    p-3
                  "
                  required
                />

                <input
                  type="text"
                  name="slug"
                  placeholder="course-slug"
                  value={
                    formData.slug
                  }
                  onChange={
                    handleChange
                  }
                  className="
                    border
                    rounded-xl
                    p-3
                  "
                  required
                />

                <input
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  value={
                    formData.duration
                  }
                  onChange={
                    handleChange
                  }
                  className="
                    border
                    rounded-xl
                    p-3
                  "
                  required
                />

                <input
                  type="text"
                  name="fee"
                  placeholder="Fee"
                  value={
                    formData.fee
                  }
                  onChange={
                    handleChange
                  }
                  className="
                    border
                    rounded-xl
                    p-3
                  "
                  required
                />

                <textarea
                  rows="6"
                  name="description"
                  placeholder="Description"
                  value={
                    formData.description
                  }
                  onChange={
                    handleChange
                  }
                  className="
                    border
                    rounded-xl
                    p-3
                  "
                />

                <button
                  type="submit"
                  disabled={
                    deleteLoading
                  }
                  className="
                    bg-emerald-600
                    hover:bg-emerald-700
                    disabled:opacity-50
                    text-white
                    py-3
                    rounded-xl
                    font-medium
                  "
                >
                  {editingCourse
                    ? "Update Course"
                    : "Create Course"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <DeleteConfirmModal
        open={!!deleteId}
        onClose={() =>
          setDeleteId(null)
        }
        onConfirm={() =>
          handleDelete(
            deleteId
          )
        }
        loading={
          deleteLoading
        }
        title="Delete Course"
        message="This course will be permanently deleted."
      />
    </>
  );
};

export default CourseManagementPage;