function doSth(aFunc) {
    aFunc(1, 5);
}

doSth(console.log);

function add(a, b) {
    console.log(a + b)
}
doSth(add)

doSth(function(a,b){
    console.log(a-b)
})