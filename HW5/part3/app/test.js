// -  Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься
//метод showFullName(),     який виводить у консоль ім’я і прізвище особи.

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return `${this.name} ${this.surname}`;
    }
}
let a = new Person("Art", "Z");
console.log(a.showFullName());

// - Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year(рік вступу
//      до університету).

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
}
console.log(new Student("Artem", "Z", 2023));

// - В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і
// по - батькові(midleName) студента.

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        console.log(`${this.surname} ${this.name} ${midleName}`);
    }
}
let a1 = new Student("Artem", "Z", 2023);
a1.showFullName("Vladimirovich");

//- Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента
//     (від 1 до 6).Значення курсу визначатиметься як різниця поточного року(визначити самостійно) і року вступу до ВНЗ.
// Приклад результату:
// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 4

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        console.log(`${this.surname} ${this.name} ${midleName}`);
    }
    showCourse() {
        let today = new Date();
        let course = today.getFullYear() - this.year + 1;        
    return course;
  }
}
let student1 = new Student("Artem", "Z", 2020);
console.log("Current course: " + student1.showCourse());
