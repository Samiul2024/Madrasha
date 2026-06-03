import {
  useEffect,
  useState,
} from "react";

const GalleryCard = ({ item }) => {

  const [isOpen, setIsOpen] =
    useState(false);

  useEffect(() => {

    const handleEsc =
      (e) => {

        if (
          e.key === "Escape"
        ) {
          setIsOpen(false);
        }
      };

    window.addEventListener(
      "keydown",
      handleEsc
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleEsc
      );

  }, []);

  return (
    <>
      <div
        className="
          bg-white
          rounded-3xl
          overflow-hidden
          shadow-lg
          group
          cursor-pointer
        "
        onClick={() =>
          setIsOpen(true)
        }
      >
        <div
          className="
            overflow-hidden
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="
              w-full
              h-64
              object-cover
              group-hover:scale-110
              transition
              duration-500
            "
          />
        </div>

        <div className="p-5">
          <h3
            className="
              font-semibold
              text-lg
            "
          >
            {item.title}
          </h3>

          <p
            className="
              text-sm
              text-slate-500
              mt-1
            "
          >
            {item.category}
          </p>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() =>
            setIsOpen(false)
          }
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/90
            flex
            items-center
            justify-center
            p-4
          "
        >
          <button
            onClick={() =>
              setIsOpen(false)
            }
            className="
              absolute
              top-5
              right-5
              text-white
              text-4xl
              font-bold
              hover:opacity-70
            "
          >
            ×
          </button>

          <img
            src={item.image}
            alt={item.title}
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              max-w-full
              max-h-[90vh]
              object-contain
              rounded-xl
            "
          />
        </div>
      )}
    </>
  );
};

export default GalleryCard;