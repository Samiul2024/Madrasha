const FormInput = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  error,
}) => {
  return (
    <div>
      <label className="block mb-2 font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />

      {error && (
        <p className="text-red-500 text-sm mt-2">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
