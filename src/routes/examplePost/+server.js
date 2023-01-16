import { json } from '@sveltejs/kit';

export const _expects = {
  filepath: { type: 'string', format: 'path' },
  int: { type: 'integer' }
};

export async function POST({ args }) {
  console.log(args);
  return json({});
}
