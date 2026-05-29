import { motion } from "framer-motion";

import Container from "../ui/Container";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-emerald-950
        via-emerald-900
        to-slate-950
        text-white
      "
    >
      <Container>
        <div
          className="
            min-h-[85vh]
            md:min-h-screen
            flex
            flex-col
            justify-center
            py-24
            md:py-32
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-4xl"
          >
            <span
              className="
                inline-flex
                items-center
                bg-white/10
                border
                border-white/10
                px-4
                py-2
                rounded-full
                text-xs
                sm:text-sm
                tracking-widest
                uppercase
                backdrop-blur-md
              "
            >
              Islamic Education  
            </span>

            <h1
              className="
                mt-6
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                leading-tight
              "
            >
              Darul Iman
              <span className="block text-emerald-300">
                Islamiyah
              </span>
            </h1>

            <p
              className="
                mt-6
                text-base
                sm:text-lg
                md:text-xl
                text-slate-200
                leading-relaxed
                max-w-2xl
              "
            >
              A modern Islamic madrasa
              dedicated to Quranic
              education, Islamic values,
              and character development
              for future generations.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                gap-4
                w-full
                sm:w-auto
              "
            >
              <a
                href="/admission"
                className="
                  bg-emerald-500
                  hover:bg-emerald-400
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  text-center
                  transition
                  shadow-xl
                "
              >
                Apply For Admission
              </a>

              <a
                href="/courses"
                className="
                  border
                  border-white/20
                  hover:bg-white/10
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  text-center
                  transition
                  backdrop-blur-sm
                "
              >
                Explore Courses
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
