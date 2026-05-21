import Container from "../ui/Container";
import SectionHeading from "../shared/SectionHeading";

import CourseCard from "../cards/CourseCard";

import { courses } from "../../data/courses";

const CoursesSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionHeading
          subtitle="Academic Programs"
          title="Featured Islamic Courses"
          description="Comprehensive Islamic and modern education programs for students."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoursesSection;
