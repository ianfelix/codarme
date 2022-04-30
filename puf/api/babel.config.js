module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        alias: {
          '~': './src',
          '@': '.',
        },
      },
    ],
  ],
};
