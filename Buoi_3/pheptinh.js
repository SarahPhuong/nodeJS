class PhepTinh {
    constructor(soA, soB, tenPhepTinh) {
        this.a = soA;
        this.b = soB;
        this.tenPhepTinh = tenPhepTinh;
    }
   getResultString() {
        const kq = this.getResult();
        switch (this.tenPhepTinh) {
            case 'CONG': return `${this.a} + ${this.b} = ${kq}`;
            case 'TRU': return `${this.a} - ${this.b} = ${kq}`;
            case 'NHAN': return `${this.a} * ${this.b} = ${kq}`;
            default: return `${this.a} / ${this.b} = ${kq}`;
        }
    }

    getResult() {
        switch (this.tenPhepTinh) {
            case 'CONG': return this.a + this.b;
            case 'TRU': return this.a - this.b;
            case 'NHAN': return this.a * this.b;
            default: return this.a / this.b;
        }
    }
}

const pt = new PhepTinh(5, 6, 'CONG');
console.log(pt.getResultString());
