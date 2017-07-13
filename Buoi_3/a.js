const obj = {
    name: 'Phuong',
    age: '23'
}

console.log(obj.name + ' ' + obj.age)

function Employee(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = () => {
        console.log('Hello, I am ' + this.name)
    }
    this.getBornYear =()=>{
        return new Date().getFullYear()- this.age
    }
}

const myName = new Employee('Phuong', 23);
console.log(myName.name)
myName.sayHello();
// console.log(new Date().getFullYear())
console.log(myName.getBornYear())