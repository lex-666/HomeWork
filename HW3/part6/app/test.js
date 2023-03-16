function calc(a, b, op) {
    if (op == 1) {
        return console.log(a - b);
    } if (op == 2) {
        return console.log(a * b);
    } if (op == 3) {
        return console.log(a / b);
    }
    return console.log(a + b);
}
calc(10, 3, 1);