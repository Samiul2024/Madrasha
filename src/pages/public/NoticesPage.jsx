import { useState } from "react";

import SEO from "../../seo/SEO";

import Container from "../../components/ui/Container";

import {
  generateNoticePDF,
} from "../../utils/generateNoticePDF";

const notices = [
  {
    id: 1,

    title:
      "Hifzul Quran Admission Open",

    short:
      "Admission ongoing for Hifzul Quran program.",

    details:
      "Darul Iman Islamiyah is now accepting students for the Hifzul Quran program. Students will receive Tajweed training, daily revision system, and Islamic tarbiyah under experienced Huffaz teachers.",

    pdfTitle:
      "Hifzul Quran Admission Notice",
  },

  {
    id: 2,

    title:
      "Boyosko Islamic Education",

    short:
      "Adult Islamic education program started.",

    details:
      "Our Boyosko Islamic Education program includes Iman, Aqidah, Salah, Fiqh, daily duas, and Islamic lifestyle guidance for adults and guardians.",

    pdfTitle:
      "Boyosko Islamic Education Notice",
  },
];

const NoticesPage = () => {
  const [expanded, setExpanded] =
    useState(null);

  return (
    <>
      <SEO
        title="Notices"
        description="Latest notices and admission updates from Darul Iman Islamiyah."
      />

      <section className="py-24 bg-slate-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-emerald-700 font-semibold uppercase tracking-widest">
              Latest Updates
            </span>

            <h1 className="text-5xl font-bold mt-4">
              Madrasa Notices
            </h1>
          </div>

          <div className="mt-16 grid gap-8">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold">
                  {notice.title}
                </h2>

                <p className="mt-4 text-slate-600">
                  {notice.short}
                </p>

                {expanded ===
                  notice.id && (
                  <div className="mt-5 text-slate-700 leading-relaxed">
                    {notice.details}
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() =>
                      setExpanded(
                        expanded ===
                          notice.id
                          ? null
                          : notice.id
                      )
                    }
                    className="bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-xl transition"
                  >
                    {expanded ===
                    notice.id
                      ? "Hide Details"
                      : "Read More"}
                  </button>

                  <button
                    onClick={() =>
                      generateNoticePDF(
                        {
                          title:
                            notice.pdfTitle,

                          body:
                            notice.details,

                          filename:
                            `${notice.title}.pdf`,
                        }
                      )
                    }
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl transition"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default NoticesPage;
