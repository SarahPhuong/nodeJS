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

// const older=arrPerson.filter(e=>e.age>=18);
// console.log(older);
// const tiIndex=arrPerson.find(e=>e.name==='Ti');
const tiIndex=arrPerson.findIndex(e=>e.name==='Ti');

console.log(tiIndex);