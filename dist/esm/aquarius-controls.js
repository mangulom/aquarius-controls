import { p as promiseResolve, b as bootstrapLazy } from './index-BOZXnJaW.js';
export { s as setNonce } from './index-BOZXnJaW.js';
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
  return bootstrapLazy([["general-button",[[513,"general-button",{"label":[1],"disabled":[4]}]]]], options);
});
