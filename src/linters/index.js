const Black = require("./black");
const ESLint = require("./eslint");
const Flake8 = require("./flake8");
const Gofmt = require("./gofmt");
const Prettier = require("./prettier");
const Stylelint = require("./stylelint");
const SwiftLint = require("./swiftlint");

const linters = {
	black: Black,
	eslint: ESLint,
	flake8: Flake8,
	gofmt: Gofmt,
	prettier: Prettier,
	stylelint: Stylelint,
	swiftlint: SwiftLint,
};

module.exports = linters;