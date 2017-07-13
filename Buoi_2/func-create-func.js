function veHinh(soDong, getSoCot, check) {
    const soCot = getSoCot(soDong);
    for (let i = 0; i < soDong; i++) {
        let str = '';
        for (let j = 0; j < soCot; j++) {
            if (check(soDong, soCot, i, j)) {
                str += "*";
            }
            else str += " ";
        }
        console.log(str)
    }

}

// function getSoCot(soDong){
//     return soDong
// }
// function check(soDong, soCot, i,j){
//     return j<=i
// }

//hinh1
// veHinh(10, function (soDong) {
//     return soDong
// }, function (soDong, soCot, i, j) {
//     return j<=i
// });

// hinh 2
// veHinh(5, function (soDong) {
//     return soDong
// }, function (soDong, soCot, i, j) {
//     return soDong-i <=j
// });

//hinh 3
veHinh(9, (soDong) =>{
    return soDong * 2 - 1;
}, (soDong, soCot, i, j)=> {
    // tamgiac can
    return Math.abs(j-soDong+1)<=i;
    // return i >= soDong-1 - j && i >= j - soDong+1;
})


const funcHinhNon=(soDong, soCot,i,j)