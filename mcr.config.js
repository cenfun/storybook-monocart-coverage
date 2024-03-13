import path from 'path';

const coverageOptions = {
    // logging: 'debug',

    name: 'My Storybook Coverage Report',
    reports: [
        ['console-details', {

        }],
        'v8'
    ],

    entryFilter: {
        '**/stories/**': true
    },

    // sourceFilter: {
    //     '**/node_modules/**': false,
    //     '**/stories/**': true
    // },

    sourcePath: (filePath, info) => {
        if (!filePath.includes('/') && info.distFile) {
            return `${path.dirname(info.distFile)}/${filePath}`;
        }
        return filePath;
    },

    outputDir: './coverage-reports'
};

export default coverageOptions;
