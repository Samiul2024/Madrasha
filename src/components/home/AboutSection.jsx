import Container from "../ui/Container";
import SectionHeading from "../shared/SectionHeading";

const Component = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          subtitle="Darul Iman"
          title="About Our Madrasa"
          description="A modern Islamic educational institution dedicated to Quran, Sunnah and moral development."
        />

        <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
          <div>

            <h2 className="text-3xl font-bold mb-5">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              To nurture students with Quranic knowledge,
              Islamic character and practical life skills
              through authentic Islamic education.
            </p>

            <h2 className="text-3xl font-bold mb-5">
              Our Vision
            </h2>

            <p className="text-slate-600 leading-relaxed">
              To become a trusted Islamic educational
              institution producing knowledgeable,
              responsible and God-conscious Muslims.
            </p>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Component;
