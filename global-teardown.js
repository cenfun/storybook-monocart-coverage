import { globalTeardown as playwrightGlobalTeardown } from 'jest-playwright-preset';
import MCR from 'monocart-coverage-reports';
import coverageOptions from './mcr.config.js';

export default async function globalTeardown(globalConfig) {

    await playwrightGlobalTeardown(globalConfig);

    console.log('globalTeardown');

    await MCR(coverageOptions).generate();

}
