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
      `
Darul Iman Islamiyah is now accepting students for the Hifzul Quran program.

Program Features:
• Complete Quran memorization
• Tajweed training
• Islamic tarbiyah
• Daily revision system
• Qualified Huffaz teachers

Eligibility:
• Minimum age: 7+

Monthly Fee:
? 2500
      `,
  },

  {
    id: 2,

    title:
      "Boyosko Islamic Education",

    short:
      "Adult Islamic education program started.",

    details:
      `
Our Boyosko Islamic Education program includes:

• Iman & Aqidah
• Salah & Fiqh
• Quran Reading
• Daily Duas
• Islamic Lifestyle

Schedule:
Friday & Saturday Evening

Monthly Fee:
? 1000
      `,
  },
];

const NoticesPage = () => {
  const [expanded, setExpanded] =
    useState(null);

  return (
    <>
      <SEO
        title="Notices"
        description="Latest madrasa notices and updates."
      />

      <section className="py-24 bg-slate-50 min-h-screen">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-emerald-700 font-semibold uppercase tracking-widest">
              Latest Notices
            </span>

            <h1 className="text-4xl md:text-5xl font-black mt-4">
              Madrasa Notice Board
            </h1>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Stay updated with admission notices,
              announcements, and important madrasa updates.
            </p>
          </div>

          <div className="mt-16 grid gap-8">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-3xl shadow-lg p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {notice.title}
                    </h2>

                    <p className="mt-3 text-slate-600">
                      {notice.short}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      generateNoticePDF({
                        title:
                          notice.title,

                        body:
                          notice.details,

                        filename:
                          `${notice.title}.pdf`,
                      })
                    }
                    className="
                      bg-emerald-700
                      hover:bg-emerald-800
                      text-white
                      px-6
                      py-3
                      rounded-xl
                      font-medium
                      transition
                      whitespace-nowrap
                    "
                  >
                    Download PDF
                  </button>
                </div>

                <button
                  onClick={() =>
                    setExpanded(
                      expanded ===
                        notice.id
                        ? null
                        : notice.id
                    )
                  }
                  className="
                    mt-6
                    text-emerald-700
                    font-semibold
                  "
                >
                  {expanded ===
                  notice.id
                    ? "Hide Details"
                    : "Read More"}
                </button>

                {expanded ===
                  notice.id && (
                  <div
                    className="
                      mt-6
                      border-t
                      border-slate-100
                      pt-6
                      text-slate-700
                      leading-loose
                      whitespace-pre-line
                    "
                  >
                    {notice.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default NoticesPage;
