import { useContext, useState } from "react";
import EmployeeAdd from "./components/employeeAdd/EmployeeAdd";
import EmployeeList from "./components/employeeList/EmployeeList";
import EmployeeUpdate from "./components/employeeUpdate/EmployeeUpdate";
import AppContext from "./context/AppContext";

function App() { 

  const {appName} = useContext(AppContext)


  return (
    <div className="container m-auto">
      <h1 className="text-center">{appName}</h1>
      <EmployeeList/>
      <EmployeeAdd />
      <EmployeeUpdate/>
    </div>
  );
}

export default App;
