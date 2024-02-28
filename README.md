# storybook-monocart-coverage
Storybook test runner V8 coverage example for [monocart coverage reports](https://github.com/cenfun/monocart-coverage-reports)

## Install
```
npm i monocart coverage reports -D
```

## Unfortunately, there is no 'globalTeardown' test hook
There are only three hooks: `setup`, `preVisit`, and `postVisit`

## Fortunately, we can use `mcr` CLI instead of `globalTeardown`
```sh
mcr test-storybook
```