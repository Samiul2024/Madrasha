import SEO from "../../../seo/SEO";

const BoyoskoNoticePage = () => {
  return (
    <>
      <SEO
        title="Boyosko Admission Notice"
      />

      <section className="min-h-screen bg-slate-100 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <iframe
            src="/pdfs/boyosko-admission-notice.pdf"
            title="Boyosko Notice"
            className="w-full h-[90vh]"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default BoyoskoNoticePage;
