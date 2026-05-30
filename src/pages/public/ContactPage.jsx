import Container from "../../components/ui/Container";

import SectionHeading from "../../components/shared/SectionHeading";

const ContactPage = () => {
  return (
    <main className="py-16 md:py-24">

      <Container>

        <SectionHeading
          subtitle="Contact"
          title="Get In Touch"
          description="Contact Darul Iman Islamiyah for admission and information."
        />

        <div className="grid lg:grid-cols-2 gap-10">

          <div
            className="
              bg-white
              p-8
              rounded-3xl
              shadow-lg
            "
          >
            <h3 className="text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">

              <p>
                0131475786
              </p>

              <p>
                info@daruliman.com
              </p>

              <p>
                Boyra, Khulna, Bangladesh
              </p>

            </div>
          </div>

          <div
            className="
              bg-white
              p-8
              rounded-3xl
              shadow-lg
            "
          >
            <h3 className="text-2xl font-bold mb-6">
              Send Message
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Name"
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                "
              />

              <input
                type="email"
                placeholder="Email"
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                "
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                "
              />

              <button
                className="
                  w-full
                  bg-emerald-700
                  hover:bg-emerald-800
                  text-white
                  py-3
                  rounded-xl
                "
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </Container>

    </main>
  );
};

export default ContactPage;
