import { Link } from "react-router-dom";

import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <Container>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl font-black text-emerald-400">
              Darul Iman
            </h2>

            <p className="mt-5 text-slate-400 leading-relaxed">
              Modern Islamic madrasa
              focused on Quranic
              education and character
              development.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-slate-400">
              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/courses">
                Courses
              </Link>

              <Link to="/admission">
                Admission
              </Link>

              <Link to="/notices">
                Notices
              </Link>

              <Link to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-slate-400">
              <p>
                Khulna, Bangladesh
              </p>

              <p>
                +8801700000000
              </p>

              <p>
                info@daruliman.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-6 text-center text-slate-500">
           2026 Darul Iman Islamiyah
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
