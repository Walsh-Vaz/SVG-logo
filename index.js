const { async } = require("rxjs");
const {Circle, Rectangle, Triangle} = require("./test/makeShapes");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "logoName",
        message: "Enter up to 3 characters"
    },

    {
        type: "input",
        name: "textColour",
        message: " What is the colour of the text",
    },

    {
        type: "list",
        name: "shapes",
        message: "pleas chooce a shape",
        choices: ["Circle", "Triangle", "Rectangle"],
    },

    {
        type: "input",
        name: "shapeColour",
        message: "what is the colour of the shape",
    },
];

async function init() {
    const response = await inquirer.prompt(questions);
    let text; // stores the logo name when text meets the requirements
    let colourTxt = response.textColour;
    let shape = response.shapes;
    let colour = response.shapeColour;
    var logoNameLength = response.logoName.length;
    
    if ((logoNameLength < 4) && (logoNameLength > 0)) {
        text = response.logoName;
        console.log("valid");
    }
    else {
        console.log("invalid ");
    }

    //console.log("User text:"  + text);
    console.log("User text:"  + colourTxt);
    console.log("User text:"  + shape);
    console.log("User text:"  + colour);

    let newShape;
    if (shape == "Triangle") {
        newShape = new Triangle();
        console.log("triangle");    
    }

    else if (shape == "Rectangle") {
        newShape = new Rectangle();  
        console.log("rext");    
    }

    else if (shape == "Circle") {
        newShape = new Circle(); 
        console.log("circle");     
    }
    
    newShape.colourSetting(colour);

}

init();

