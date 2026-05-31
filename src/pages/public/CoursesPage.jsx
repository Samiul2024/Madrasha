import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import Container from "../../components/ui/Container";

import SectionHeading from "../../components/shared/SectionHeading";

import CourseCard from "../../components/cards/CourseCard";

import {
  getCourses,
} from "../../services/course/courseService";

const CoursesPage = () => {

  const [courses,setCourses] =
    useState([]);

  const [loading,setLoading] =
    useState(true);

  useEffect(() => {

    const fetchData =
      async () => {

        try {

          const data =
            await getCourses();

          setCourses(data);

        } catch {

          toast.error(
            "Failed to load courses"
          );

        } finally {

          setLoading(false);

        }
      };

    fetchData();

  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading Courses...
      </div>
    );
  }

  return (
    <main className="py-16 md:py-24">

      <Container>

        <SectionHeading
          subtitle="Programs"
          title=" Courses"
          description="Choose the program that best fits your learning journey."
        />

        <div className="grid md:grid-cols-2 gap-8">

          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
            />
          ))}

        </div>

      </Container>

    </main>
  );
};

export default CoursesPage;
