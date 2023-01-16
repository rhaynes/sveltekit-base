async function get(url, args, options = {}) {
  const res = await fetch(url, { body: JSON.stringify(args), ...options });
  return await res.json();
}

async function post(url, args, options = {}) {
  const res = await fetch(url, { method: 'POST', body: JSON.stringify(args), ...options });
  const json = await res.json();
  if (res.status != 200) throw new Error(json.message);
  return json;
}

export { get, post };
