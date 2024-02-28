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
