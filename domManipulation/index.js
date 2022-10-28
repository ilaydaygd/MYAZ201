//var, let, const
const message= "Hello World.";

console.log(message);
console.log(message);

//let 
let i=1;
while(i<5){
console.log(i);
i++;
}

//array
const employees=[
    "Ahmet Güneş",
    "Mehmet Tepe",
    "Filiz Can",
    "Fatma Irmak"
];
console.log("for loop")
for (let index = 0; index < employees.length; index++) {
    const element = employees[index];
    console.log(element);
    
}

//
console.log("for of")
for (const emp of employees) {
    console.log(emp)
}

//D: Document
//O: Object
//M: Model

const root= document.getElementById("root");
root.innerHTML="DOM Manipulation";

//HTML > body > root > p > p > p

console.log("map")
employees.map(emp=> {
    console.log(emp)
    const element =document.createElement("p")
    element.innerHTML=emp;
    root.append(element);
})