import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import apiClient from "../../../../services/api/apiClient";

import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaTimes,
} from "react-icons/fa";

const initialForm = {
  title: "",
  image: "",
  category: "",
};

const GalleryManagementPage =
  () => {
    const [gallery, setGallery] =
      useState([]);

    const [loading, setLoading] =
      useState(true);

    const [isModalOpen, setIsModalOpen] =
      useState(false);

    const [editingItem, setEditingItem] =
      useState(null);

    const [formData, setFormData] =
      useState(initialForm);

    const fetchGallery =
      async () => {
        try {
          const { data } =
            await apiClient.get(
              "/gallery"
            );

          setGallery(
            data.gallery
          );
        } catch {
          toast.error(
            "Failed to load gallery"
          );
        } finally {
          setLoading(false);
        }
      };

    useEffect(() => {
      fetchGallery();
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
        setEditingItem(null);

        setFormData(initialForm);

        setIsModalOpen(true);
      };

    const openEditModal =
      (item) => {
        setEditingItem(item);

        setFormData({
          title:
            item.title || "",

          image:
            item.image || "",

          category:
            item.category || "",
        });

        setIsModalOpen(true);
      };

    const closeModal =
      () => {
        setIsModalOpen(false);

        setEditingItem(null);

        setFormData(initialForm);
      };

    const handleSubmit =
      async (e) => {
        e.preventDefault();

        try {
          if (
            editingItem
          ) {
            await apiClient.put(
              `/gallery/${editingItem._id}`,
              formData
            );

            toast.success(
              "Gallery updated"
            );
          } else {
            await apiClient.post(
              "/gallery",
              formData
            );

            toast.success(
              "Gallery created"
            );
          }

          closeModal();

          fetchGallery();
        } catch {
          toast.error(
            "Operation failed"
          );
        }
      };

    const handleDelete =
      async (id) => {
        const confirmDelete =
          window.confirm(
            "Delete this image?"
          );

        if (
          !confirmDelete
        ) {
          return;
        }

        try {
          await apiClient.delete(
            `/gallery/${id}`
          );

          toast.success(
            "Gallery deleted"
          );

          fetchGallery();
        } catch {
          toast.error(
            "Delete failed"
          );
        }
      };

    if (loading) {
      return (
        <p>
          Loading gallery...
        </p>
      );
    }

    return (
      <div>
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:justify-between
            sm:items-center
            gap-4
            mb-8
          "
        >
          <div>
            <h1
              className="
                text-3xl
                font-bold
              "
            >
              Gallery
              Management
            </h1>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Manage madrasa
              gallery images
            </p>
          </div>

          <button
            onClick={
              openCreateModal
            }
            className="
              inline-flex
              items-center
              gap-2
              bg-emerald-600
              text-white
              px-5
              py-3
              rounded-2xl
            "
          >
            <FaPlus />

            Add Image
          </button>
        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {gallery.map(
            (item) => (
              <div
                key={
                  item._id
                }
                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-sm
                  border
                "
              >
                <img
                  src={
                    item.image
                  }
                  alt={
                    item.title
                  }
                  className="
                    w-full
                    h-64
                    object-cover
                  "
                />

                <div
                  className="
                    p-5
                  "
                >
                  <h2
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    {
                      item.title
                    }
                  </h2>

                  <p
                    className="
                      text-slate-500
                      mt-1
                    "
                  >
                    {
                      item.category
                    }
                  </p>

                  <div
                    className="
                      flex
                      gap-3
                      mt-5
                    "
                  >
                    <button
                      onClick={() =>
                        openEditModal(
                          item
                        )
                      }
                      className="
                        flex-1
                        bg-blue-500
                        text-white
                        py-2
                        rounded-xl
                      "
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          item._id
                        )
                      }
                      className="
                        flex-1
                        bg-red-500
                        text-white
                        py-2
                        rounded-xl
                      "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {isModalOpen && (
          <div
            className="
              fixed
              inset-0
              bg-black/50
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
                p-6
                w-full
                max-w-xl
                relative
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
                {editingItem
                  ? "Edit Gallery"
                  : "Add Gallery"}
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
                  placeholder="Image Title"
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
                  name="image"
                  placeholder="Image URL"
                  value={
                    formData.image
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

                {formData.image && (
                  <img
                    src={
                      formData.image
                    }
                    alt="Preview"
                    className="
                      w-full
                      h-60
                      object-cover
                      rounded-2xl
                    "
                  />
                )}

                <button
                  className="
                    bg-emerald-600
                    text-white
                    py-3
                    rounded-xl
                  "
                >
                  {editingItem
                    ? "Update Gallery"
                    : "Create Gallery"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };

export default GalleryManagementPage;
