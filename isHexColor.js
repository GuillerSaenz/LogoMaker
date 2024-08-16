
function isHexColor(hex) {
    if (typeof hex !== "string") {
		return false;
	}

	if (!hex.startsWith("#")) {
		return false;
	}

	if (hex.split("#")[1].length !== 3 && hex.split("#")[1].length !== 6) {
		return false;
	}

	const validCharacters = "abcdef0123456789ABCDEF";
	return hex
		.split("#")[1]
		.split("")
		.every((char) => validCharacters.includes(char));
}

module.exports = isHexColor;