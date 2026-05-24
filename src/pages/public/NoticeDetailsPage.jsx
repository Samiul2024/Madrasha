import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import apiClient from "../../services/api/apiClient";

const NoticeDetailsPage =
  () => {
    const { slug } =
      useParams();

    const [notice, setNotice] =
      useState(null);

    useEffect(() => {
      const fetchNotice =
        async () => {
          const { data } =
            await apiClient.get(
              `/notices/${slug}`
            );

          setNotice(
            data.notice
          );
        };

      fetchNotice();
    }, [slug]);

    if (!notice) {
      return (
        <p className="p-10">
          Loading...
        </p>
      );
    }

    return (
      <section
        className="
          min-h-screen
          bg-slate-100
          py-10
          px-4
        "
      >
        <div
          className="
            max-w-4xl
            mx-auto
            bg-white
            shadow-2xl
            rounded-2xl
            p-10
          "
        >
          <div
            className="
              border-b
              pb-6
              mb-6
            "
          >
            <h1
              className="
                text-4xl
                font-bold
                mb-2
              "
            >
              {
                notice.title
              }
            </h1>

            <p
              className="
                text-slate-500
              "
            >
              Category:
              {
                notice.category
              }
            </p>
          </div>

          <div
            className="
              whitespace-pre-wrap
              leading-8
              text-lg
            "
          >
            {
              notice.content
            }
          </div>
        </div>
      </section>
    );
  };

export default NoticeDetailsPage;
