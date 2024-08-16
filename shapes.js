class Shape {
    constructor() {
		this.text = "";
		this.textColor = "";
		this.shape;
		this.shapeColor;
		this.random;
	}

	setText(text) {
		this.text = text;
	}

	setTextColor(color) {
		this.textColor = color;
	}

	setShape(shape) {
		this.shape = shape;
	}

	setColor(color) {
		this.shapeColor = color;
	}

	render() {
		const svgs = {
			circle: `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"></circle><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`,
			triangle: `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"></polygon><text x="150" y="140" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`,
			square: `<rect width="160" height="160" x="70" y="20" fill="${this.shapeColor}"></rect><text x="150" y="120" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`,
		};

		return svgs[this.shape];
	}
}

class Circle extends Shape {
	constructor() {
		super();
		this.setShape("circle");
	}
}

class Triangle extends Shape {
	constructor() {
		super();
		this.setShape("triangle");
	}
}

class Square extends Shape {
	constructor() {
		super();
		this.setShape("square");
	}
}

module.exports = {Circle, Triangle, Square};