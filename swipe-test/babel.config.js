module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      ['nativewind/babel', { mode: 'transformOnly' }]
    ],
    presets: ['babel-preset-expo']
  };
};
