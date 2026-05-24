import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import apiClient from "../../../../services/api/apiClient";

import toast from "react-hot-toast";

const EditCoursePage =
  () => {
    const { id } =
      useParams();

    const [formData, setFormData] =
      useState({
        title: "",
        slug: "",
        duration: "",
        fee: "",
        description: "",
      });

    useEffect(() => {
      const fetchCourse =
        async () => {
          const { data } =
            await apiClient.get(
              `/courses/${id}`
            );

          setFormData(
            data.course
          );
        };

      fetchCourse();
    }, [id]);

    const handleChange = (e) => {
      setFormData({
        ...formData,

        [e.target.name]:
          e.target.value,
      });
    };

    const handleSubmit =
      async (e) => {
        e.preventDefault();

        try {
          await apiClient.put(
            `/courses/${id}`,
            formData
          );

          toast.success(
            "Course updated"
          );
        } catch {
          toast.error(
            "Update failed"
          );
        }
      };

    return (
      <div
        className="
          max-w-3xl
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            mb-6
          "
        >
          Edit Course
        </h1>

        <form
          onSubmit={
            handleSubmit
          }
          className="
            bg-white
            rounded-2xl
            shadow
            p-6
            grid
            gap-4
          "
        >
          <input
            name="title"
            value={
              formData.title
            }
            onChange={
              handleChange
            }
            className="
              border
              p-3
              rounded-xl
            "
          />

          <input
            name="slug"
            value={
              formData.slug
            }
            onChange={
              handleChange
            }
            className="
              border
              p-3
              rounded-xl
            "
          />

          <input
            name="duration"
            value={
              formData.duration
            }
            onChange={
              handleChange
            }
            className="
              border
              p-3
              rounded-xl
            "
          />

          <input
            name="fee"
            value={
              formData.fee
            }
            onChange={
              handleChange
            }
            className="
              border
              p-3
              rounded-xl
            "
          />

          <textarea
            rows="6"
            name="description"
            value={
              formData.description
            }
            onChange={
              handleChange
            }
            className="
              border
              p-3
              rounded-xl
            "
          />

          <button
            className="
              bg-emerald-600
              text-white
              py-3
              rounded-xl
            "
          >
            Update Course
          </button>
        </form>
      </div>
    );
  };

export default EditCoursePage;
