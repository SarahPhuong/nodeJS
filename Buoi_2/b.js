const arr = ['Android', 'iOS', 'NodeJS', 'ReactJs', 'React Native'];
// add end arr
// arr.push('PHP');
//add firt arr
// arr.unshift('Java');
// delete end
// arr.pop();
// delete first
// arr.shift();

// delete arr any
// arr.splice(2,2);
// add element any into arr
// arr.splice(2,0,'Javascript');
// console.log(arr)

// dao nguoc mang
arr.reverse();
console.log(arr)

const arrNum = [2, 4, 6, 7, 9, 2, 3];
let arrNew = [];
for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) {
        arrNew.push(arrNum[i]);
    }
}
console.log(arrNew)
