(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.simpleFrontendWebTemplate = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "name": "simple-frontend-web-template",
  "version": "1.0.0",
  "description": "Simple template web page",
  "main": "dist/index.js",
  "repository": {
    "type": "git",
    "url": "git://github.com/geostarters/simple-frontend-web-template.git"
  },
  "keywords": [
    "browserify",
    "web",
    "template"
  ],
  "author": "geostarters",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/geostarters/simple-frontend-web-template/issues"
  },
  "homepage": "https://github.com/geostarters/simple-frontend-web-template#readme",
  "devDependencies": {
    "browserify": "^16.5.0",
    "watchify": "^3.11.1",
    "st": "^1.2.2",
    "npm-run-all": "^4.1.5"
  },
  "files": [
    "dist/",
    "src/",
    "server/"
  ],
  "scripts": {
    "build-dev": "browserify src/index.js --debug --ignore-transform unassertify --standalone simple-frontend-web-template > dist/bundle.js",
    "watch-dev": "watchify src/index.js --debug --ignore-transform unassertify --standalone simple-frontend-web-template --outfile dist/bundle-dev.js --verbose",
    "build-min": "browserify src/index.js --debug --plugin [minifyify --map bundle.js.map --output dist/bundle.js.map] --standalone simple-frontend-web-template | derequire > dist/bundle.js",
    "start-server": "st --no-cache -H 127.0.0.1 --port 9966 --index index.html .",
    "start": "run-p watch-dev build-dev start-server open",
    "open": "node server/dev-server.js"
  },
  "dependencies": {
    "@geostarters/eslint-config": "0.0.3",
    "opn": "^6.0.0"
  }
}

},{}],2:[function(require,module,exports){
// @flow
"use strict";

/**
 * A `LatLon` object represents a given latitude and longitude coordinates.
 *
 * @param {number} lat Latitude, measured in degrees.
 * @param {number} lon Longitude, measured in degrees.
 * @example
 * var ll = new LatLon(42.10376, 1.84584);
 */
class LatLon {


	constructor(lat, lon) {

		const areNumbers = !(isNaN(lat) || isNaN(lon));
		if (areNumbers) {

			this.lat = +lat;
			this.lon = +lon;

			const validRange = this.lat > -90 && this.lat < 90 &&
				this.lon > -180 && this.lon < 180;

			if (!validRange) {

				throw new Error("Invalid LatLon value: Latitude must be between -90 and 90 and Longitude must be between -180 and 180");

			}

		} else {

			throw new Error(`Invalid LatLon object: (${lat}, ${lon})`);

		}

	}

	/**
	 * Set the latitude
	 *
	 * @param {number} lat
	 * @returns {LatLon} `this`
	 */
	setLatitude(lat) {

		this.lat = lat;
		return this;

	}

	/**
	 * Set the longitude
	 *
	 * @param {number} lon
	 * @returns {LatLon} `this`
	 */
	setLongitude(lon) {

		this.lon = lon;
		return this;

	}

	/**
	 * Returns the LatLon object as a string.
	 *
	 * @returns {string} The coordinates as a string in the format `'LatLon(lat, lng)'`.
	 * @example
	 * var ll = new LatLon(42.10376, 1.84584);
	 * ll.toString(); //"LatLon(42.10376, 1.84584)"
	 */
	toString() {

		return `LatLon(${this.lat}, ${this.lon})`;

	}

}

module.exports = LatLon;

},{}],3:[function(require,module,exports){
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


},{"../package.json":1,"./geo/latlon":2}]},{},[3])(3)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlLmpzb24iLCJzcmMvZ2VvL2xhdGxvbi5qcyIsInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwibmFtZVwiOiBcInNpbXBsZS1mcm9udGVuZC13ZWItdGVtcGxhdGVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNpbXBsZSB0ZW1wbGF0ZSB3ZWIgcGFnZVwiLFxuICBcIm1haW5cIjogXCJkaXN0L2luZGV4LmpzXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQ6Ly9naXRodWIuY29tL2dlb3N0YXJ0ZXJzL3NpbXBsZS1mcm9udGVuZC13ZWItdGVtcGxhdGUuZ2l0XCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJicm93c2VyaWZ5XCIsXG4gICAgXCJ3ZWJcIixcbiAgICBcInRlbXBsYXRlXCJcbiAgXSxcbiAgXCJhdXRob3JcIjogXCJnZW9zdGFydGVyc1wiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9nZW9zdGFydGVycy9zaW1wbGUtZnJvbnRlbmQtd2ViLXRlbXBsYXRlL2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ2Vvc3RhcnRlcnMvc2ltcGxlLWZyb250ZW5kLXdlYi10ZW1wbGF0ZSNyZWFkbWVcIixcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYnJvd3NlcmlmeVwiOiBcIl4xNi41LjBcIixcbiAgICBcIndhdGNoaWZ5XCI6IFwiXjMuMTEuMVwiLFxuICAgIFwic3RcIjogXCJeMS4yLjJcIixcbiAgICBcIm5wbS1ydW4tYWxsXCI6IFwiXjQuMS41XCJcbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJkaXN0L1wiLFxuICAgIFwic3JjL1wiLFxuICAgIFwic2VydmVyL1wiXG4gIF0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZC1kZXZcIjogXCJicm93c2VyaWZ5IHNyYy9pbmRleC5qcyAtLWRlYnVnIC0taWdub3JlLXRyYW5zZm9ybSB1bmFzc2VydGlmeSAtLXN0YW5kYWxvbmUgc2ltcGxlLWZyb250ZW5kLXdlYi10ZW1wbGF0ZSA+IGRpc3QvYnVuZGxlLmpzXCIsXG4gICAgXCJ3YXRjaC1kZXZcIjogXCJ3YXRjaGlmeSBzcmMvaW5kZXguanMgLS1kZWJ1ZyAtLWlnbm9yZS10cmFuc2Zvcm0gdW5hc3NlcnRpZnkgLS1zdGFuZGFsb25lIHNpbXBsZS1mcm9udGVuZC13ZWItdGVtcGxhdGUgLS1vdXRmaWxlIGRpc3QvYnVuZGxlLWRldi5qcyAtLXZlcmJvc2VcIixcbiAgICBcImJ1aWxkLW1pblwiOiBcImJyb3dzZXJpZnkgc3JjL2luZGV4LmpzIC0tZGVidWcgLS1wbHVnaW4gW21pbmlmeWlmeSAtLW1hcCBidW5kbGUuanMubWFwIC0tb3V0cHV0IGRpc3QvYnVuZGxlLmpzLm1hcF0gLS1zdGFuZGFsb25lIHNpbXBsZS1mcm9udGVuZC13ZWItdGVtcGxhdGUgfCBkZXJlcXVpcmUgPiBkaXN0L2J1bmRsZS5qc1wiLFxuICAgIFwic3RhcnQtc2VydmVyXCI6IFwic3QgLS1uby1jYWNoZSAtSCAxMjcuMC4wLjEgLS1wb3J0IDk5NjYgLS1pbmRleCBpbmRleC5odG1sIC5cIixcbiAgICBcInN0YXJ0XCI6IFwicnVuLXAgd2F0Y2gtZGV2IGJ1aWxkLWRldiBzdGFydC1zZXJ2ZXIgb3BlblwiLFxuICAgIFwib3BlblwiOiBcIm5vZGUgc2VydmVyL2Rldi1zZXJ2ZXIuanNcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAZ2Vvc3RhcnRlcnMvZXNsaW50LWNvbmZpZ1wiOiBcIjAuMC4zXCIsXG4gICAgXCJvcG5cIjogXCJeNi4wLjBcIlxuICB9XG59XG4iLCIvLyBAZmxvd1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGBMYXRMb25gIG9iamVjdCByZXByZXNlbnRzIGEgZ2l2ZW4gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBjb29yZGluYXRlcy5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGxhdCBMYXRpdHVkZSwgbWVhc3VyZWQgaW4gZGVncmVlcy5cclxuICogQHBhcmFtIHtudW1iZXJ9IGxvbiBMb25naXR1ZGUsIG1lYXN1cmVkIGluIGRlZ3JlZXMuXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciBsbCA9IG5ldyBMYXRMb24oNDIuMTAzNzYsIDEuODQ1ODQpO1xyXG4gKi9cclxuY2xhc3MgTGF0TG9uIHtcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKGxhdCwgbG9uKSB7XHJcblxyXG5cdFx0Y29uc3QgYXJlTnVtYmVycyA9ICEoaXNOYU4obGF0KSB8fCBpc05hTihsb24pKTtcclxuXHRcdGlmIChhcmVOdW1iZXJzKSB7XHJcblxyXG5cdFx0XHR0aGlzLmxhdCA9ICtsYXQ7XHJcblx0XHRcdHRoaXMubG9uID0gK2xvbjtcclxuXHJcblx0XHRcdGNvbnN0IHZhbGlkUmFuZ2UgPSB0aGlzLmxhdCA+IC05MCAmJiB0aGlzLmxhdCA8IDkwICYmXHJcblx0XHRcdFx0dGhpcy5sb24gPiAtMTgwICYmIHRoaXMubG9uIDwgMTgwO1xyXG5cclxuXHRcdFx0aWYgKCF2YWxpZFJhbmdlKSB7XHJcblxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgTGF0TG9uIHZhbHVlOiBMYXRpdHVkZSBtdXN0IGJlIGJldHdlZW4gLTkwIGFuZCA5MCBhbmQgTG9uZ2l0dWRlIG11c3QgYmUgYmV0d2VlbiAtMTgwIGFuZCAxODBcIik7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBMYXRMb24gb2JqZWN0OiAoJHtsYXR9LCAke2xvbn0pYCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCB0aGUgbGF0aXR1ZGVcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBsYXRcclxuXHQgKiBAcmV0dXJucyB7TGF0TG9ufSBgdGhpc2BcclxuXHQgKi9cclxuXHRzZXRMYXRpdHVkZShsYXQpIHtcclxuXHJcblx0XHR0aGlzLmxhdCA9IGxhdDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCB0aGUgbG9uZ2l0dWRlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gbG9uXHJcblx0ICogQHJldHVybnMge0xhdExvbn0gYHRoaXNgXHJcblx0ICovXHJcblx0c2V0TG9uZ2l0dWRlKGxvbikge1xyXG5cclxuXHRcdHRoaXMubG9uID0gbG9uO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgTGF0TG9uIG9iamVjdCBhcyBhIHN0cmluZy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb29yZGluYXRlcyBhcyBhIHN0cmluZyBpbiB0aGUgZm9ybWF0IGAnTGF0TG9uKGxhdCwgbG5nKSdgLlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogdmFyIGxsID0gbmV3IExhdExvbig0Mi4xMDM3NiwgMS44NDU4NCk7XHJcblx0ICogbGwudG9TdHJpbmcoKTsgLy9cIkxhdExvbig0Mi4xMDM3NiwgMS44NDU4NClcIlxyXG5cdCAqL1xyXG5cdHRvU3RyaW5nKCkge1xyXG5cclxuXHRcdHJldHVybiBgTGF0TG9uKCR7dGhpcy5sYXR9LCAke3RoaXMubG9ufSlgO1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExhdExvbjtcclxuIiwiLy8gQGZsb3dcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCB2ZXJzaW9uID0gcmVxdWlyZShcIi4uL3BhY2thZ2UuanNvblwiKS52ZXJzaW9uO1xyXG5jb25zdCBMYXRMb24gPSByZXF1aXJlKFwiLi9nZW8vbGF0bG9uXCIpO1xyXG5cclxuXHJcbmNvbnNvbGUuaW5mbyh2ZXJzaW9uKTtcclxuY29uc29sZS5pbmZvKG5ldyBMYXRMb24oNDEsIDIpKTtcclxuXHJcbndpbmRvdy5kb2N1bWVudC53cml0ZShcIjxiPkhvbGEgbcOzbjwvYj5cIik7XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0dmVyc2lvbixcclxuXHRMYXRMb25cclxufTtcclxuXHJcbiJdfQ==
