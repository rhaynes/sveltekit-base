/* eslint-disable no-param-reassign */
import { validate } from 'lib/utils/json-args.js';
import path from 'path';

const modules = import.meta.glob('./routes/**/!(*.test).js');

export async function handle({ event, resolve }) {
  if (event.route.id) {
    // Resolve module
    let module;
    module = modules[`./routes${event.route.id}/+server.js`];
    if (!module) module = modules[`./routes${event.route.id}/+page.server.js`];
    if (module) {
      const m = await module();
      const { _expects } = m;
      if (_expects) {
        if (event.request.method == 'GET') {
          event.args = validate(_expects, extractQueryArgs(event.request.url));
        } else {
          event.args = validate(_expects, await event.request.json());
        }
      }
    }
  }

  const response = await resolve(event);
  return response;
}

function extractQueryArgs(url) {
  const urlParts = url.split('?')[1];
  if (urlParts) {
    const queryParams = urlParts.split('&');
    const queryArgs = {};
    queryParams.forEach((param) => {
      const parts = param.split('=');
      // eslint-disable-next-line prefer-destructuring
      queryArgs[parts[0]] = parts[1];
    });
    return queryArgs;
  }

  return {};
}
