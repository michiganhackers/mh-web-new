# Michigan Hackers Website

### [michhackers.com](https://www.michhackers.com)

Welcome to the Michigan Hackers website! This site requires that you install the latest stable version of Node.

## Development

### Setup

First, install [Yarn](https://yarnpkg.com/lang/en/docs/install) (`npm` is a dependency of `yarn`, so install `npm` first if necessary). Clone down this repository to a location of your choice, and run `yarn`.

If you have access to the `.env` file, then run `npm run get-leadership` to populate leadership data.

If you do not have access to the `.env` file, rename `sample-leadership.json` in `src/` to `leadership.json`. This will not display images, but it will display all relevant data, which is enough for most cases.

Then run `yarn start` and get going!

### Tests

To run tests, run `yarn test`.

### Linting

To lint (i.e. check for style, etc.), run `yarn lint`.
To lint and automatically repair some issues, run `yarn lint-fix`.

### Building

To run tests and create a build (i.e. for the purpose of deployment), run `yarn build`.

### Deployment

Talk to a Web Team lead and ask them to deploy your changes.
