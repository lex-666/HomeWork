// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// - поле, яке зберігає колір маркера;
// - поле, яке зберігає кількість чорнила в маркері (у відсотках);
// - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В.Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для
// заправки маркера.Продемонструвати роботу написаних методів

class Marker {
  constructor(color, ink) {
    this.color = color;
    this.ink = ink;
  }

  print(text) {
    let printedText = "";
    for (let i = 0; i < text.length; i++) {
      if (this.ink >= 0.5 && text[i] != " ") {
        printedText += text[i];
        this.ink -= 0.5;
      } else {
        printedText += " ";
      }
    }
    console.log(this.ink + "% " + printedText + "color:" + this.color);
  }
}

class RefillableMarker extends Marker {
  refill(ink) {
    this.ink += ink;
    if (this.ink > 100) {
      this.ink = 100;
    }
  }
}

const marker = new Marker('red', 5);
marker.print('This is a test.'); 

const refillableMarker = new RefillableMarker('blue', 25);
refillableMarker.print('This is a test.'); 
refillableMarker.refill(150);
refillableMarker.print('This is a test.'); 




