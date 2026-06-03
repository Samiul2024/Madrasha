import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
  BookOpen,
  Image,
  FileText,
} from "lucide-react";

import apiClient from "../../../services/api/apiClient";

const DashboardHomePage = () => {
  const [stats, setStats] =
    useState({
      courses: 0,
      notices: 0,
      gallery: 0,
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchStats =
      async () => {
        try {
          const [
            coursesRes,
            noticesRes,
            galleryRes,
          ] = await Promise.all([
            apiClient.get("/courses"),
            apiClient.get("/notices"),
            apiClient.get("/gallery"),
          ]);

          setStats({
            courses:
              coursesRes.data
                .courses?.length || 0,

            notices:
              noticesRes.data
                .notices?.length || 0,

            gallery:
              galleryRes.data
                .gallery?.length || 0,
          });
        } catch (error) {
          toast.error(
            "Failed to load dashboard data"
          );

          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div>
      <h1
        className="
          text-3xl
          font-bold
          mb-8
        "
      >
        Dashboard Overview
      </h1>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {/* Courses */}
        <div
          className="
            bg-white
            rounded-3xl
            p-6
            shadow-sm
            border
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div>
              <h2
                className="
                  text-slate-500
                "
              >
                Total Courses
              </h2>

              <p
                className="
                  text-4xl
                  font-bold
                  mt-3
                "
              >
                {stats.courses}
              </p>
            </div>

            <BookOpen
              size={40}
              className="
                text-emerald-600
              "
            />
          </div>
        </div>

        {/* Notices */}
        <div
          className="
            bg-white
            rounded-3xl
            p-6
            shadow-sm
            border
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div>
              <h2
                className="
                  text-slate-500
                "
              >
                Total Notices
              </h2>

              <p
                className="
                  text-4xl
                  font-bold
                  mt-3
                "
              >
                {stats.notices}
              </p>
            </div>

            <FileText
              size={40}
              className="
                text-blue-600
              "
            />
          </div>
        </div>

        {/* Gallery */}
        <div
          className="
            bg-white
            rounded-3xl
            p-6
            shadow-sm
            border
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div>
              <h2
                className="
                  text-slate-500
                "
              >
                Gallery Images
              </h2>

              <p
                className="
                  text-4xl
                  font-bold
                  mt-3
                "
              >
                {stats.gallery}
              </p>
            </div>

            <Image
              size={40}
              className="
                text-purple-600
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;