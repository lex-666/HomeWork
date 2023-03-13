// let currentDate = new Date();
// if (currentDate.getHours() >= 5 && currentDate.getHours() < 11) {
//     alert("Доброї ранку");
// } if (currentDate.getHours() >= 11 && currentDate.getHours() < 17) {
//     alert("Доброго дня");
// } if (currentDate.getHours() >= 17 && currentDate.getHours() < 23) {
//     alert("Доброго вечора");
// } alert("Доброї ночі");

let currentDate = new Date();
switch (true) {
    case currentDate.getHours() >= 5 && currentDate.getHours() < 11:
        alert("Доброї ранку");
        break;
    case currentDate.getHours() >= 11 && currentDate.getHours() < 17:
        alert("Доброго дня");
        break;
    case currentDate.getHours() >= 17 && currentDate.getHours() < 23:
        alert("Доброго вечора");
        break;
    default: alert("Доброї ночі");
}
// let currentDate = new Date();
// switch (currentDate.getHours()) {
//     case 23:        
//     case 0:         
//     case 1:         
//     case 2:        
//     case 3: 
//     case 4: 
//     case 5: alert("Доброї ночі");
//         break;
//     case 6: 
//     case 7: 
//     case 8: 
//     case 9: 
//     case 10: alert("Доброго ранку");
//         break;
//     case 11: 
//     case 12: 
//     case 13: 
//     case 14: 
//     case 15: 
//     case 16: alert("Доброго дня");
//         break;
//     case 17: 
//     case 18: 
//     case 19: 
//     case 20: 
//     case 21: 
//     case 22: alert("Доброго вечора");
//         break;
// }

