class Circle {
    colourSetting(colour) {
        this.colour = colour;
    }

    render(){
        return `<circle cx = "50%" cy = "50%" r = "100" height = "100%" width = "100%" fill = "${this.colour}">`
    }

}

class Rectangle {
    colourSetting(colour) {
        this.colour = colour;
    }

    render(){
        return `<rect x = "50" y = "50"  height = "100" width = "100" fill = "${this.colour}">`
    }

}

class Triangle {
    colourSetting(colour) {
        this.colour = colour;
    }

    render(){
        return `<polygon points = "0,200 300,200 150,0" fill = "${this.colour}">`
    }

}

module.exports = {Circle, Rectangle, Triangle};