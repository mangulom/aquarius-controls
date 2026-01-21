import { b as bootstrapLazy } from './index-BOZXnJaW.js';
export { s as setNonce } from './index-BOZXnJaW.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["general-button",[[513,"general-button",{"label":[1],"disabled":[4]}]]]], options);
};

export { defineCustomElements };
