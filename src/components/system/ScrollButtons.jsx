import {
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const ScrollButtons = () => {
  const [show, setShow] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(
        window.scrollY > 0.1
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="
        fixed
        left-4
        bottom-4
        sm:left-6
        sm:bottom-6
        z-50
        flex
        flex-col
        gap-3
      "
    >
      <motion.button
        whileTap={{
          scale: 0.9,
        }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          bg-slate-900
          hover:bg-black
          text-white
          p-4
          rounded-full
          shadow-xl
        "
      >
        <FaArrowUp />
      </motion.button>

      <motion.button
        whileTap={{
          scale: 0.9,
        }}
        onClick={() =>
          window.scrollTo({
            top:
              document.body
                .scrollHeight,
            behavior: "smooth",
          })
        }
        className="
          bg-emerald-700
          hover:bg-emerald-800
          text-white
          p-4
          rounded-full
          shadow-xl
        "
      >
        <FaArrowDown />
      </motion.button>
    </div>
  );
};

export default ScrollButtons;
