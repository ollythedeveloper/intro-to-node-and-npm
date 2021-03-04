const fs = require("fs");
const { animateString } = require('./animate-string'); //name import

const contents = fs.readdirSync("./animals");

animateString(contents.join('\n'));