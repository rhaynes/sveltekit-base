import pLimit from 'p-limit';

/**
 *
 * @param list - Any array of items to be passed as the first argument to action
 * @param action - Action to take in parallel
 * @param options - Modify concurrency
 * @param options.limit - Maximum number of promises to execute at any one time
 */
async function run(list, action, options = {}) {
  const limit = pLimit(options.limit || 10);
  const promises = list.map((item) => {
    return limit(async () => {
      await action(item);
    });
  });

  await Promise.all(promises);
}

export default { run };
