import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import apiClient from "../../../../services/api/apiClient";

const NoticeManagementPage =
  () => {
    const [notices, setNotices] =
      useState([]);

    const [formData, setFormData] =
      useState({
        title: "",
        slug: "",
        category: "",
        content: "",
      });

    const fetchNotices =
      async () => {
        try {
          const { data } =
            await apiClient.get(
              "/notices"
            );

          setNotices(
            data.notices
          );
        } catch {
          toast.error(
            "Failed to load notices"
          );
        }
      };

    useEffect(() => {
      fetchNotices();
    }, []);

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
            "/notices",
            formData
          );

          toast.success(
            "Notice created"
          );

          setFormData({
            title: "",
            slug: "",
            category: "",
            content: "",
          });

          fetchNotices();
        } catch {
          toast.error(
            "Create failed"
          );
        }
      };

    const handleDelete =
      async (id) => {
        try {
          await apiClient.delete(
            `/notices/${id}`
          );

          toast.success(
            "Notice deleted"
          );

          fetchNotices();
        } catch {
          toast.error(
            "Delete failed"
          );
        }
      };

    return (
      <div>
        <h1
          className="
            text-3xl
            font-bold
            mb-6
          "
        >
          Notice Management
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
            mb-8
            grid
            gap-4
          "
        >
          <input
            type="text"
            name="title"
            placeholder="Notice Title"
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
          />

          <input
            type="text"
            name="slug"
            placeholder="notice-slug"
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
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={
              formData.category
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

          <textarea
            rows="6"
            name="content"
            placeholder="Notice Content"
            value={
              formData.content
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
            className="
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              py-3
              rounded-xl
            "
          >
            Create Notice
          </button>
        </form>

        <div
          className="
            bg-white
            rounded-2xl
            shadow
            overflow-hidden
          "
        >
          <table className="w-full">
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
                  Category
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {notices.map(
                (notice) => (
                  <tr
                    key={
                      notice._id
                    }
                    className="
                      border-t
                    "
                  >
                    <td className="p-4">
                      {
                        notice.title
                      }
                    </td>

                    <td className="p-4">
                      {
                        notice.category
                      }
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          handleDelete(
                            notice._id
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

export default NoticeManagementPage;
