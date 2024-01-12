# System requirement

* [nodejs >= 18](https://nodejs.org/en/)

You should run `nvm use` inside the folder to correctly setup used node version.

## Setup

After cloning the repository, from the project root directory, login to:

```sh
npm login --scope=@mia-platform-internal --registry=https://nexus.mia-platform.eu/repository/npm-internal/run
```

then run `yarn install` to install packages.

You can see the `npm` script inside the package.json file.

To start developing with the mock server reun `yarn dev`.

The `constants.js` file, downloaded from backend and runned on browser, should be es5 compliant to support the major browsers.

## Conventions

* At commit time, automatically run `npm test` command script. To skip this step, commit with `-n` flag.
* All changes **MUST** pass by merge request approvals.

## How to submit a PR

* Commits should follow standards: `<type>(<scope>): <subject> – feat(core): Add new feature`
* In the `Unreleased` section in CHANGELOG.md, compile the changelog adding the improvement added in the PR.
  Changelog should follow the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) standard.

## Adding a new workspace package

WIP
