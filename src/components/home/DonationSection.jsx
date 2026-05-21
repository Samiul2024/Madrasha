import Container from "../ui/Container";
import SectionHeading from "../shared/SectionHeading";

const Component = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          subtitle="Darul Iman"
          title="Support The Madrasa"
          description="Production-grade reusable homepage section."
        />

        <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
          <p className="text-slate-600">
            Content section coming next phase.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Component;
