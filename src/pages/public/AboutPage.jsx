import Container from "../../components/ui/Container";
import SectionHeading from "../../components/shared/SectionHeading";

const stats = [
  {
    title: "100+",
    label: "Students"
  },
  {
    title: "2",
    label: "Programs"
  },
  {
    title: "10+",
    label: "Years Service"
  },
  {
    title: "100%",
    label: "Islamic Environment"
  }
];

const AboutPage = () => {
  return (
    <main className="py-16 md:py-24">

      <Container>

        <SectionHeading
          subtitle="About Us"
          title="Darul Iman Islamiyah"
          description="A modern Islamic educational institution dedicated to Quran, Sunnah and moral development."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1200"
              alt="Madrasa"
              className="rounded-3xl shadow-xl"
            />
          </div>

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                p-6
                text-center
              "
            >
              <h3 className="text-3xl font-bold text-emerald-700">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </Container>

    </main>
  );
};

export default AboutPage;
