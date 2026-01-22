'use strict';

var index = require('./index-B9_JA_X3.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["general-button.cjs",[[512,"general-button",{"label":[1],"disabled":[4],"icon":[1],"color":[1]}]]],["hold-expand-button.cjs",[[512,"hold-expand-button",{"label":[1],"icon":[1],"disabled":[4],"color":[1],"holdTime":[2,"hold-time"],"expanded":[32]}]]],["navbar-footer.cjs",[[512,"navbar-footer",{"items":[16],"openIndex":[32]}]]],["navbar-horizontal.cjs",[[512,"navbar-horizontal",{"items":[16],"openIndex":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
