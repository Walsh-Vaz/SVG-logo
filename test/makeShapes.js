class Circle {

    constructor() {
        this.colour = "";
    }

    colourSetting(colour) {
        this.colour = colour;
    }

    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`;
    }

}

class Rectangle {

    constructor() {
        this.colour = "";
    }

    colourSetting(colour) {
        this.colour = colour;
    }

    render(){
        return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.colour}" stroke-width="5"/>`;
    }

}

class Triangle {
   
    constructor() {
        this.colour = "";
    }

    colourSetting(colour) {
        this.colour = colour;
    }

    render(){
        return `<polygon points="0,200 300,200 150,0" fill="${this.colour}">`;
    }

}

class SVG {
    constructor() {
        this.text = "";
        this.s = "";
        //this.colour = "";
    }

    makeShape(shape){
        this.s = shape;
    }
    setTextElement(text,color){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }

    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.s}${this.text}</svg>`
    }
}

module.exports = {Circle, Rectangle, Triangle, SVG};