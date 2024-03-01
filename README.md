# Storybook V8 Coverage Example
Storybook test runner V8 coverage example for [monocart coverage reports](https://github.com/cenfun/monocart-coverage-reports)

## Step 1, Install
```
npm i monocart coverage reports -D
```

## Step 2, Collect V8 Coverage Data
- Collect coverage data with hooks `preVisit` and `postVisit`, see [.storybook/test-runner.js](.storybook/test-runner.js)
- Unfortunately, there is no `globalTeardown` test hook to generate coverage reports, see Step 3.

## Step 3, Generate Coverage Reports with `mcr` CLI
Fortunately, we can use `mcr` CLI instead of `globalTeardown`, see [mcr.config.js](mcr.config.js), check [monocart coverage reports](https://github.com/cenfun/monocart-coverage-reports) for more coverage options.

```sh
mcr test-storybook
```

Add scripts:
```js
// package.json
{
    "scripts": {
        "dev": "storybook dev -p 6006",
        "build": "storybook build",
        "test": "mcr test-storybook"
    },
}
```

And run:
```sh
npm run dev
npm run test
```