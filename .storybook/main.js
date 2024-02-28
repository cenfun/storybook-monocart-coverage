const config = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/vue3-webpack5',
        options: {
            builder: {
                useSWC: true
            }
        }
    },
    docs: {
        autodocs: 'tag'
    }
};
export default config;
