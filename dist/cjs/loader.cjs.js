'use strict';

var index = require('./index-BhkWo07D.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["card-general.cjs",[[769,"card-general",{"width":[1],"height":[1]}]]],["donut-radio.cjs",[[513,"donut-radio",{"name":[1],"label":[1],"color":[1],"checked":[32]}]]],["general-button.cjs",[[513,"general-button",{"label":[1],"disabled":[4],"icon":[1],"color":[1]}]]],["hold-expand-button.cjs",[[513,"hold-expand-button",{"label":[1],"icon":[1],"disabled":[4],"color":[1],"holdTime":[2,"hold-time"],"expanded":[32]}]]],["navbar-footer.cjs",[[512,"navbar-footer",{"items":[16],"openIndex":[32]}]]],["navbar-horizontal.cjs",[[513,"navbar-horizontal",{"items":[16],"openIndex":[32]}]]],["table-general.cjs",[[513,"table-general",{"columns":[1],"data":[1],"sortedData":[32],"sortKey":[32],"sortAsc":[32]},null,{"data":[{"watchProps":0}],"columns":[{"watchProps":0}]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
