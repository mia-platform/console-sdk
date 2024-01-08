# Typescript Monorepo Template

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fp-j%2Ftypescript-monorepo-template.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fp-j%2Ftypescript-monorepo-template?ref=badge_shield)

This template is intended for OSS (NPM published) Typescript based projects and is centered around a few tools:

- **npm** for dependency management and running other tools like `lerna` or `changeset`
- **lerna** for running package level commands (like `build` or `lint`)
- **changeset** for managing changelog generation, release creation and auto publication to NPM
- **codecov** for code coverage reporting
- **jest** to test your code
- **typescript** as the name would have suggested

It's a template that I tend to use for my own projects like

- [EAPI](https://github.com/p-j/eapi): a suite of middleware & utility to build scalable cloudflare workers backend/proxy
- [GeocodeJSON](https://github.com/p-j/geocodejson): a suite of adapter & utility for geocoding API that maps to [GeocodeJSON](https://github.com/geocoders/geocodejson-spec/tree/master/draft) resutls

## How to use this template

_AKA: "Note to self"_

- Get started by clicking [Use this template](https://github.com/p-j/typescript-monorepo-template/generate)
- Update the required files as [described below](https://github.com/p-j/typescript-monorepo-template#what-you-need-to-change)
- Browse the scripts to understand how `lerna` `changeset` and `npm` play together to `build` `test` and `publish` releases.
- [Setup integration](https://github.com/settings/installations) with [Changeset](https://github.com/atlassian/changesets)
- [Setup integration](https://github.com/settings/installations) with [CodeCov](https://github.com/codecov)
- Add the necessary `SECRETS` (`NPM_TOKEN` & `CODECOV_TOKEN`)

## What you need to change

- `package.json`: change project name, author etc...
- `LICENSE`: change the copyright holder
- `CODE_OF_CONDUCT.md`: change the contact address in the `Enforcement` paragraph
- `.github/workflows/release.yml`: change the guard to your repository name
- `.changeset/config.json`: change the repository name

## TODO



## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fp-j%2Ftypescript-monorepo-template.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fp-j%2Ftypescript-monorepo-template?ref=badge_large)
