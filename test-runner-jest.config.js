const { getJestConfig } = require('@storybook/test-runner');

const testRunnerConfig = getJestConfig();

module.exports = {

    ... testRunnerConfig,

    globalSetup: './global-setup.js',
    globalTeardown: './global-teardown.js'

};
