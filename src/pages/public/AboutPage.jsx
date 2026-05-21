import SEO from "../../seo/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Darul Iman Islamiyah madrasa, our mission, Islamic vision, and educational excellence."
        url="https://darulimanislamiyah.vercel.app/about"
      />

      <div className="py-24 text-center">
        <h1 className="text-5xl font-bold">
          About Page
        </h1>
      </div>
    </>
  );
};

export default AboutPage;
