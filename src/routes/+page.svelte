<script>
  import { post } from 'lib/http.js';

  async function onPost() {
    const res = await post('/examplePost', { filepath: '/somePath', int: 5 });
    console.log(res);
  }
</script>

<main>
  <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <!-- Page header -->
    <div class="mb-5">
      <!-- Title -->
      <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Welcome to SvelteKit</h1>
      <p>
        Visit <a class="text-blue-500" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
      </p>
      <p class="mt-2">
        <button class="btn btn-blue" on:click={onPost}>Example Post</button>
      </p>
    </div>
  </div>
</main>

<style>
  .btn {
    @apply py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>
