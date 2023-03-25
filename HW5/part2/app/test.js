// Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад:
//  let mentor = {
//             course: "JS fundamental",
//             duration: 3,
//             direction: "web-development"
//         };
// propsCount(mentor);  // 3

function propsCount(mentor) {    
    let propCount = 0;  
    for (let prop in mentor) {
        if (mentor.hasOwnProperty(prop)){
            propCount += 1;
        }
    }
  return propCount;
}
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};
console.log(propsCount(mentor));