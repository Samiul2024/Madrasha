import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  getGallery,
} from "../../services/gallery/galleryService";

const GalleryPage = () => {
  const [gallery, setGallery] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchGallery =
      async () => {
        try {
          const data =
            await getGallery();

          setGallery(data);
        } catch {
          toast.error(
            "Failed to load gallery"
          );
        } finally {
          setLoading(false);
        }
      };

    fetchGallery();
  }, []);

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

  return (
    <section
      className="
        py-20
        px-4
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
        "
      >
        <div
          className="
            text-center
            mb-14
          "
        >
          <h1
            className="
              text-4xl
              md:text-5xl
              font-bold
              mb-4
            "
          >
            Madrasa Gallery
          </h1>

          <p
            className="
              text-slate-500
              max-w-2xl
              mx-auto
            "
          >
            Islamic programs,
            student activities,
            and memorable moments
            from Darul Iman
            Islamiyah.
          </p>
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
                  group
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-sm
                  border
                "
              >
                <div
                  className="
                    overflow-hidden
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
                      h-72
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <div
                  className="
                    p-5
                  "
                >
                  <h2
                    className="
                      text-xl
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
                      mt-2
                    "
                  >
                    {
                      item.category
                    }
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
