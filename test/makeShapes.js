class Circle {

    constructor() {
        this.colour = "";
    }

    colourSetting(colour) {
        this.colour = colour;
    }

    rendering(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.colour}"/>`;
    }

}

class Rectangle {

    constructor() {
        this.colour = "";
    }

    colourSetting(colour) {
        this.colour = colour;
    }

    rendering(){
        return `<rect x="50" y="50" width="300" height="300" stroke="black" fill="${this.colour}" stroke-width="5"/>`;
    }

}

class Triangle {
   
    constructor() {
        this.colour = "";
    }

    colourSetting(colour) {
        this.colour = colour;
    }

    rendering(){
        return `<polygon points="0,200 300,200 150,0" fill="${this.colour}"/>`;
    }

}

class SVG {
    constructor() {
        this.text = "";
        this.s = "";
        //this.colour = "";
    }

    makeShape(shape){
        this.s = shape.rendering();
    }

    setTextElement(text,colour){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${colour}">${text}</text>`
    }

    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.s}${this.text}</svg>`
    }
}

module.exports = {Circle, Rectangle, Triangle, SVG};