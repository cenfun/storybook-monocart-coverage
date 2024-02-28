# storybook-monocart-coverage
Storybook test runner V8 coverage example for [monocart coverage reports](https://github.com/cenfun/monocart-coverage-reports)

## Test hooks API Issue
There are only three hooks: `setup`, `preVisit`, and `postVisit`, We also need hooks like `globalSetup` and `globalTeardown`, just like in Playwright. 
The purpose is to collect multiple V8 coverages and finally generate a report on `globalTeardown`.

```js
// test-runner.js
import { CoverageReport } from 'monocart-coverage-reports';
const coverageOptions = {
    // logging: 'debug',
    name: 'My Storybook Coverage Report',
    reports: ['v8', 'console-details'],
    outputDir: './coverage-reports'
};

const coverageReport = new CoverageReport(coverageOptions);
coverageReport.cleanCache();

const config = {

    async preVisit(page, context) {
        // execute whatever you like, before the story renders
        await Promise.all([
            page.coverage.startJSCoverage({
                resetOnNavigation: false
            }),
            page.coverage.startCSSCoverage({
                resetOnNavigation: false
            })
        ]);

    },

    async postVisit(page, context) {
        // execute whatever you like, after the story renders
        const [jsCoverage, cssCoverage] = await Promise.all([
            page.coverage.stopJSCoverage(),
            page.coverage.stopCSSCoverage()
        ]);
        const coverageList = [... jsCoverage, ... cssCoverage];
        await coverageReport.add(coverageList);
    },

    // NOTE: There is no globalTeardown hook for now
    async globalTeardown() {
        await coverageReport.generate();
    }

};

export default config;

```
