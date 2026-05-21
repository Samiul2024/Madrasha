import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import Container from "../ui/Container";
import PrimaryButton from "../ui/PrimaryButton";

import { navLinks } from "../../data/navLinks";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-emerald-100">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <Link to="/">
            <div>
              <h1 className="text-2xl font-bold text-emerald-700">
                Darul Iman
              </h1>

              <p className="text-xs text-amber-600 tracking-widest">
                ISLAMIYAH
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-700 font-semibold"
                    : "text-slate-700 hover:text-emerald-700 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <PrimaryButton>
              Online Admission
            </PrimaryButton>
          </div>

          <button className="lg:hidden">
            <Menu className="w-7 h-7 text-slate-700" />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
