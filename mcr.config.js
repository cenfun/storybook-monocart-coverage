const coverageOptions = {
    // logging: 'debug',

    name: 'My Storybook Coverage Report',
    reports: ['v8', 'console-details'],

    entryFilter: {
        '**/*.bundle.js': true
    },

    sourceFilter: {
        '**/node_modules/**': false,
        '**/stories/*.{vue,js}': true
    },

    sourcePath: {
        'storybook-monocart-coverage/': ''
    },

    outputDir: './coverage-reports'
};

export default coverageOptions;
