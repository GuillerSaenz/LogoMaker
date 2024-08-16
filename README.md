# SVG Logo Maker

## Description

The SVG Logo Maker is a Node.js command-line application that generates a simple logo and saves it as an SVG file. The application prompts the user to select a shape and color, provide text for the logo, and then generates an SVG file based on the user input. This tool is perfect for freelance web developers who need a quick and easy way to create logos without hiring a graphic designer.

## Table of Contents

-   [Description](#description)
-   [Functionality](#functionality)
-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)
-   [Contributing](#contributing)
-   [Tests](#tests)
-   [Questions](#questions)

## Functionality

This section contains a link to a video that demonstrates the functionality of the SVG Logo Maker application. The video showcases how to use the app, including the prompts, the generation of the SVG file, and opening the file in a browser.

[Watch the walkthrough video here](https://drive.google.com/file/d/1rv_wyjP2ov461cnLVh2qSJm15zns0CdC/view)

## Installation

To install and set up the SVG Logo Maker, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/GuillerSaenz/svg-logo-maker.git
    ```

2. Navigate to the project directory:

    ```bash
    cd svg-logo-maker
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

## Usage

To generate a logo, run the following command in your terminal:

```bash
node index.js
```

You will be prompted to enter the text for the logo (up to three characters), the text color (color keyword or hexadecimal), the shape of the logo (circle, triangle, or square), and the shape color (color keyword or hexadecimal). After providing all the necessary information, an `logo.svg` file will be generated and saved in the current directory. The output "Generated logo.svg" will be printed in the command line.

## License

This project is licensed under the [MIT License](LICENSE). The license badge is included at the top of the generated README file.

## Tests

To run tests for the application, use the following command:

```bash
npm test
```

Ensure that all tests pass before submitting a pull request. The application includes Jest tests for the `Triangle`, `Circle`, and `Square` classes to verify that the `render()` method returns the correct SVG string.

## Questions

If you have any questions about the project or need further assistance, feel free to reach out:

-   GitHub: [GuillerSaenz](https://github.com/GuillerSaenz)
-   Email: guillersaenzs@gmail.com