function showDigit(a, b) {
    if (Math.floor(a) >= Math.floor(b)) {
        return console.log("Incorrect data");
    } else {
        for (let i = Math.floor(a); i <= Math.floor(b); i++) {
            let result = '';
            for (let j = i - Math.floor(a); j >= 0; j--)
                result += i;
            console.log(result);
        }
    }
}
showDigit(0, 2);

