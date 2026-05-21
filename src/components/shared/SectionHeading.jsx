const SectionHeading = ({
  subtitle,
  title,
  description,
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="text-emerald-700 font-semibold uppercase tracking-widest text-sm">
        {subtitle}
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
        {title}
      </h2>

      <p className="mt-5 text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
