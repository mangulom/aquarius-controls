import { p as promiseResolve, b as bootstrapLazy } from './index-CZ9uDaiH.js';
export { s as setNonce } from './index-CZ9uDaiH.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.41.2 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["general-button",[[512,"general-button",{"label":[1],"disabled":[4],"icon":[1]}]]],["navbar-horizontal",[[512,"navbar-horizontal",{"items":[16],"openIndex":[32]}]]]], options);
});
