// using a class with multiple function and calling those multiple functionsin generate logos
// in a switch case on my generate logos javasctipt
class Shape {
  constructor(shapeFill, textColor, text) {
    this.shapeFill = shapeFill;
    this.textColor = textColor;
    this.text = text;
  }
}

// renderCircle() {
//   console.log("you picked circle");
//   return `
//     <svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="150" cy="120" r="100" fill="${this.shapeFill}" />
//       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
//     </svg>`;
// }

// renderTriangle() {
//   console.log("you picked triangle");
//   return `<svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
//     <polygon points="150,20 250,200 50,200" fill="${this.shapeFill}"/>
//     <text x="150" y="145" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
//   </svg>`;
// }

// renderSquare() {
//   console.log("you picked square");
//   return `<svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
//     <rect x="50" y="20" rx="20" ry="20" width="200" height="200" fill="${this.shapeFill}" />
//     <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
//   </svg>`;
// }

class Circle extends Shape {
  constructor(shapeFill, textColor, text) {
    super(shapeFill, textColor, text);
  }
  renderCircle() {
    console.log("you picked circle");
    return `<svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="120" r="100" fill="${this.shapeFill}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

class Triangle extends Shape {
  constructor(shapeFill, textColor, text) {
    super(shapeFill, textColor, text);
  }
  renderTriangle() {
    console.log("you picked Triangle");
    return `<svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,20 250,200 50,200" fill="${this.shapeFill}"/>
      <text x="150" y="145" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  constructor(shapeFill, textColor, text) {
    super(shapeFill, textColor, text);
  }
  renderSquare() {
    console.log("you picked Square");
    return `<svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="20" rx="20" ry="20" width="200" height="200" fill="${this.shapeFill}" />
    <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
