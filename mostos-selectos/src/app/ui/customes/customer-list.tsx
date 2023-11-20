export default async function CustomerList({}) {
  return (
    <div className="mt-4 flex flex-col">
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden">
            <table className="table-fixed min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                      />
                      <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                    Product Name
                  </th>
                  <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                    Technology
                  </th>
                  <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                    ID
                  </th>
                  <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                    Price
                  </th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
