const GalleryCard = ({ item }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl h-72 bg-emerald-700 group cursor-pointer">
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>

      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-2xl font-bold">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

export default GalleryCard;
