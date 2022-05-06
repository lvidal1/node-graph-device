const Matrix = require("./matrix");

const { generateRenderList, renderLayoutMatrix } = Matrix();


// Main

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Please, enter the items to print on the matrix. Separate each item with a comma (,)\n Ex: -2,3,0,4,7,0,20\n\n`, input => {

    const list = input.split(",")

    const generatedList = generateRenderList(list);

    const renderedMatrix = renderLayoutMatrix(generatedList);

    console.log("Output:\n\n")

    console.log(renderedMatrix);

    readline.close();
});



