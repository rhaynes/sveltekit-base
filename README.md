# svelte-starter

Base starter customizations for sveltekit

## Developing

Run `npm run dev`

## Main customizations

### `lib` directory

- env - Allows importing environment variables from a .gitignored .env.yaml file in the root of the repo
- Shell - command line execution utilities (be very careful using this in anything other than command line scripts... there is some protection against shell injection but only if arguments are passed properly)
- fs - Improved fs module (includes promises out of the box) and corresponding mock for unit testing
- http - Wrapper around native fetch
- parallel - Easier parallel processing for loops that need await
- json-args - Parsing for expects syntax (see below)

### `src` directory

- hooks.server.js - Adds `expects` functionality to api requests

### `scripts` directory

- run.js - From the root of the repo `node run nameOfScript` where `nameOfScript.js` exists in the `scripts` directory will execute a command line script in the sveltekit context (important so that the `lib` and `$app` directories are available)

## Easiest way to get started:

1. Create a new repo on github
2. `NEW_REPO=new_repo_name`
3. `cp -r svelte-starter $NEW_REPO`
4. `cd $NEW_REPO`
5. `rm -rf .git`
6. `git clone repo_address` Note: this should happen inside the new repo directory
7. `mv $NEW_REPO/.git .` to make the parent folder the root of the git repo
8. `mv $NEW_REPO/README.md .`
9. `mv $NEW_REPO/LICENSE .`
10. `rm -rf $NEW_REPO` to remove the empty cloned repo
11. Double check the LICENSE and the license field in package.json to make sure it has the appropriate license.
