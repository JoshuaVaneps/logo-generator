const Shape = require("./shape");
const { Circle, Square, Triangle } = require("./shape");

function generateLogo(data) {
  const circle = new Circle(data.shapeFill, data.textColor, data.text);
  const square = new Square(data.shapeFill, data.textColor, data.text);
  const triangle = new Triangle(data.shapeFill, data.textColor, data.text);
  // const circle = new Circle(data.shapeFill, data.textColor, data.text);

  switch (data.shape) {
    case "circle":
      console.log("you picked circle");
      return circle.renderCircle();

    case "square":
      console.log("you picked square");
      return square.renderSquare();

    case "triangle":
      console.log("you picked triangle");
      return triangle.renderTriangle();
  }
}

module.exports = generateLogo;
