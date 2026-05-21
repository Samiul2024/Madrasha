import { admissions } from "../../data/dashboard/admissions";

import DataTable from "../../components/tables/DataTable";

const AdmissionsPage = () => {
  const columns = [
    {
      header: "Student",
      accessor: "studentName",
    },

    {
      header: "Guardian",
      accessor: "guardian",
    },

    {
      header: "Course",
      accessor: "course",
    },

    {
      header: "Status",
      accessor: "status",

      render: (row) => (
        <span
          className={
            row.status === "Approved"
              ? "bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm"
              : row.status === "Pending"
              ? "bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm"
              : "bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm"
          }
        >
          {row.status}
        </span>
      ),
    },

    {
      header: "Actions",

      accessor: "actions",

      render: () => (
        <div className="flex gap-3">
          <button className="bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm">
            View
          </button>

          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm">
            Edit
          </button>
        </div>
      ),
    },
  ];

  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Admission Management
          </h1>

          <p className="text-slate-500 mt-2">
            Manage all student admission applications.
          </p>
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search students..."
            className="px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <select
            className="px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            <option>
              All Status
            </option>

            <option>
              Pending
            </option>

            <option>
              Approved
            </option>

            <option>
              Rejected
            </option>
          </select>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={admissions}
      />
    </section>
  );
};

export default AdmissionsPage;
