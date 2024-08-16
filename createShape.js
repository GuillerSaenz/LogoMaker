const {Circle, Triangle, Square} = require("./shapes");

function createShape(data){
    if (data.shape === "Circle") {
		const circle = new Circle();
		circle.setColor(data.shapeColor);
		circle.setText(data.text);
		circle.setTextColor(data.textColor);

		return circle.render();
	}

	if (data.shape === "Triangle") {
		const triangle = new Triangle();
		triangle.setColor(data.shapeColor);
		triangle.setText(data.text);
		triangle.setTextColor(data.textColor);

		return triangle.render();
	}

	if (data.shape === "Square") {
		const square = new Square();
		square.setColor(data.shapeColor);
		square.setText(data.text);
		square.setTextColor(data.textColor);

		return square.render();
	}
}

module.exports = createShape;