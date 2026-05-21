import { motion } from "framer-motion";

import Container from "../ui/Container";
import PrimaryButton from "../ui/PrimaryButton";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-24 md:py-36">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-sm font-semibold">
              Islamic Modern Education
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-7">
              Nurturing Islamic Values &
              Academic Excellence
            </h1>

            <p className="mt-7 text-lg text-slate-600 leading-relaxed">
              Darul Iman Islamiyah is committed to producing
              righteous, knowledgeable, and modern Muslim generations.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <PrimaryButton>
                Apply For Admission
              </PrimaryButton>

              <button className="border border-emerald-700 text-emerald-700 px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 hover:text-white transition">
                Explore Courses
              </button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="h-[500px] rounded-[40px] bg-emerald-700 shadow-2xl"></div>

            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl">
              <h3 className="text-4xl font-bold text-emerald-700">
                1200+
              </h3>

              <p className="text-slate-600 mt-2">
                Active Students
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
