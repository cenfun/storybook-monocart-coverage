import { getJestConfig } from '@storybook/test-runner';

const testRunnerConfig = getJestConfig();

export default {

    ... testRunnerConfig,

    globalSetup: './global-setup.js',
    globalTeardown: './global-teardown.js'

};
