import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 mt-24">
      <Container>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-emerald-400">
              Darul Iman
            </h2>

            <p className="mt-5 text-slate-300 leading-relaxed">
              Modern Islamic education focused on Quran,
              Sunnah, character, and academic excellence.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="space-y-3 text-slate-300">
              <p>Courses</p>
              <p>Admission</p>
              <p>Donation</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-slate-300">
              <p>Dhaka, Bangladesh</p>
              <p>+8801XXXXXXXXX</p>
              <p>info@daruliman.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-14 pt-6 text-center text-slate-400">
          © 2026 Darul Iman Islamiyah. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
