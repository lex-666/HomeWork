let data = [];
function findUnique(arr) {    
   for (const item of arr) {
    data[item] = data[item] ? data[item] + 1 : 1;     
    }
    const result = Object.keys(data).filter((item) => data[item] > 1);
    return console.log(result.length == 0);
}
findUnique([1, 2, 3, 5, 11]);