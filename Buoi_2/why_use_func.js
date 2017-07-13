// function inSoChiaHetCho3(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// function inSoChan(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//         }
//     }
// }

// function inSoLe(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 1) {
//             console.log(arr[i]);
//         }
//     }
// }

// function inSoChinhPhuong(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Math.sqrt(arr[i]) % 1 === 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// mang = [1, 4, 5, 7, 8, 3, 9];
// // inSoLe(mang);
// // inSoChiaHetCho3(mang)
// // inSoChan(mang);
// inSoChinhPhuong(mang);


// rut gon
function inSo(arr, isRight) {
    for (let i = 0; i < arr.length; i++) {
        if (isRight(arr[i])) console.log(arr[i])
    }
};

function kiemTraSoChan(e) {
    return e % 2 === 0;
}
function kiemTraSoLe(e) {
    return e % 2 === 1;
}
function kiemTraSoSoChiaHetCho3(e) {
    return e % 3 === 0;
}
function kiemTraSoChinhPhuong(e) {
    return Math.sqrt(e) % 1 === 0;
}

inSo([1, 4, 6, 7, 8], kiemTraSoChinhPhuong);