let a = Number(prompt("Enter side a"));
if (Number.isNaN(a) == false) {   
} else { alert("Incorrect data"); }
let b = Number(prompt("Enter side b"));
if (Number.isNaN(b) == false) {  
} else { alert("Incorrect data"); }
let c = Number(prompt("Enter side c"));
if (Number.isNaN(c) == false) {   
} else { alert("Incorrect data"); }  

let p = (a + b + c) / 2;
let square = Math.sqrt(p * (p - a) * (p - b) * (p - c));

if (a > b) {
    if (a > c) {
        if (a*a == b*b + c*c) {
            console.log("Yes");
        } else { console.log("No"); }    
    }else { console.log("No"); }
} else { console.log("No"); }
if (b > a) {
    if (b > c) {
        if (b*b == a*a + c*c) {
            console.log("Yes");
        } else { console.log("No"); }    
    }else { console.log("No"); }
} else { console.log("No"); }
if (c > b) {
    if (c > a) {
        if (c*c == b*b + a*a) {
            console.log("Yes");
        } else { console.log("No"); }    
    }else { console.log("No"); }
} else { console.log("No"); }
console.log(square.toFixed(3));
