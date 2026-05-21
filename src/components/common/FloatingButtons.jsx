import {
  FaFacebookMessenger,
  FaWhatsapp,
  FaPhoneAlt,
  FaComments,
} from "react-icons/fa";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import contactInfo from "../../data/contactInfo";

const FloatingButtons = () => {
  const [open, setOpen] =
    useState(false);

  const wrapperRef =
    useRef(null);

  useEffect(() => {
    const handleClickOutside = (
      event
    ) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          event.target
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="
        fixed
        bottom-4
        right-4
        sm:bottom-6
        sm:right-6
        z-50
      "
    >
      <div className="flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <>
              <motion.a
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.2,
                }}
                href={
                  contactInfo.whatsapp
                }
                target="_blank"
                rel="noreferrer"
                className="
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  p-4
                  rounded-full
                  shadow-2xl
                  text-xl
                "
              >
                <FaWhatsapp />
              </motion.a>

              <motion.a
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.2,
                  delay: 0.05,
                }}
                href={
                  contactInfo.messenger
                }
                target="_blank"
                rel="noreferrer"
                className="
                  bg-blue-500
                  hover:bg-blue-600
                  text-white
                  p-4
                  rounded-full
                  shadow-2xl
                  text-xl
                "
              >
                <FaFacebookMessenger />
              </motion.a>

              <motion.a
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.2,
                  delay: 0.1,
                }}
                href={`tel:${contactInfo.phone}`}
                className="
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  p-4
                  rounded-full
                  shadow-2xl
                  text-xl
                "
              >
                <FaPhoneAlt />
              </motion.a>
            </>
          )}
        </AnimatePresence>

        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          onClick={() =>
            setOpen(!open)
          }
          className="
            bg-emerald-700
            hover:bg-emerald-800
            text-white
            p-5
            rounded-full
            shadow-2xl
            text-2xl
          "
        >
          <FaComments />
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingButtons;
