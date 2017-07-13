// //Point { x:0, y:0}

// function Point(pX,pY){
//     this.pX=pX;
//     this.pY=pY;
//     this.getDistance=()=>{
//         return Math.sqrt(this.pX*this.pX+this.pY*this.pY)
//     }
// }

// const myPoint=new Point(3,4)
// console.log(myPoint.getDistance())

// const a={
//     name:'Phuong',
//     age:23
// }
// const pet={
//     name:'Dog',
//     age:2,
//     owner: a
// }
// console.log(pet.owner.name);

function Person(name,age){
    this.name=name;
    this.age=age;

}

function Pet(name, age, owner){
    this.name= name;
    this.age=age;
    this.owner=owner
}
const myName=new Person('Phuong',23);
const myPet=new Pet('Cat',3, myName);
console.log(myPet.owner.age)
