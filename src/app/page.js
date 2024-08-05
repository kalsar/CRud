"use client";
import EmpForm from "./components/EmpForm";
import Seprator from "./components/seprator";
import EmpTable from "./components/EmpTable";
import useStore from './store/store'


export default function Home() {
const [empDataToPrint,insertData,deleteData,updated,notifyUpdated,updateEmpData]=useStore();

return (
    <div className="flex   h-screen flex-col  items-center">
      <div className=" w-4/5 sm:w-full  bg-slate-10">
        <div className="mt-10  top-0">
          <EmpForm dataFromForm={insertData} updated={updated} updateEmpData={updateEmpData} />
          <Seprator />
        </div>

        <div>
          <EmpTable data={empDataToPrint} onDelete={deleteData} onNotify={notifyUpdated} />
         
        </div>
        
      </div>
    </div>
  );
}
