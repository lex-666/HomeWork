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
let angled = false;
if (a > b) {
    if (a > c) {
        if (a*a == b*b + c*c) {
            angled = true;
        } else {  }    
    }else { }
} else {  }
if (b > a) {
    if (b > c) {
        if (b*b == a*a + c*c) {
            angled = true;
        } else {  }    
    }else { }
} else {  }
if (c > b) {
    if (c > a) {
        if (c*c == b*b + a*a) {
            angled = true;
        } else {  }    
    }else { }
} else { }
console.log("Area of ​​a triangle is " + square.toFixed(3));
console.log("This triangle is right angled - " + angled);
