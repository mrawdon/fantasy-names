#!/usr/bin/env node
var g = require("./generator")(...process.argv.slice(2));
console.log(g);