import {
  useEffect,
  useState,
} from "react";

import Container from "../ui/Container";

import SectionHeading from "../shared/SectionHeading";

import GalleryCard from "../cards/GalleryCard";

import { getGallery }
  from "../../services/gallery/galleryService";

const GalleryPreview = () => {

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

          setGallery(
            data.slice(0, 8)
          );

        } catch (error) {

          console.error(
            error
          );

        } finally {

          setLoading(false);

        }
      };

    fetchGallery();

  }, []);

  if (loading) {
    return null;
  }

  return (
    <section
      className="
        py-24
        bg-slate-50
      "
    >
      <Container>

        <SectionHeading
          subtitle="Campus Life"
          title="Moments From Our Madrasa"
          description="
            Explore activities,
            Islamic programs,
            and student achievements.
          "
        />

        {gallery.length === 0 ? (

          <div
            className="
              text-center
              py-10
              text-slate-500
            "
          >
            No gallery images found.
          </div>

        ) : (

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >
            {gallery.map(
              (item) => (
                <GalleryCard
                  key={item._id}
                  item={item}
                />
              )
            )}
          </div>

        )}

      </Container>
    </section>
  );
};

export default GalleryPreview;