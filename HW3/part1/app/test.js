const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
function compact(arr) {
    return console.log([...new Set(arr)]);
}

