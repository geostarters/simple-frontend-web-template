// @flow
"use strict";

const version = require("../package.json").version;
const LatLon = require("./geo/latlon");


console.info(version);
console.info(new LatLon(41, 2));

window.document.write("<b>Hola món</b>");


module.exports = {
	version,
	LatLon
};

