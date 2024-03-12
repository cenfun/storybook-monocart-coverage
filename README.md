# Storybook V8 Coverage Example
Storybook test runner V8 coverage example for [monocart coverage reports](https://github.com/cenfun/monocart-coverage-reports)

## Step 1, Install
```
npm i monocart-coverage-reports -D
```

## Step 2, Collect V8 Coverage Data
- Collect coverage data with hooks `preVisit` and `postVisit`, see [.storybook/test-runner.js](.storybook/test-runner.js)

## Step 3, Generate Coverage Reports
- Create config for `globalTeardown`, see [test-runner-jest.config.js](test-runner-jest.config.js)
- Create [global-teardown.js](global-teardown.js) for generating coverage reports
- Set coverage options in config file [mcr.config.js](mcr.config.js)

```sh
npm run dev
npm run test
```
The coverage report will be found here: `coverage-reports/index.html`

Check [monocart coverage reports](https://github.com/cenfun/monocart-coverage-reports) for more coverage options.