'use strict';

var index = require('./index-DFncYVIQ.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.41.2 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('aquarius-controls.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["card-general.cjs",[[772,"card-general",{"width":[1],"height":[1]}]]],["donut-radio.cjs",[[513,"donut-radio",{"name":[1],"label":[1],"color":[1],"checked":[32]}]]],["general-button.cjs",[[512,"general-button",{"label":[1],"disabled":[4],"icon":[1],"color":[1]}]]],["hold-expand-button.cjs",[[512,"hold-expand-button",{"label":[1],"icon":[1],"disabled":[4],"color":[1],"holdTime":[2,"hold-time"],"expanded":[32]}]]],["navbar-footer.cjs",[[512,"navbar-footer",{"items":[16],"openIndex":[32]}]]],["navbar-horizontal.cjs",[[512,"navbar-horizontal",{"items":[16],"openIndex":[32]}]]],["table-general.cjs",[[512,"table-general",{"columns":[1],"data":[1],"sortedData":[32],"sortKey":[32],"sortAsc":[32]},null,{"data":[{"watchProps":0}],"columns":[{"watchProps":0}]}]]]], options);
});

exports.setNonce = index.setNonce;
