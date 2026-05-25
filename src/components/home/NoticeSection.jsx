import Container from "../ui/Container";

import SectionHeading from "../shared/SectionHeading";

import NoticeCard from "../cards/NoticeCard";

const NoticeSection = ({
    notices = [],
}) => {

    return (
        <section
            className="
                py-24
            "
        >
            <Container>

                <SectionHeading
                    subtitle="Announcements"
                    title="Latest Notices"
                    description="Stay updated with madrasa announcements and activities."
                />

                {
                    notices.length === 0 ? (
                        <div
                            className="
                                text-center
                                text-slate-500
                                py-10
                            "
                        >
                            No notices available.
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
                            {notices.map(
                                (notice) => (
                                    <NoticeCard
                                        key={
                                            notice._id
                                        }
                                        notice={
                                            notice
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

export default NoticeSection;