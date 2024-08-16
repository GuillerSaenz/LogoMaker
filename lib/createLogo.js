const inquirer = require("inquirer");
const fs = require("fs");

const isHexColor = require("./isHexColor");
const {colors} = require("./colorNames");
const createShape = require("./createShape");
const wrapInSvg = require("./wrapIsSvg");


const questions = [
	{
		type: "input",
		name: "text",
		message: "Logo text (three characters or less):",
		validate(answer) {
			if (answer.length > 3) {
				return "Text should be three characters or less. Please, try again.";
			}
			return true;
		}
	},
    {
        type: "input",
        name: "textColor",
        message: "Text color (name of the color or hex): ",
        filter(answer){
            return answer.toLowerCase();
        },
        validate(answer) {
            const trimmedAnswer = answer.toLowerCase().trim();
            if (!colors.includes(trimmedAnswer) && !isHexColor(trimmedAnswer)){
                return "Must be a color name or hex. Please, try again."
            }
            return true;
        }
    },
    {
        type: "list",
        name: "shape",
        message: "Logo shape: ",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Shape color (name of the color or hex): ",
        filter(answer){
            return answer.toLowerCase();
        },
        validate(answer) {
            if (!colors.includes(answer) && !isHexColor(answer)){
                return "Must be a color name or hex. Please, try again."
            }
            return true;
        }
    }
]

function createLogo(){
    inquirer
        .prompt(questions)
        .then((answers) => {
            const shape = createShape(answers);
            const svg = wrapInSvg(shape);

            fs.writeFile("examples/logo.svg", svg, (err) => {
                if (err) {
                    console.error(`Error writing file: ${err}`);
                } else {
                    console.log(`Generated logo.svg`);
                }
            });
        })
}

module.exports = {createLogo};
