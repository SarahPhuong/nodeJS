class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }

    // getArea() {
    //     return this.sideLength * this.sideLength;
    // }

    get area() {
        return this.sideLength * this.sideLength;
    }

    set area(newArea) {
        this.sideLength = Math.sqrt(newArea);
    }
}

const aSquare = new Square(2);

// console.log(aSquare.getArea());
console.log(aSquare.area);

aSquare.area = 100;
console.log(aSquare.sideLength);
console.log(aSquare.area);