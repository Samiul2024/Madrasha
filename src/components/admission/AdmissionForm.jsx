const AdmissionForm = () => {
  return (
    <form className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium">
            Student Name
          </label>

          <input
            type="text"
            placeholder="Enter student name"
            className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Guardian Name
          </label>

          <input
            type="text"
            placeholder="Enter guardian name"
            className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="01XXXXXXXXX"
            className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Select Course
          </label>

          <select
            className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            <option>
              Hifzul Quran Program
            </option>

            <option>
              Boyosko Islamic Education
            </option>
          </select>
        </div>
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Address
        </label>

        <textarea
          rows="4"
          placeholder="Enter address"
          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        ></textarea>
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Upload Student Photo
        </label>

        <input
          type="file"
          className="w-full border border-slate-200 rounded-xl p-3"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-xl font-semibold transition"
      >
        Submit Admission Form
      </button>
    </form>
  );
};

export default AdmissionForm;
