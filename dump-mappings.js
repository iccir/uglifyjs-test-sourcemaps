"use strict";

const fs = require("fs");
const SourceMapConsumer = require("source-map").SourceMapConsumer;

let file = process.argv[2];
let contents = fs.readFileSync(file).toString();

let consumer = new SourceMapConsumer(contents);

console.log("\n\n\n" + file + "\n------------------------------------")

consumer.eachMapping(m => {
    console.log(`${m.source} ${m.generatedLine}:${m.generatedColumn} => ${m.originalLine}:${m.originalColumn}`);
})
