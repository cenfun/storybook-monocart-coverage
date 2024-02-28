import MCR from 'monocart-coverage-reports';
import coverageOptions from '../mcr.config.js';
// collect coverage data from Playwright page
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
        await MCR(coverageOptions).add(coverageList);
    }

};

export default config;
