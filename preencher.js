// let jsonFile = require('./src/dados.json');
var fs = require("fs");
var jsonData = fs.readFileSync("./src/dados.json", "utf8");
console.log(jsonData);

