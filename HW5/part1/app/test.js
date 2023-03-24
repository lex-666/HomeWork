// Напишіть клас Круг та реалізуйте функціонал:

// - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}
console.log(new Circle(prompt("enter coordinate X"), prompt("enter coordinate Y"), prompt("enter radius")));

// - Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    circleLength() {
        return 2 * Math.PI * this.radius;
    }
}
let a1 = new Circle(prompt("enter coordinate X"), prompt("enter coordinate Y"), prompt("enter radius"));
console.log(a1);
console.log(a1.circleLength());

// - Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    static circleLength(radius) {
        return 2 * Math.PI * radius;
    }
}
console.log(Circle.circleLength(prompt("enter radius")));

// - Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    copyCircle() {
        return new Circle(this.x, this.y, this.radius);
    }
}
let a2 = new Circle(prompt("enter coordinate X"), prompt("enter coordinate Y"), prompt("enter radius"));
console.log(a2);
console.log(a2.copyCircle());

// - Визначте статичний метод, який приймає координати центра кола,
//його радіус та повертає об'єкт кола із заданими параметрами;

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    static xyRadius(x, y, radius) {
        return new Circle(x, y, radius);
    }
}
console.log(new Circle(prompt("enter coordinate X"), prompt("enter coordinate Y"), prompt("enter radius")));

// - Визначте метод перевірки попадання крапки до кола;

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    pointInside(x, y) {
        const b = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
        return b <= this.radius;
    }
}
let a3 = new Circle(1, 1, 2);
console.log(a3.pointInside(prompt("enter coordinate X"), prompt("enter coordinate Y")));

// - Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    toString() {
    return "Circle with center (${this.x}, ${this.y}) and radius ${this.radius}";
    }
}
let a4 = new Circle(1, 1, 2);
console.log(a4.toString());