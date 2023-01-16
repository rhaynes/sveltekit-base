import env from 'lib/env.js';
import { browser } from '$app/environment.js';

export async function main() {
  // This is an example of a command line script
  // To test this script, add `someEnvVariable: 123` to `.env.yaml` in the root
  // of the repo and then run `node run exampleScript` from the root of the repo
  console.log(env.someEnvVariable);
  console.log(browser);
}
