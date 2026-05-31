import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import toast from "react-hot-toast";

import Container from "../../components/ui/Container";

import {
  getSingleNotice,
} from "../../services/notice/noticeService";

const NoticeDetailsPage = () => {

  const { slug } =
    useParams();

  const [notice,setNotice] =
    useState(null);

  const [loading,setLoading] =
    useState(true);

  useEffect(() => {

    const fetchNotice =
      async () => {

        try {

          const data =
            await getSingleNotice(
              slug
            );

          setNotice(data);

        } catch {

          toast.error(
            "Notice not found"
          );

        } finally {

          setLoading(false);

        }
      };

    fetchNotice();

  }, [slug]);

  if (loading) {

    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >
        Loading...
      </div>
    );
  }

  if (!notice) {

    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >
        Notice Not Found
      </div>
    );
  }

  return (
    <main
      className="
        py-16
        md:py-24
      "
    >

      <Container>

        <div
          className="
            max-w-4xl
            mx-auto
            bg-white
            rounded-3xl
            shadow-xl
            overflow-hidden
          "
        >

          <div
            className="
              bg-slate-900
              text-white
              p-8
              md:p-12
            "
          >

            <span
              className="
                bg-emerald-600
                px-4
                py-2
                rounded-full
                text-sm
              "
            >
              {notice.category}
            </span>

            <h1
              className="
                text-4xl
                font-bold
                mt-5
              "
            >
              {notice.title}
            </h1>

          </div>

          <div
            className="
              p-8
              md:p-12
            "
          >

            <div
              className="
                text-slate-700
                leading-relaxed
                whitespace-pre-line
              "
            >
              {notice.content}
            </div>

            <div
              className="
                mt-10
                pt-8
                border-t
              "
            >

              <Link
                to="/notices"
                className="
                  bg-emerald-700
                  hover:bg-emerald-800
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  inline-block
                "
              >
                Back To Notices
              </Link>

            </div>

          </div>

        </div>

      </Container>

    </main>
  );
};

export default NoticeDetailsPage;
