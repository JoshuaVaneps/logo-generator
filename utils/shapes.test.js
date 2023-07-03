const Shape = require("./shape");
const { Circle, Square, Triangle } = require("./shape");

describe("Triangle", () => {
  test("checks rendering of triangle", () => {
    const shapeFill = "blue";
    const textColor = "white";
    const text = "asw";
    const triangle = new Triangle(shapeFill, textColor, text);
    const expectedShape = `<svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,20 250,200 50,200" fill="${shapeFill}"/>
      <text x="150" y="145" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
    expect(triangle.renderTriangle()).toEqual(expectedShape);
  });
});

describe("Square", () => {
  test("checks rendering of Square", () => {
    const shapeFill = "blue";
    const textColor = "white";
    const text = "asw";
    const square = new Square(shapeFill, textColor, text);
    const expectedShape = `<svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="20" rx="20" ry="20" width="200" height="200" fill="${shapeFill}" />
    <text x="150" y="140" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
    expect(square.renderSquare()).toEqual(expectedShape);
  });
});

describe("Circle", () => {
  test("checks rendering of Circle", () => {
    const shapeFill = "blue";
    const textColor = "white";
    const text = "asw";
    const circle = new Circle(shapeFill, textColor, text);
    const expectedShape = `<svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="120" r="100" fill="${shapeFill}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
    expect(circle.renderCircle()).toEqual(expectedShape);
  });
});
