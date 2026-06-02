const GalleryCard = ({ item }) => {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        group
      "
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
  );
};

export default GalleryCard;