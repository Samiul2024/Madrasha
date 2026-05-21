import {
  FaFacebookMessenger,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useState } from "react";

import contactInfo from "../../data/contactInfo";

const FloatingButtons = () => {
  const [open, setOpen] =
    useState(false);

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      onMouseEnter={() =>
        setOpen(true)
      }
      onMouseLeave={() =>
        setOpen(false)
      }
    >
      <div className="flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <>
              <motion.a
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.2,
                }}
                href={
                  contactInfo.messenger
                }
                target="_blank"
                rel="noreferrer"
                className="group relative bg-blue-500 text-white p-4 rounded-full shadow-xl text-xl"
              >
                <FaFacebookMessenger />

                <span className="absolute right-16 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  Messenger
                </span>
              </motion.a>

              <motion.a
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.2,
                  delay: 0.05,
                }}
                href={`tel:${contactInfo.phone}`}
                className="group relative bg-orange-500 text-white p-4 rounded-full shadow-xl text-xl"
              >
                <FaPhoneAlt />

                <span className="absolute right-16 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  Call
                </span>
              </motion.a>
            </>
          )}
        </AnimatePresence>

        <motion.a
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          href={
            contactInfo.whatsapp
          }
          target="_blank"
          rel="noreferrer"
          className="group relative bg-green-500 text-white p-4 sm:p-5 rounded-full shadow-2xl text-xl sm:text-2xl animate-pulse"
        >
          <FaWhatsapp />

          <span className="absolute right-20 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            Chat Now
          </span>
        </motion.a>
      </div>
    </div>
  );
};

export default FloatingButtons;
