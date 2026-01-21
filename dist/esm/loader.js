import { b as bootstrapLazy } from './index-DOy5Qy8K.js';
export { s as setNonce } from './index-DOy5Qy8K.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["general-button",[[512,"general-button",{"label":[1],"disabled":[4],"icon":[1]}]]]], options);
};

export { defineCustomElements };
