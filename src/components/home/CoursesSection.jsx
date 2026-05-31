import Container from "../ui/Container";

import SectionHeading from "../shared/SectionHeading";

import CourseCard from "../cards/CourseCard";

const CoursesSection = ({
    courses = [],
}) => {

    return (
        <section
            className="
                py-24
                bg-slate-50
            "
        >
            <Container>

                <SectionHeading
                    subtitle="Academic Programs"
                    title="Featured  Courses"
                    description="Comprehensive Islamic and modern education programs for students."
                />

                {
                    courses.length === 0 ? (
                        <div
                            className="
                                text-center
                                text-slate-500
                                py-10
                            "
                        >
                            No courses found.
                        </div>
                    ) : (
                        <div
                            className="
                                grid
                                md:grid-cols-2
                                lg:grid-cols-3
                                gap-8
                            "
                        >
                            {courses.map(
                                (course) => (
                                    <CourseCard
                                        key={
                                            course._id
                                        }
                                        course={
                                            course
                                        }
                                    />
                                )
                            )}
                        </div>
                    )
                }

            </Container>
        </section>
    );
};

export default CoursesSection;