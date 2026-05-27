import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { IoClose } from "react-icons/io5";

import Container from "../ui/Container";

import { navLinks } from "../../data/navLinks";

const Navbar = () => {
  const [open, setOpen] =
    useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-white/95
        backdrop-blur-md
        border-b
        border-slate-100
      "
    >
      <Container>
        <div
          className="
            flex
            items-center
            justify-between
            h-20
          "
        >
          <Link
            to="/"
            className="flex flex-col"
          >
            <span className="text-xl sm:text-2xl font-black text-emerald-700">
              Darul Iman
            </span>

            <span className="text-xs text-slate-500">
              Islamiyah Madrasa
            </span>
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

          <a
            href="/admission"
            className="
              hidden
              lg:inline-flex
              bg-emerald-700
              hover:bg-emerald-800
              text-white
              px-5
              py-3
              rounded-xl
              font-medium
              transition
            "
          >
            Admission
          </a>

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="
              lg:hidden
              text-3xl
              text-slate-700
            "
          >
            {open ? (
              <IoClose />
            ) : (
              <HiOutlineMenuAlt3 />
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div
          className="
            lg:hidden
            bg-white
            border-t
            border-slate-100
            px-4
            py-5
            space-y-4
          "
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() =>
                setOpen(false)
              }
              className={({ isActive }) =>
                isActive
                  ? "block text-emerald-700 font-semibold"
                  : "block text-slate-700"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href="/admission"
            className="
              block
              text-center
              bg-emerald-700
              text-white
              py-3
              rounded-xl
              font-semibold
            "
          >
            Admission
          </a>
          <a
            href="/dashboard"
            className="
              block 
              text-center
              bg-emerald-700
              text-white
              py-3
              rounded-xl
              font-semibold
            "
          >
            Dashboard
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
