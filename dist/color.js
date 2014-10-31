/*
 * color - v1.0.0
 * @danielrohers
*/
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.color = factory(root);
  }
})(this, function (root) {

  'use strict';

  var exports = {};

  var _increaseBrightness = function (hexadecimal, percent) {
    hexadecimal = hexadecimal.replace(/^\s*#|\s*$/g, '');

    if(hexadecimal.length == 3){
      hexadecimal = hexadecimal.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hexadecimal.substr(0, 2), 16),
        g = parseInt(hexadecimal.substr(2, 2), 16),
        b = parseInt(hexadecimal.substr(4, 2), 16);

    return ('#' +
      ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
      ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
      ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1)).toUpperCase();
  };

  var _convertRgbToHex = function (color) {
    var r = parseInt(color[0], 10).toString(16);
    var g = parseInt(color[1], 10).toString(16);
    var b = parseInt(color[2], 10).toString(16);

    r = r.length === 1 ? '0' + r : r;
    g = g.length === 1 ? '0' + g : g;
    b = b.length === 1 ? '0' + b : b;

    return ('#' + r + g + b).toUpperCase();
  };

  var _rgbToHex = function (color) {
    if(color.indexOf('rgb') === 0) {
      return _convertRgbToHex(color.replace('rgb(','').replace(')','').split(','));
    } if (Object.prototype.toString.call(color) === '[object Array]') {
      return _convertRgbToHex(color);
    }
  }

  exports['increaseBrightness'] = _increaseBrightness;

  exports['rgbToHex'] = _rgbToHex;

  return exports;

});
