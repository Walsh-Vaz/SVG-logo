const {Circle, Rectangle, Triangle} = require("./makeShapes");

// trinagle 

describe ("triangle set", () => {
    test("makes sure it renders correctly", () => {
        const t = new Triangle;
        t.colourSetting("blue");
        expect(shape.rendering()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    } )
})

// Circle

describe ("Circle set", () => {
    test("makes sure it renders correctly", () => {
        const c = new Circle;
        c.colourSetting("blue");
        expect(shape.rendering()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"/>');
    } )
})

// rectangle

describe ("rectangle  set", () => {
    test("makes sure it renders correctly", () => {
        const r = new Rectangle;
        r.colourSetting("blue");
        expect(shape.rendering()).toEqual('<rect x="50" y="50" width="300" height="300" stroke="black" fill="blue" stroke-width="5"/>');
    })
})