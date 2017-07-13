class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    sayHello() {
        console.log('Xin chao ' + this.name)
    }
}

class Child extends Person {
    static maxAge=10;
    constructor(name, age, hoppy) {
        super(name,age);
        this.hoppy = hoppy
    }
    sayHello() {
        super.sayHello();
        console.log(this.age + ' tuoi')
    }
}

const phuong = new Child('Phuong', 5);
console.log(phuong)
phuong.sayHello();

console.log(Child.maxAge)