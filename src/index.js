const Matrix = require("./matrix");

const { generateRenderList, renderLayoutMatrix } = Matrix();

const renderedList = generateRenderList([-2, 3, 0, 4, 7, 0, 20, -13, -9]);

console.log(renderLayoutMatrix(renderedList));