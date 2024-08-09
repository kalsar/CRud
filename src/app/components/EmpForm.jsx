"use client";
import useNewStore from "../store/store2";

const EmpForm = ({ insertData, updateEmpData, data }) => {
  const {
    name,
    setName,
    salary,
    setSalary,
    designation,
    setDesignation,
    isUpdated,
  } = useNewStore();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isUpdated) {
      updateEmpData(id, name, salary, designation);
    } else {
      insertData(name, salary, designation);
    }
    // Clear the form after submission
    setName("");
    setSalary("");
    setDesignation("");
  };

  return (
    <div>
      <form
        className="flex flex-row gap-4 justify-center"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-20px py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Designation:
          </label>
          <input
            className="shadow appearance-none border rounded w-20px py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="designation"
            defaultValue={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Salary:
          </label>
          <input
            className="shadow appearance-none border rounded w-10px py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="salary"
            placeholder="0"
            defaultValue={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold  w-28 h-14 ml-2 mt-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {isUpdated ? "update" : "create"}
        </button>
      </form>
    </div>
  );
};
export default EmpForm;
