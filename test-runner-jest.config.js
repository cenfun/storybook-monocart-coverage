const { getJestConfig } = require('@storybook/test-runner');

const testRunnerConfig = getJestConfig();

module.exports = {

    ... testRunnerConfig,

    globalTeardown: './global-teardown.js'

};
