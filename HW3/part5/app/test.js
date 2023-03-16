let  arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
let arrNew = newArr(arr);
function newArr(arr) {
    let b = [];
    let c = [];   
    let a = arr.flat();
    for (const item of a) {
        if (typeof (item) == "number") {
            b.push(item);
        } else { c.push(item) };
    } 
    a.push(b);
    a.push(c);
    return console.log(a);
}
/* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/