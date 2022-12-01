class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure) {  
    if (figure instanceof Square) {
      return Math.pow(figure.side, 2);
    } else if(figure instanceof Rectangle) {
      return figure.width * figure.height;
    } else if(figure instanceof Circle) {
      return Math.pow(figure.radius, 2) * Math.PI;
    } else {
      console.warn('AreaCalculator can calculate only areas of: Square, Rectangle, Circle');
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));