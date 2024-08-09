import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { storageKey } from "../constant/constant";

const useNewStore = () => {
  const initialState = {
    name: "",
    salary: "",
    designation: "",
    data: JSON.parse(localStorage.getItem(storageKey)) || [],
    isUpdated: false,
    id: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INSERT_DATA":
        const newData = [
          ...state.data,
          {
            id: uuidv4(),
            name: action.name,
            salary: action.salary,
            designation: action.designation,
          },
        ];
        localStorage.setItem("data", JSON.stringify(newData));
        return {
          ...state,
          data: newData,
          isUpdated: true,
        };
      case "UPDATE_DATA":
        const updatedData = state.data.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              name: action.name,
              salary: action.salary,
              designation: action.designation,
            };
          }
          return item;
        });
        localStorage.setItem("data", JSON.stringify(updatedData));
        return {
          ...state,
          data: updatedData,
        };
      case "DELETE_DATA":
        const filteredData = state.data.filter((item) => item.id !== action.id);
        localStorage.setItem("data", JSON.stringify(filteredData));
        return {
          ...state,
          data: filteredData,
        };
      case "RESET_FORM":
        return initialState;
      default:
        return state;
    }
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    dispatch({ type: "LOAD_DATA", data });
  }, []);

  return { state, dispatch };
};

const [state, dispatch] = useReducer(reducer, initialState);

export default useNewStore;
