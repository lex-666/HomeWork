function examination(arr, first, second) {
    if (!Array.isArray(arr))
        throw new Error("Первым аргументом должен быть массив.");
    if (!Number.isInteger(first) || first <= 0)
        throw new Error("Первый индекс должен быть положительным числом.");
    if (first > arr.length)
        throw new Error("Первый индекс больше размера массива.");
    if (!Number.isInteger(second) || second <= 0)
        throw new Error("Второй индекс должен бы пложительным числом.");
    if (second > arr.length)
        throw new Error("Второй индекс больше размера массива.");
}
function sumSliceArray(arr, first, second) {
    examination(arr, first, second);
    return arr[first - 1] + arr[second - 1];
}
 
let array = [0, 2, 3, 5]; 
 
try {
    console.log(sumSliceArray(array, 1, 3));
    console.log(sumSliceArray(array, 10, 3));
    console.log(sumSliceArray(array, "1", 3));
}
catch (error) {
    console.log(error.message);
}


