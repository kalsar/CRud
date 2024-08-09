import Buttions from "./Buttons";
import useNewStore from "../store/store2";

const EmpTable = ({ data, onDelete }) => {
  const { data } = useNewStore();
  return (
    <div className="w-4/5  mx-32 mt-36 flex justify-center items-center ">
      <table className="ml-40 min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-2 border-b border-r-2 border-gray-200">
              S.num
            </th>
            <th className="py-2 px-16 border-b border-r-2 border-gray-200">
              Name
            </th>
            <th className="py-2 px-16 border-b border-r-2 border-gray-200">
              Designation
            </th>
            <th className="py-2 px-10 border-b border-r-2 border-gray-200">
              Salary
            </th>
            <th className="py-2 px-16 border-b border-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item.id}>
              <td className="py-2 px-2 border-b border-r-2 border-gray-200">
                {index}
              </td>
              <td className="py-2 px-16 border-b border-r-2 border-gray-200">
                {item.name}
              </td>
              <td className="py-2 px-16 border-b border-r-2 border-gray-200">
                {item.designation}
              </td>
              <td className="py-2 px-10 border-b border-r-2 border-gray-200">
                {item.salary}
              </td>
              <td className="py-2 px-16 border-b border-gray-200">
                {
                  <Buttions
                    id={item.id}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                  />
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmpTable;
