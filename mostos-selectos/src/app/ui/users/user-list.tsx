export default async function UserList({}) {
  return (
    <div className="mt-4 flex flex-col">
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden">
            <table className="table-fixed min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4">
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
                  <th className="p-4 text-left text-xs font-bold text-gray-500 uppercase">
                    Nombre
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-500 uppercase">
                    Apellidos
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-500 uppercase">
                    Email
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-500 uppercase">
                    Celular
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-500 uppercase">
                    Rol
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="p-4"></th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
