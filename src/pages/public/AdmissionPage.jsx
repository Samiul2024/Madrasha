import SEO from "../../seo/SEO";

import Container from "../../components/ui/Container";

import AdmissionForm from "../../components/admission/AdmissionForm";

const AdmissionPage = () => {
  return (
    <>
      <SEO
        title="Admission"
        description="Apply online for Hifzul Quran and Islamic education programs at Darul Iman Islamiyah."
        url="https://darulimanislamiyah.com/admission"
      />

      <section className="py-24 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-emerald-700 font-semibold uppercase tracking-widest">
              Online Admission
            </span>

            <h1 className="text-5xl font-bold mt-4">
              Student Admission Form
            </h1>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Complete the online admission form for enrollment into our Islamic educational programs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <AdmissionForm />
          </div>
        </Container>
      </section>
    </>
  );
};

export default AdmissionPage;
