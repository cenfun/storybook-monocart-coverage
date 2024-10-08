import { globalSetup as playwrightGlobalSetup } from 'jest-playwright-preset';
import MCR from 'monocart-coverage-reports';
import coverageOptions from './mcr.config.js';

export default async function globalSetup(globalConfig) {

    await playwrightGlobalSetup(globalConfig);

    console.log('globalSetup');

    await MCR(coverageOptions).cleanCache();

}
