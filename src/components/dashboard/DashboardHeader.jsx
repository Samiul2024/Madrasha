import {
  Menu,
} from "lucide-react";

const DashboardHeader = ({
  setOpen,
}) => {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        bg-white/90
        backdrop-blur
        border-b
        border-slate-200
        px-4
        md:px-6
        py-4
        flex
        items-center
        justify-between
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        <button
          onClick={() =>
            setOpen(true)
          }
          className="
            lg:hidden
            bg-slate-100
            hover:bg-slate-200
            transition
            p-2
            rounded-xl
          "
        >
          <Menu size={22} />
        </button>

        <div>
          <h1
            className="
              text-lg
              md:text-2xl
              font-bold
              text-slate-900
            "
          >
            Dashboard
          </h1>

          <p
            className="
              text-xs
              md:text-sm
              text-slate-500
            "
          >
            Darul Iman Islamiyah
          </p>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
