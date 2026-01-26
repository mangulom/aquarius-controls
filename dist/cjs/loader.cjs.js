'use strict';

var index = require('./index-eni-syiK.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["donut-radio.cjs",[[513,"donut-radio",{"name":[1],"label":[1],"color":[1],"checked":[32]}]]],["general-button.cjs",[[512,"general-button",{"label":[1],"disabled":[4],"icon":[1],"color":[1]}]]],["hold-expand-button.cjs",[[512,"hold-expand-button",{"label":[1],"icon":[1],"disabled":[4],"color":[1],"holdTime":[2,"hold-time"],"expanded":[32]}]]],["navbar-footer.cjs",[[512,"navbar-footer",{"items":[16],"openIndex":[32]}]]],["navbar-horizontal.cjs",[[512,"navbar-horizontal",{"items":[16],"openIndex":[32]}]]],["table-general.cjs",[[512,"table-general",{"data":[16],"columns":[16],"sortKey":[32],"sortAsc":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
