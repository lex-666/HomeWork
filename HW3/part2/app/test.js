let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]
function createArray(start, end) {
    let newArr = [];
    for (let i = start; i <= end; i++){
        newArr.push(i);
    }
    return newArr;
}