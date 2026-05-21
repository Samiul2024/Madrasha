import Container from "../ui/Container";
import SectionHeading from "../shared/SectionHeading";

import GalleryCard from "../cards/GalleryCard";

import { galleryImages } from "../../data/gallery";

const GalleryPreview = () => {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionHeading
          subtitle="Campus Life"
          title="Moments From Our Madrasa"
          description="Explore activities, Islamic programs, and student achievements."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GalleryPreview;
