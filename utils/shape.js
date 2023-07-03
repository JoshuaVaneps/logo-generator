// idea 2 is to try using a class with multiple function and maybe calling those multiple functions
// in a switch case on my generate logos javasctipt
class Shape {
  constructor(shapeFill, textColor, text) {
    this.shapeFill = shapeFill;
    this.textColor = textColor;
    this.text = text;
  }

  renderTriangle() {
    console.log("you picked triangle");
    return `<svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,20 250,200 50,200" fill="${shapeFill}"/>
       <text x="150" y="145" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
  }

  renderSquare() {
    console.log("you picked square");
    return `<svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="20" rx="20" ry="20" width="200" height="200" fill="${shapeFill}" />
             <text x="150" y="140" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>`;
  }
}

// idea 3 having another class inherit my stuff from shape and then render inside of circle
class Circle {
  constructor(shapeFill, textColor, text) {
    Shape.call(this, shapeFill, textColor, text);
  }
  renderCircle() {
    return `
          <svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="120" r="100" fill="${shapeFill}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>`;
  }
}

// Idea 1 i had was to make a prototype
// Shape.prototype.renderCircle = function () {
//   return `
//     <svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="150" cy="120" r="100" fill="${shapeFill}" />
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
//     </svg>`;
// };
