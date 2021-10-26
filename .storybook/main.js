const path = require('path');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-actions'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.ts$/,
      loader: 'ts-loader',
      options: { appendTsSuffixTo: [/\.vue$/] },
    });
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, '../tsconfig.json')
    }));
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
      '@atoms': path.resolve(__dirname, '../src/components/atoms/'),
    };
    return config;
  },
  typecheck: {
    check: false
  }
};
