class Employee {
    constructor(ten, tuoi) {
        this.name = ten;
        this.age = tuoi;
    }
    sayHello() {
        console.log('Hello, I am ' + this.name)
    }
    getBornYear() {
        return new Date().getFullYear() - this.age
    }
}
const myName = new Employee('Phuong', 23);
console.log(myName.name)
myName.sayHello();


class Point {
    constructor(pX, pY) {
        this.x = pX;
        this.y = pY;
    }
    getDistance() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }
    getLength() {
        const dx = this.pointB.x - this.pointA.x;
        const dy = this.pointB.y - this.pointA.y;
        return Math.sqrt(dx * dx + dy * dy)
    }
}

class Triangle {
    constructor(pointA, pointB, pointC) {
        this.a = pointA;
        this.b = pointB;
        this.c = pointC;
    }
    getPerimeter() {
        const AB = new Line(this.a, this.b);
        const BC = new Line(this.b, this.c);
        const AC = new Line(this.a, this.c);
        return AB.getLength() + BC.getLength() + AC.getLength()
    }
}
const p1 = new Point(1, 1);
const p2 = new Point(4, 5);
const p3 = new Point(7, 9);
const tg = new Triangle(p1, p2, p3);
console.log(tg.getPerimeter())