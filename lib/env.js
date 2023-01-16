import * as yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import { browser } from '$app/environment.js';

const doc = {};

if (!browser) {
  const __filename = import.meta.url.slice('file://'.length);
  const __dirname = path.dirname(__filename);

  const conf = yaml.load(fs.readFileSync(path.join(__dirname, '../.env.yaml'), 'utf8'));
  Object.keys(conf).forEach((key) => {
    doc[key] = conf[key];
  });
}

export default doc;
