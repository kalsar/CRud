"use client";
import EmpForm from "./components/EmpForm";
import Seprator from "./components/seprator";
import EmpTable from "./components/EmpTable";
import useNewStore from "./store/store2";

export default function Home() {
  const { state, dispatch } = useNewStore();

  const insertData = (name, salary, designation) => {
    dispatch({ type: "INSERT_DATA", name, salary, designation });
  };

  const updateEmpData = (id, name, salary, designation) => {
    dispatch({ type: "UPDATE_DATA", id, name, salary, designation });
  };

  const deleteData = (id) => {
    dispatch({ type: "DELETE_DATA", id });
  };

  return (
    <div className="flex   h-screen flex-col  items-center">
      <div className=" w-4/5 sm:w-full  bg-slate-10">
        <div className="mt-10  top-0">
          <EmpForm
            insertData={insertData}
            updateEmpData={updateEmpData}
            data={state}
          />
          <Seprator />
        </div>

        <div>
          <EmpTable data={state.data} onDelete={deleteData} />
        </div>
      </div>
    </div>
  );
}
