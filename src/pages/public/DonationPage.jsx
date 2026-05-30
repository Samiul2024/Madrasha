import Container from "../../components/ui/Container";

import SectionHeading from "../../components/shared/SectionHeading";

const DonationPage = () => {
  return (
    <main className="py-16 md:py-24">

      <Container>

        <SectionHeading
          subtitle="Support"
          title="Donation & Sadaqah"
          description="Help us continue Islamic education and student development."
        />

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold">
              General Donation
            </h3>

            <p className="mt-4 text-slate-600">
              Support madrasa operations and education.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Student Support
            </h3>

            <p className="mt-4 text-slate-600">
              Sponsor underprivileged students.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Quran Project
            </h3>

            <p className="mt-4 text-slate-600">
              Contribute to Quran education initiatives.
            </p>
          </div>

        </div>

        <div className="
          mt-16
          bg-white
          p-8
          rounded-3xl
          shadow-lg
        ">

          <h3 className="text-3xl font-bold mb-6">
            Mobile Banking
          </h3>

          <div className="space-y-4">

            <p>
              Bkash: 01XXXXXXXXX
            </p>

            <p>
              Nagad: 01XXXXXXXXX
            </p>

            <p>
              Rocket: 01XXXXXXXXX
            </p>

          </div>

        </div>

      </Container>

    </main>
  );
};

export default DonationPage;
