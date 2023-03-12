let placeNumber = prompt("Please, enter place number");
let compartmentNumber;
let shelfType;
let placeType;

if (54 - placeNumber >= 18) {
    placeType = "not a side";
    compartmentNumber = Math.ceil(placeNumber / 4);
} else {
    placeType = "side";
    if (placeNumber === "54") {
        compartmentNumber = 1;
    } else { compartmentNumber = Math.ceil((54 - placeNumber) / 2); }
}
if (placeNumber%2) {
    shelfType = "down";
} else {
shelfType = "up";
}

alert("Your compartment number is " + compartmentNumber);
alert("Your place type is " + placeType);
alert("Your shelf type is " + shelfType);