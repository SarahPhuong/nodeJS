class Person {
    constructor(name,age,height){
        this.name=name;
        this.age=age;
        this.height=height
    }
}

const teo=new Person('Teo', 18,150);
const ti=new Person('Ti', 16,170);
const tun=new Person('Tun', 17,160);

const arrPerson=[teo,ti,tun];

// arrPerson.forEach((e,i)=>console.log(i+1 +" "+e.name+ " "+e.age));

// function check(arr, checkFunction){
//     for(let i=0;i<arr.length;i++){
//         if(checkFunction(arr[i])) return true;
//     }
//     return false
// }
// console.log(check(arrPerson,e=> {return e.height<150}))


const isOldEnough=arrPerson.some(e=>e.age>17);
// const isOldEnough=arrPerson.every(e=>e.age>17);

console.log(isOldEnough)

const isHeightEnough= arrPerson.some(e=>e.height>150);
console.log(isHeightEnough)