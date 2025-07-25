<div align="center">

<a href=https://www.mia-platform.eu/>
<img alt="logo" src="https://raw.githubusercontent.com/mia-platform/.github/master/profile/img/mia-platform_logo_color.png" height="200">
</a>

# Console SDK

[![NPM publish CI][action-status-svg]][github-action]
[![javascript style guide][standard-mia-svg]][standard-mia]  
[![Coverage Status][coverall-svg]][coverall-io]

</div>


This repository is used to configure your microfrontend, as Mia platform Console extensions, easily
See the specific monorepo readme to using this library

## Monorepo packages

- **Console SDK**: An abstract interface used within helper repositories. [Read more](./packages/console-sdk-microfrontend)
- **Vite helpers**: Used to configure the microfrontend with vite. [Read more](./packages/console-sdk-vite-helpers)
- **Webpack helpers**: Used to configure the microfrontend with webpack. [Read more](./packages/console-sdk-webpack-helpers)

## Install

To use this repository 

```bash
npm install @mia-platform/console-sdk-microfrontend
npm install @mia-platform/console-sdk-vite-helpers
npm install @mia-platform/console-sdk-webpack-helpers
```

## Local Development

For local development, you can run:

```bash
pnpm install && pnpm test
```

To run tests on a specific package:

```bash
pnpm --filter {package.json name} {script}
```

or using the prepared script

```bash
pnpm types test
pnpm sdk test
pnpm vh test
pnpm wh test
```

[action-status-svg]: https://github.com/mia-platform/console-sdk/actions/workflows/test.yml/badge.svg
[github-action]: https://github.com/mia-platform/console-sdk/actions/workflows/test.yml
[standard-mia-svg]: https://img.shields.io/badge/code_style-standard--mia-orange.svg
[standard-mia]: https://github.com/mia-platform/eslint-config-mia
[coverall-svg]: https://coveralls.io/repos/github/mia-platform/console-sdk/badge.svg
[coverall-io]: https://coveralls.io/github/mia-platform/console-sdk
