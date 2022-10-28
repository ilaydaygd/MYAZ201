let employees = [
    {id: 1, firstName:"Aslı", lastName:"Yıldız", age: 20},    
    {id: 2, firstName:"Zeynep", lastName:"Kaya", age: 30},
    {id: 3, firstName:"Berkay", lastName:"Yıldırım", age: 15},
    {id: 4, firstName:"Burak", lastName:"Kılıç", age: 28}
];

console.log(employees)

const newArray= [...employees.filter(emp => emp.id!==3),
    {id: 3, firstName:"Ali", lastName:"Yıldırım", age: 15},]
console.log(newArray)