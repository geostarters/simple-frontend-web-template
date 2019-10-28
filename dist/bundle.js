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
    "@babel/core": "^7.6.4",
    "@babel/preset-env": "^7.6.3",
    "babelify": "^10.0.0",
    "browserify": "^16.5.0",
    "npm-run-all": "^4.1.5",
    "st": "^1.2.2",
    "watchify": "^3.11.1"
  },
  "files": [
    "dist/",
    "src/",
    "server/"
  ],
  "scripts": {
    "build-dev": "browserify src/index.js -t babelify --standalone simple-frontend-web-template > dist/bundle.js",
    "watch-dev": "watchify src/index.js -t babelify  --standalone simple-frontend-web-template --outfile dist/bundle-dev.js --verbose",
    "build-min": "browserify src/index.js -t babelify --debug --plugin [minifyify --map bundle.js.map --output dist/bundle.js.map] --standalone simple-frontend-web-template | derequire > dist/bundle.js",
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LatLon =
/*#__PURE__*/
function () {
  function LatLon(lat, lon) {
    _classCallCheck(this, LatLon);

    var areNumbers = !(isNaN(lat) || isNaN(lon));

    if (areNumbers) {
      this.lat = +lat;
      this.lon = +lon;
      var validRange = this.lat > -90 && this.lat < 90 && this.lon > -180 && this.lon < 180;

      if (!validRange) {
        throw new Error("Invalid LatLon value: Latitude must be between -90 and 90 and Longitude must be between -180 and 180");
      }
    } else {
      throw new Error("Invalid LatLon object: (".concat(lat, ", ").concat(lon, ")"));
    }
  }
  /**
   * Set the latitude
   *
   * @param {number} lat
   * @returns {LatLon} `this`
   */


  _createClass(LatLon, [{
    key: "setLatitude",
    value: function setLatitude(lat) {
      this.lat = lat;
      return this;
    }
    /**
     * Set the longitude
     *
     * @param {number} lon
     * @returns {LatLon} `this`
     */

  }, {
    key: "setLongitude",
    value: function setLongitude(lon) {
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

  }, {
    key: "toString",
    value: function toString() {
      return "LatLon(".concat(this.lat, ", ").concat(this.lon, ")");
    }
  }]);

  return LatLon;
}();

module.exports = LatLon;

},{}],3:[function(require,module,exports){
// @flow
"use strict";

var version = require("../package.json").version;

var LatLon = require("./geo/latlon");

console.info(version);
console.info(new LatLon(41, 2));
window.document.write("<b>Hola món</b>");
module.exports = {
  version: version,
  LatLon: LatLon
};

},{"../package.json":1,"./geo/latlon":2}]},{},[3])(3)
});
