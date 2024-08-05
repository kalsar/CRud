"use client";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { useNewStore } from "../store/store2";
const Buttions = ({ id }) => {
  const { deleteData } = useNewStore();
  return (
    <div className="flex justify-center gap-10">
      <button
        className="text-blue-500 hover:text-blue-700"
        onClick={() => console.log("clik")}
      >
        <CiEdit className="w-6 h-6" />
      </button>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={deleteData(id)}
      >
        <MdOutlineDelete className="w-6 h-6" />
      </button>
    </div>
  );
};
export default Buttions;
