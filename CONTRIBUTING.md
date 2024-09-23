# System requirement

* [nodejs >= 18](https://nodejs.org/en/)

You should run `nvm use` inside the folder to correctly setup used node version.

## Setup

After cloning the repository, run `pnpm install` to install packages.

## Conventions

* All changes **MUST** pass by merge request approvals.

## How to submit a PR

* Commits should follow standards: `<type>(<scope>): <subject> – feat(core): Add new feature`
* Please remember to use `pnpm changeset` to update the `CHANGELOG.md` file with a summary of your PR changes.

## How to create a new tag

To create a tag, the way to go is using the `changeset` package; useful commands for such purpose are:

```sh
# run the interactive cli and select packages to update
$ pnpm changeset 
# bump version changes in local files
$ pnpm changeset version
# run install command to update local dependencies between monorepo packages
$ pnpm install
# commit changes
$ git commit -anm "version bump"
# create version tags
$ pnpm changeset tag
```

## Adding a new workspace package

WIP
