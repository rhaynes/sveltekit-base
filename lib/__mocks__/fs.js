import { Volume } from 'memfs';

import _fs from 'fs';
import path from 'path';

let vol = null;

const fs = {};

const fsp = _fs.promises;

// Extract all sync methods
Object.keys(_fs).forEach((method) => {
  if (~method.indexOf('Sync')) {
    fs[method] = function (...args) {
      return vol[method].call(vol, ...args);
    };
  }
});

// Extract all promises
Object.keys(fsp).forEach((method) => {
  fs[method] = function (...args) {
    return vol.promises[method].call(vol, ...args);
  };
});

fs.reset = function () {
  vol = Volume.fromJSON({
    '/mock/README.md': 'All tests should store files in the /mock folder.'
  });
};

fs.vol = function (json) {
  vol = Volume.fromJSON(json);
};

function createRecursive(parent, json) {
  Object.entries(json).forEach(([name, value]) => {
    if (typeof value == 'object' && !Buffer.isBuffer(value)) {
      try {
        fs.mkdirSync(path.join(parent, name));
      } catch (e) {
        // nothing
      }
      createRecursive(path.join(parent, name), value);
    } else {
      console.log(path.join(parent, name));
      fs.writeFileSync(path.join(parent, name), value);
    }
  });
}

fs.add = function (json) {
  createRecursive('/', json);
};

fs.reset();

export default fs;
