const DataTable = ({
  columns,
  data,
}) => {
  return (
    <div className="overflow-x-auto bg-white rounded-3xl shadow-lg border border-slate-100">
      <table className="w-full">
        <thead className="bg-slate-50 border-b border-slate-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="text-left px-6 py-4 font-semibold text-slate-700"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b border-slate-100 hover:bg-slate-50 transition"
            >
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="px-6 py-5 text-slate-600"
                >
                  {column.render
                    ? column.render(row)
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
