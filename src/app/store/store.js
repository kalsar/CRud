import { storageKey,initial } from "../constant/constant";
import { useState } from "react";



const useStore=()=>{

const [empDataToPrint,setEmpDataToPrint]=useState(getDataF() || [])
const [updated,setUpdated]=useState({isEdited:false,data:{...initial}})


  //-----------insertData()-----------------------  

 function insertDataF(data){
    if(Array.isArray(data)){
        localStorage.setItem(storageKey,JSON.stringify(data));
        setEmpDataToPrint(data);
    }
    else{
       
        localStorage.setItem(storageKey,JSON.stringify([...empDataToPrint,data]));
        const data1=getDataF();
        setEmpDataToPrint(data1);
        
}
}
//----------getData()-------------------
   function getDataF(){
    const data=localStorage.getItem(storageKey);
    return JSON.parse(data);
    
   }

   //----------------deleteData()-----------------
   function deleteDataF(index){
      
    const data=getDataF();
    const updatedData=data.filter((ele,i)=>(index!=i))
     insertDataF(updatedData);
   }
   //------------updateEmpData()-----------

   function updateEmpDataF(data,index){
      
      const updatedData=getDataF();
      updatedData[index]=data;
      setEmpDataToPrint(updatedData)
      setUpdated({isEdited:false,data:{...initial}})
      

   }

    //--------------notifyUpdated()---------------
   function notifyUpdatedF(index){
      
     
      
      const data=getDataF();
      const dataToBeUpdate=data[index]
      setUpdated((prev)=>({
         isEdited:!prev.isEdited,
         data:{
            ...dataToBeUpdate,index
         }
         
      }))
      
     

     
   }
  

return [empDataToPrint,insertDataF,deleteDataF,updated,notifyUpdatedF,updateEmpDataF];
}
export default useStore;