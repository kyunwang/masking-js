'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// regex that checks if value contains digits only
var digitsOnly = /^\d+$/;

// function to mask digits into US phone format
function maskUSPhone(phone) {
  // returning null when getting null, undefined, or an object that is no string as a parameter
  if (!phone || typeof phone !== 'string') {
    return null;
  }

  // returning the untouched value when it contains non-digit chars
  // or when it has a length lower than 10 or greater than 11
  if (digitsOnly.test(phone) === false || phone.length < 10 || phone.length > 11) {
    return phone;
  }

  // returning the masked value
  var codeArea = phone.substring(0, 3);
  var prefix = phone.substring(3, 6);
  var sufix = phone.substring(6, phone.length);
  return '(' + codeArea + ') ' + prefix + '-' + sufix;
}

exports.default = maskUSPhone;