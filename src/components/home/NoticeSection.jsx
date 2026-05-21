import Container from "../ui/Container";
import SectionHeading from "../shared/SectionHeading";

import NoticeCard from "../cards/NoticeCard";

import { notices } from "../../data/notices";

const NoticeSection = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          subtitle="Announcements"
          title="Latest Notices"
          description="Stay updated with madrasa announcements and activities."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notices.map((notice) => (
            <NoticeCard
              key={notice.id}
              notice={notice}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NoticeSection;
