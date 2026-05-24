import {
  useState,
} from "react";

import apiClient from "../../../../services/api/apiClient";

import toast from "react-hot-toast";

const CreateCoursePage =
  () => {
    const [formData, setFormData] =
      useState({
        title: "",
        slug: "",
        duration: "",
        fee: "",
        description: "",
      });

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
          await apiClient.post(
            "/courses",
            formData
          );

          toast.success(
            "Course created"
          );

          setFormData({
            title: "",
            slug: "",
            duration: "",
            fee: "",
            description: "",
          });
        } catch {
          toast.error(
            "Create failed"
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
          Add Course
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
            placeholder="Course Title"
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
            placeholder="course-slug"
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
            placeholder="Duration"
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
            placeholder="Fee"
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
            placeholder="Description"
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
            Create Course
          </button>
        </form>
      </div>
    );
  };

export default CreateCoursePage;
