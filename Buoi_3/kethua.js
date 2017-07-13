function Person(name,age){
        this.name=name;
        this.age=age
}
// class Person1{
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }
// }
// Person1.prototype.sayHello=function(){
//     console.log('hello '+this.name)
// }
Person.prototype.sayHello=function(){
    console.log('Xin chao, Toi la '+ this.name)
}

const myName=new Person('Phuong',23);
myName.sayHello();

myName.age=myName.age+3;
console.log(myName);

myName.email='nguyen@gmail.com';
console.log(myName);

// const name=new Person1('Thanh Phuong',18);
// name.sayHello()



