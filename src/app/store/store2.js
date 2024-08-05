import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useNewStore = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [designation, setDesignation] = useState("");
  const [data, setData] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  console.log("aman", data);

  function createData() {
    const id = uuidv4();
    const emp = {
      name,
      salary,
      designation,
      id,
    };

    //setData((prev) => [emp]);

    setData((prev) => {
      const newData = [...prev, emp];
      console.log("Updated Data:", newData); // This will log the updated state correctly
      return newData;
    });

    setSalary("");
    setName("");

    setDesignation("");
    console.log({ ...data });
  }
  function updateData(id) {
    setData((prev) =>
      prev.map((obj) =>
        obj.id === id ? { name, salary, designation, id } : obj
      )
    );

    setSalary("");
    setName("");

    setDesignation("");
  }
  function deleteData(id) {
    setData((prev) => prev.filter((obj) => obj.id !== id));
  }
  return {
    name,
    setName,
    salary,
    setSalary,
    designation,
    setDesignation,
    data,
    setData,
    isUpdated,
    setIsUpdated,
    createData,
    updateData,
    deleteData,
  };
};

export default useNewStore;
