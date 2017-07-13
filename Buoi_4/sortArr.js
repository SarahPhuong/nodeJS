const arrNum=[1,4,5,7,8,9,6,8,4,3,100];

// arrNum.sort((a,b)=>{
//     if(a>b) return 1;
//     if(a<b) return -1;
//     return 0
// });
arrNum.sort((a,b)=>a-b);
console.log(arrNum)

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

arrPerson.sort((a,b)=>a.age-b.age)
console.log(arrPerson)