function randArray(k) {
    let arr = [];
    for (let i = 1; i <= k; i++){
        arr.push(Math.floor(Math.random()*500)+1);
    }
    return console.log(arr);
}
randArray(100);