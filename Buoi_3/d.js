function Point(pX, pY) {
    this.x = pX;
    this.y = pY;
    this.getDistance = () => {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

function Line(pointA, pointB) {
    this.pointA = pointA;
    this.pointB = pointB;

    this.getLength = () => {
        const dx = this.pointB.x - this.pointA.x;
        const dy = this.pointB.y - this.pointA.y;
        return Math.sqrt(dx * dx + dy * dy)
    }
}
function Triangle(pointA, pointB, pointC) {
    this.a = pointA;
    this.b = pointB;
    this.c = pointC;
    this.tinhChuVi = () => {
        const abX = this.b.x - this.a.x;
        const abY = this.b.y - this.a.y;
        const bcX = this.c.x - this.b.x;
        const bcY = this.c.y - this.b.y;
        const acX = this.c.x - this.a.x;
        const acY = this.c.y - this.a.y;

        const ab = Math.sqrt(abX * abX + abY * abY);
        const bc = Math.sqrt(bcX * bcX + bcY * bcY);
        const ac = Math.sqrt(acX * acX + acY * acY)
    

        return ab + bc + ac

    }
    this.getPerimeter=()=>{
        const AB=new Line(this.a,this.b);
        const BC=new Line(this.b,this.c);
        const AC=new Line(this.a,this.c);
        return AB.getLength()+BC.getLength()+AC.getLength()
    }
}
const p1 = new Point(1, 1);
const p2 = new Point(4, 5);
const p3 = new Point(7, 9);
// const myLine=new Line(p1,p3)
// console.log(myLine.getLength())

const tg = new Triangle(p1, p2, p3);
console.log(tg.getPerimeter())