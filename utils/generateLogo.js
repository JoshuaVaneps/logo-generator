// function renderSvg(shape) {
//   var svg = `${shape}`;
// }

// function to generate the logo
function generateLogo(data) {
  // switch case to render the correct info and situation
  switch (data.shape) {
    case "circle":
      console.log("you picked circle");
      return `
  <svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="120" r="100" fill="${data.shapeFill}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
</svg>`;
    case "square":
      console.log("you picked square");
      return `<svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="20" rx="20" ry="20" width="200" height="200" fill="${data.shapeFill}" />
         <text x="150" y="140" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
      </svg>`;

    case "triangle":
      console.log("you picked triangle");
      return `<svg version="1.1" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 250,200 50,200" fill="${data.shapeFill}"/>
     <text x="150" y="145" font-size="40" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
  </svg>`;
  }
}

module.exports = generateLogo;
