export type ColumnType = {
  title: string;
  dataIndex: string;
  key: string;
  render?: (value: string | number | JSX.Element) => JSX.Element;
};

export type DataSourceType = {
  [key: string]: string | number | JSX.Element;
};

type TableProps = {
  columns: ColumnType[];
  dataSource: DataSourceType[];
  loading?: boolean;
};

export function Table({ columns, dataSource, loading }: TableProps) {
  if (loading) {
    return (
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs font-normal text-stone-400 uppercase bg-transparent">
            <tr>
              {columns.map((column) => (
                <th key={column.key}>
                  <div role="status" className="max-w-sm animate-pulse">
                    <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200"></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index} className="bg-white border-b">
                {[...Array(columns.length)].map((__, idx) => (
                  <td
                    key={idx}
                    className="py-4 px-6 border-t-[10px] border-t-[#F8F8F8] border-b-[10px] border-b-[#F8F8F8]"
                  >
                    <div role="status" className="max-w-sm animate-pulse">
                      <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200"></div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs font-normal text-stone-400 uppercase bg-transparent">
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="py-3 px-6">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row, index) => (
            <tr key={index} className="bg-white border-b">
              {columns.map((column) => (
                <td className="py-4 px-6 border-t-[10px] border-t-gray-50 border-b-[10px] border-b-gray-50">
                  {column.render?.(row[column.dataIndex]) ??
                    row[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
