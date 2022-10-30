import { useState } from "react";
import AppContext from "../../context/AppContext";

function EmployeeAdd() {

    const {employees,setList} = useState(AppContext);

    const [values,setValues] = useState({
        firstName:'',
        lastName:''
    })
    
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
        
    }

    const handleClear= () => {
        setValues({
            firstName:'',
            lastName:''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        setList([
            ...employees,
            {
                id: employees.length+1,
                ...values
                //firstName: e.target.firstName.value,
                //lastName: e.target.lastName.value,
            },
        ]);

        setValues({
            firstName:'',
            lastName:''
        })

    };
    return (
    <div>
        <h3>EmployeeAdd</h3>

        <form onSubmit={handleSubmit}>
        <p>
        <input
        id="firstName"
        name="firstName" 
        placeholder='FirstName' 
        type="text"
        onChange={handleChange}
        value={values?.firstName}
        ></input>
        </p>

        <p>
        <input 
        id="lastName"
        name="lastName" 
        placeholder='LastName' 
        type="text"
        onChange={handleChange}
        value={values?.lastName}

         ></input>
        </p>
        <button type="submit">Save</button>
        <button onClick={handleClear} type="button">Clear</button>
        </form>
    </div>
  )
}

export default EmployeeAdd;