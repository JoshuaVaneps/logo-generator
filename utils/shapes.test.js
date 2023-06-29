const generate = require("./generateLogo");
const data = require("../index").data;

describe("generate", () => {
  test("check rendering of logo", () => {
    var shapeFill = blue;
    const expectedGenerate = (
      <svg
        version="1.1"
        width="600"
        height="400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="150,20 250,200 50,200" fill="${shapeFill}" />
        <text
          x="150"
          y="145"
          font-size="40"
          text-anchor="middle"
          fill="${data.textColor}"
        >
          ${data.text}
        </text>
      </svg>
    );
    expect(generate.render()).toEqual(expectedGenerate);
  });
});

// describe("Triangle", () => {
//   test("checks rendering of triangle", () => {
//     var shapeFill = "blue";
//     const triangle = new Triangle(shapeFill);
//     const expectedShape = (
//       <svg
//         version="1.1"
//         width="600"
//         height="400"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <polygon points="150,20 250,200 50,200" fill="${shapeFill}" />
//         <text
//           x="150"
//           y="145"
//           font-size="40"
//           text-anchor="middle"
//           fill="${data.textColor}"
//         >
//           ${data.text}
//         </text>
//       </svg>
//     );
//     expect(triangle.render()).toEqual(expectedShape);
//   });
// });
// describe("Square", () => {
//   test("checks rendering of square", () => {
//     const shapeFill = "red";
//     const square = new Square(shapeFill);
//     const expectedShape = (
//       <svg
//         version="1.1"
//         width="600"
//         height="400"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect
//           x="50"
//           y="20"
//           rx="20"
//           ry="20"
//           width="200"
//           height="200"
//           fill="${shapeFill}"
//         />
//         <text
//           x="150"
//           y="140"
//           font-size="60"
//           text-anchor="middle"
//           fill="${data.textColor}"
//         >
//           ${data.text}
//         </text>
//       </svg>
//     );
//     expect(square.render()).toEqual(expectedShape);
//   });
// });
// describe("Circle", () => {
//   test("checks rendering of circle", () => {
//     const shapeFill = "yellow";
//     const circle = new Circle(shapeFill);
//     const expectedShape = (
//       <svg
//         version="1.1"
//         width="600"
//         height="400"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <polygon points="150,20 250,200 50,200" fill="${shapeFill}" />
//         <text
//           x="150"
//           y="145"
//           font-size="40"
//           text-anchor="middle"
//           fill="${data.textColor}"
//         >
//           ${data.text}
//         </text>
//       </svg>
//     );
//     expect(circle.render()).toEqual(expectedShape);
//   });
// });
