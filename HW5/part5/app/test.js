// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), 
//dayRate(ставка за день роботи), workingDays(кількість відпрацьованих днів).
//        1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток 
//ставки dayRate на кількість відпрацьованих днів workingDays.
//        2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий 
//множник при визначенні зарплати – створити метод showSalaryWithExperience().Вивести значення зарплати з цим
//коефіцієнтом.
    //        3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на 
 //   екран.
//         4) Вивести значення зарплати з новим experience.
//         5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче.
 //Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:
//worker_fullName: salary_value
//         6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.
// Example usage:
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// . . . . . .

// let worker3 = new Worker("Andy Ander", 29, 23);
// . . . . . .

// Output example:
// John Johnson
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690

// Tom Tomson
// Tom Tomson salary: 1056
// . . . . . .
// New experience: 1.5
// Tom Tomson  salary: 1584

// Andy Ander
// Andy Ander salary: 667
// . . . . . .
// New experience: 1.5
// Andy Ander  salary: 1000.5

// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584

//Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), 
//dayRate(ставка за день роботи), workingDays(кількість відпрацьованих днів).
//        1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток 
//ставки dayRate на кількість відпрацьованих днів workingDays.

class Worker {
    constructor(fullname, dayRate, workingDays) {
        this.fullname = fullname;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        return this.dayRate * this.workingDays;
    }
}
const worker1 = new Worker("Art Z", 100, 21);
console.log(worker1.fullname);
console.log("salary: " + worker1.showSalary());

//2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий
//множник при визначенні зарплати – створити метод showSalaryWithExperience().Вивести значення зарплати з цим
//коефіцієнтом.
//3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на 
 //   екран.
 //4) Вивести значення зарплати з новим experience.

class Worker {
    constructor(fullname, dayRate, workingDays) {
        this.fullname = fullname;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }
    showSalary() {
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience() {
        return this.dayRate * this.workingDays * this._experience;
    }
    get experience() {
        return this._experience;
    }

    set experience(value) {
        this._experience = value;
    }
}
const worker2 = new Worker("Art Z", 100, 21);
console.log("New experience: " + worker2._experience);
console.log(worker2.fullname + "  salary:  " + worker2.showSalaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker2._experience);
console.log(worker2.fullname + "  salary:  " + worker2.showSalaryWithExperience());

//5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче.
 //Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:
//worker_fullName: salary_value
//         6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.

class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }
    showSalary() {
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience() {
        return this.dayRate * this.workingDays * this._experience;
    }
    
    get experience() {
        return this._experience;
    }

    set experience(value) {
        this._experience = value;
    }
}
let workers = [
  new Worker("John Johnson", 20, 23),
  new Worker("Tom Tomson", 48, 22),
  new Worker("Andy Ander", 29, 23),
];

workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
console.log(workers);

console.log("Sorted salary:");
workers.forEach((worker) => {
  console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
});
