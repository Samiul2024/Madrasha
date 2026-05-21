const PrimaryButton = ({ children }) => {
  return (
    <button
      className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:scale-[1.02]"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
