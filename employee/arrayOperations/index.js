
console.log(employees)
let newArray=[];
const temp =3;

for (const emp of employees) {
    if(emp.id!==temp){
        newArray.push(emp);
    }
}
console.log(newArray)

const arrayWithFilter = employees.filter(emp=> emp.id!==temp);
console.log(arrayWithFilter)