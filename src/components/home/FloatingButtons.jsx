const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <button className="w-14 h-14 rounded-full bg-emerald-700 text-white shadow-2xl text-xl hover:scale-110 transition">
        ?
      </button>

      <button className="w-14 h-14 rounded-full bg-amber-500 text-white shadow-2xl text-xl hover:scale-110 transition">
        ?
      </button>
    </div>
  );
};

export default FloatingButtons;
